import useLottieAnimation from "../../hooks/useLottieAnimation";

export default function Loader() {
  let animation = useLottieAnimation(require("../../animations/loader.json"));
  return <div ref={animation} className='h-32'></div>;
}
