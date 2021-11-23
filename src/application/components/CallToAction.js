import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
export default function Float() {
  const getImageSrc = (width) => {
    // if (width >= 1080) return desktopImage;
    // if (width >= 720) return tabletImage;
    // return mobileImage;
  };

  // const src = getImageSrc(window.innerWidth);

  return (
    <div className='fixed right-10 bottom-40 shadow-xl border z-20 '>
      <img
        src='https://firebasestorage.googleapis.com/v0/b/nonpareil-collection.appspot.com/o/assets%2Fcontact.jpg?alt=media&token=5626135e-32e5-4ccc-bbb1-1f355dd787c2'
        alt=''
        className=''
      />
      <div className='absolute bottom-10 px-6 '>
        <p className='text-white  text-4xl '>Interested?</p>
        <p className='text-white text-xl mt-4'>
          You must contact a representative via email or telephone to place an
          order and make payment.
        </p>
        <motion.div
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 1.05,
          }}
        >
          <Link
            to='/collection:all'
            style={{
              border: '1px solid #332C2C',
              color: '#EDD3A7',
              background: '#0D0D0D',
            }}
            className='inline-block bg-black border-transparent mt-8 flex justify-center py-4 px-8 text-base font-lg text-white  hover:bg-gray-900 shadow-xl'
          >
            Contact Representative{' '}
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
