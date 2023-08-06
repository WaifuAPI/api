import { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import LoadingSpinner from './components/LoadingSpinner'
import generateToken from '../utils/generateToken'

const Dashboard = () => {
  const router = useRouter()
  const [user, setUser] = useState(null)
  const [randomToken, setRandomToken] = useState('')
  const [showToken, setShowToken] = useState(true)
  const [fetched, setFetched] = useState(false) // Add fetched state
  const tokenInputRef = useRef(null)

  useEffect(() => {
    // Check if the user has a valid access token
    const accessToken = Cookies.get('access_token')
    if (!accessToken) {
      // Redirect the user to the Discord OAuth login page
      router.push(
        `https://discord.com/api/oauth2/authorize?client_id=${process.env.CLIENT_ID}&redirect_uri=${process.env.REDIRECT_URL}&response_type=code&scope=identify%20email`
      )
      return
    }

    // The user has a valid access token, fetch user details
    const fetchDiscordUserDetails = async () => {
      try {
        const response = await axios.get('https://discord.com/api/users/@me', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        setUser(response.data)
        // Call fetchUserDetails here after userData is set
        fetchUserDetails(response.data)
      } catch (error) {
        console.error('Error fetching user details:', error)
        // Handle error, like clearing invalid tokens from cookies and local storage
        Cookies.remove('access_token')
        localStorage.removeItem('showToken')
        router.push(
          `https://discord.com/api/oauth2/authorize?client_id=${process.env.CLIENT_ID}&redirect_uri=${process.env.REDIRECT_URL}&response_type=code&scope=identify%20email`
        )
      } finally {
        setFetched(true) // Mark user details as fetched
      }
    }

    // Fetch user details function
    const fetchUserDetails = async userData => {
      if (!userData) {
        return // Exit early if userData is undefined
      }
      const response = await axios.post(
        '/api/auth/user', // Send the request to the server-side API route
        {
          id: userData.id,
          email: userData.email,
        }
      )

      setRandomToken(response.data)
    }

    // Call the function to fetch user details
    fetchDiscordUserDetails()
    handleToggleShowToken() // Initially show the token
    const storedShowToken = localStorage.getItem('showToken')
    if (storedShowToken) {
      setShowToken(JSON.parse(storedShowToken))
    } else {
      setShowToken(false)
    }

    window.addEventListener('beforeunload', handleBeforeUnload)

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload)
    }
  }, [])

  const handleBeforeUnload = () => {
    localStorage.removeItem('showToken')
  }

  const handleLogout = () => {
    Cookies.remove('access_token')
    localStorage.removeItem('showToken')
    router.push('/')
  }

  const handleRegenerateToken = async () => {
    try {
      // Check if the rate limit has been exceeded on the client-side
      const lastRegenTime = parseInt(localStorage.getItem('last_regen_time') || '0', 10);
      const currentTime = Date.now();
      const timeDifference = currentTime - lastRegenTime;
      const minInterval = 30 * 1000; // 2 times per minute (2 * 60 * 1000 ms)
  
      if (timeDifference < minInterval) {
        const remainingTime = (minInterval - timeDifference) / 1000;
        throw new Error(`Rate limit exceeded. Please wait ${remainingTime.toFixed(0)} seconds before regenerating the token again.`);
      }
  
      const accessToken = Cookies.get('access_token');
      if (!accessToken) {
        throw new Error('Access token not found.');
      }
  
      const newToken = generateToken(user.id, process.env.HMAC_KEY);
  
      // Send the new token to the server to save it, similar to the original logic
      const response = await axios.post('/api/auth/user', {
        id: user.id,
        token: newToken,
      });
  
      setRandomToken(newToken);
      setShowToken(true);
  
      // Update the last regeneration time on the client-side
      localStorage.setItem('last_regen_time', currentTime.toString());
  
      toast.info('Successfully regenerated!', {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
  
      console.log('POST request response:', response.data);
    } catch (error) {
      if (error.message.startsWith('Rate limit exceeded')) {
        toast.error(error.message, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      } else {
        console.error('Error regenerating token:', error);
        toast.error('Error regenerating token.', {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      }
    }
  };
  
  

  const handleCopyToken = () => {
    navigator.clipboard.writeText(randomToken)
    toast.success('Token copied to clipboard!', {
      position: toast.POSITION.BOTTOM_RIGHT,
    })
  }

  const getEyeIcon = () => {
    return showToken ? (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-gray-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M2 9l6 6 6-6"
        />
      </svg>
    ) : (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-gray-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 4.535c2.71-.973 5.566-.973 8.276 0M3 3l18 18"
        />
      </svg>
    )
  }

  const handleToggleShowToken = () => {
    setShowToken(prevShowToken => !prevShowToken)
    localStorage.setItem('showToken', JSON.stringify(!showToken))
  }

  const handleScroll = event => {
    event.preventDefault()
    const { deltaY } = event
    const inputElement = tokenInputRef.current
    const maxScrollTop = inputElement.scrollHeight - inputElement.clientHeight
    const newScrollTop = inputElement.scrollTop + deltaY

    if (newScrollTop >= maxScrollTop) {
      setShowToken(false)
    } else if (newScrollTop <= 0) {
      setShowToken(true)
    }
  }

  const handleLogoutClick = e => {
    e.stopPropagation()
    handleLogout()
  }

  return (
    <div className="min-h-screen bg-white">
      <ToastContainer />
      {fetched && user ? (
        <>
          <div className="p-4">
            <nav className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-between">
              <div className="text-white font-bold text-xl mb-4 md:mb-0">
                <span>Dashboard</span>
              </div>
              <div className="space-x-4 flex items-center relative">
                {' '}
                {/* Add relative positioning */}
                {/* Home button */}
                <button
                  onClick={() => router.push('/')} // Add the home route here
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Home
                </button>
                {/* Documentation button */}
                <button
                  onClick={() => router.push('https://docs.waifu.it')} // Add the documentation route here
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Documentation
                </button>
                {/* User picture */}
                <div className="relative flex items-center">
                  {' '}
                  {/* Add flex and items-center */}
                  <img
                    src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`}
                    alt={user.username}
                    className="w-8 h-8 rounded-full cursor-pointer"
                  />
                  {/* Logout button */}
                  <button
                    onClick={handleLogoutClick}
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </nav>
          </div>

          <div className="py-8">
            <div className="max-w-screen-lg mx-auto px-4">
              {randomToken && (
                <div
                  className="max-w-md mx-auto bg-gray-100 p-4 rounded-md mb-4"
                  style={{ marginTop: '140px' }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Token:</span>
                  </div>

                  <div className="relative max-w-xs md:max-w-full">
                    <input
                      ref={tokenInputRef}
                      type={showToken ? 'text' : 'password'}
                      value={randomToken}
                      readOnly
                      className={`w-full px-3 py-2 rounded-md bg-white border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                        showToken ? 'text-base' : 'text-sm'
                      } md:text-base text-ellipsis`}
                      onWheel={handleScroll}
                    />
                    <div
                      className="absolute top-0 right-0 bottom-0 flex items-center px-3 cursor-pointer"
                      onClick={handleToggleShowToken}
                    >
                      {getEyeIcon()}
                    </div>
                  </div>

                  <div className="mt-4 flex justify-end space-x-2">
                    <button
                      onClick={handleRegenerateToken}
                      className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                      style={{ marginTop: '5px' }}
                    >
                      Regenerate
                    </button>
                    <button
                      onClick={handleCopyToken}
                      className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                      style={{ marginTop: '5px' }}
                    >
                      Copy
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
          <footer
            className="w-full h-12 border-t border-gray-300 flex justify-center items-center mt-auto md:mt-10 lg:mt-20 text-sm"
            style={{ marginTop: '160px' }}
          >
            Made with ❤️ by Aeryk
          </footer>
        </>
      ) : (
        <div className="flex flex-grow items-center justify-center">
          <LoadingSpinner />
        </div>
      )}
    </div>
  )
}

export default Dashboard
