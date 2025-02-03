import { useState } from "react";

const FunctionalErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  const resetErrorBoundary = () => {
    setHasError(false);
  };

  try {
    if (hasError) {
      return (
        <div>
          <h1>Something went wrong.</h1>
          <button onClick={resetErrorBoundary}>Try Again</button>
        </div>
      );
    }

    return children;
  } catch (error) {
    setHasError(true);
    return <h1>Something went wrong.- {error}</h1>;
  }
};

export default FunctionalErrorBoundary;
