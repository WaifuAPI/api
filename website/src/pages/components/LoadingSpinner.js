// components/LoadingSpinner.js
const LoadingSpinner = () => {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="loader ease-linear rounded-full border-4 border-t-4 border-blue-500 h-12 w-12 mb-4 animate-spin"></div>
      </div>
    );
  };
  
  export default LoadingSpinner;
  