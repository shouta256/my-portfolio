import { useState, useEffect } from 'react';

const useIsSmallerThan1080 = () => {
  const [isSmallerThan1080, setIsSmallerThan1080] = useState(
    window.innerWidth <= 1080
  );

  useEffect(() => {
    const handleResize = () => {
      setIsSmallerThan1080(window.innerWidth <= 1080);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isSmallerThan1080;
};

export default useIsSmallerThan1080;
