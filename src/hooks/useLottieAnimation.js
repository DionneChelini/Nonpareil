import { useEffect, useRef } from "react";
import lottie from "lottie-web";

const useLottieAnimation = (url) => {
  const animation = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: animation.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: url,
    });
  }, [url]);
  return animation;
};

export default useLottieAnimation;
