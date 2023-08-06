import { useRouter } from 'next/router';
import { useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

const Callback = () => {
  const router = useRouter();
  const { code } = router.query;

  useEffect(() => {
    if (code) {
      // Exchange the authorization code for an access token
      axios
        .post(
          `https://discord.com/api/oauth2/token`,
          new URLSearchParams({
            client_id: process.env.CLIENT_ID,
            client_secret: process.env.CLIENT_SECRET,
            grant_type: 'authorization_code',
            code,
            redirect_uri: process.env.REDIRECT_URL,
            scope: 'identify%20email',
          }),
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
          }
        )
        .then((response) => {
          // Store the access token in a cookie
          const { access_token } = response.data;
          Cookies.set('access_token', access_token, { expires: 1 }); // Set an expiration of 1 day
          router.push('/dashboard'); // Redirect to the dashboard page after successful authentication
        })
        .catch((error) => {
          console.error('Error during token exchange:', error);
        });
    }
  }, [code]);

  return;
};

export default Callback;
