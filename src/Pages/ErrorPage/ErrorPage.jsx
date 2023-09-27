

const ErrorPage = ({errorType}) => {
    
        let errorMessage = 'An error occurred.';
        if (errorType === '404') {
            errorMessage = 'Page not found.';
          } else if (errorType === '500') {
            errorMessage = 'Internal server error.';
          }
    return (
        <div className="h-screen flex justify-center items-center">
            <h1>{errorMessage}</h1>
      <p>Please try again later or contact support.</p> 
        </div>
    );
};

export default ErrorPage;