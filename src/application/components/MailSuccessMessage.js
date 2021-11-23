import useLottieAnimation from '../../hooks/useLottieAnimation';

export default function MailSuccessMessage() {
  let animation = useLottieAnimation(
    require('../../animations/message-sent.json')
  );
  return <div ref={animation} className='h-full'></div>;
}
