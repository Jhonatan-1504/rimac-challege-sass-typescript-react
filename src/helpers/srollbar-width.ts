import { useEffect, useState } from 'react';

const useScroll = () => {
  const [scrollX, setScrollX] = useState(0);

  const handleScroll = () => {
    setScrollX(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleScroll);

    handleScroll();
    
    return () => {
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return scrollX;
};

export default useScroll;
