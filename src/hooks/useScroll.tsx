import { useState, useEffect } from "react";

const useScroll = (): boolean => {
  const [isScrolledBottom, setIsScrolledBottom] = useState(false);

  useEffect(() => {
    const updatePosition = () => {
      setIsScrolledBottom(
        document.documentElement.scrollTop + window.innerHeight >=
          document.body.scrollHeight && document.documentElement.scrollTop !== 0
      );
    };
    window.addEventListener("scroll", updatePosition);
    updatePosition();

    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return isScrolledBottom;
};

export default useScroll;
