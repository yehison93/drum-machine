import { useEffect } from 'react';

const useKeyPress = (handleKeyPress) => {
  
  useEffect(() => {
    window.addEventListener('keypress', handleKeyPress);
  
    return () => {
      window.removeEventListener('keypress', handleKeyPress);
    };
  }, [handleKeyPress]);
};

export default useKeyPress;
