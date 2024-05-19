import { useState, useEffect } from 'react';

const useIsSmallerThan768 = () => {
  const [isSmallerThan768, setIsSmallerThan768] = useState(
    window.innerWidth <= 768
  );

  useEffect(() => {
    const handleResize = () => {
      setIsSmallerThan768(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isSmallerThan768;
};

export default useIsSmallerThan768;
