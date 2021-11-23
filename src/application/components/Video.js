import { useState } from "react";

export default function Video() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const onDataLoaded = () => {
    setIsVideoLoaded(true);
  };
  return (
    <div
      aria-hidden='true'
      className='absolute inset-0 overflow-hidden opacity-50'
    >
      <img
        src='https://firebasestorage.googleapis.com/v0/b/top-quality-furniture---dev.appspot.com/o/Screenshot%20from%202021-10-26%2023-02-14.png?alt=media&token=1ad31e35-1347-44e5-bad2-e201761bce56'
        className='filter grayscale blur-sm w-full object-center object-cover bg-cover trans'
        alt=''
        style={{ display: isVideoLoaded ? "none" : "block" }}
      />

      <video
        onLoadedData={onDataLoaded}
        className='filter w-full h-full object-center object-cover bg-cover'
        autoPlay
        playsInline
        loop
        muted
        src='https://firebasestorage.googleapis.com/v0/b/nonpareil-collection.appspot.com/o/final_6177d24542758d00dd9a42b6_176216.mp4?alt=media&token=4dfd3ecb-b7d1-4d67-bbf7-96d7ce5e7669'
      />
    </div>
  );
}
