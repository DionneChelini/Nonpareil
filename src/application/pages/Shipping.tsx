import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import ReactGA from "react-ga";
export default function Example() {
  useEffect(() => {
    window.scroll(0, 0);
    ReactGA.pageview(window.location.pathname + window.location.search);
    //eslint-disable-next-line
  }, []);
  return (
    <div className='py-16 xl:py-36 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden'>
      <div className='max-w-max lg:max-w-7xl mx-auto'>
        <div className='relative z-10 mb-8 md:mb-2 md:px-6'>
          <div className='text-base max-w-prose lg:max-w-none'>
            <h2 className='leading-6 text-yellow-600 font-semibold tracking-wide uppercase'>
              SHIPPING
            </h2>
            <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
              Internation Shipping and Logistics
            </p>
          </div>
        </div>
        <div className='relative'>
          <svg
            className='hidden md:block absolute top-0 right-0 -mt-20 -mr-20'
            width={404}
            height={384}
            fill='none'
            viewBox='0 0 404 384'
            aria-hidden='true'
          >
            <defs>
              <pattern
                id='95e8f2de-6d30-4b7e-8159-f791729db21b'
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits='userSpaceOnUse'
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className='text-gray-200'
                  fill='currentColor'
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill='url(#95e8f2de-6d30-4b7e-8159-f791729db21b)'
            />
          </svg>
          <svg
            className='hidden md:block absolute bottom-0 left-0 -mb-20 -ml-20'
            width={404}
            height={384}
            fill='none'
            viewBox='0 0 404 384'
            aria-hidden='true'
          >
            <defs>
              <pattern
                id='7a00fe67-0343-4a3c-8e81-c145097a3ce0'
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits='userSpaceOnUse'
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className='text-gray-200'
                  fill='currentColor'
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill='url(#7a00fe67-0343-4a3c-8e81-c145097a3ce0)'
            />
          </svg>
          <div className='relative md:bg-white md:p-6'>
            <div className='lg:grid lg:grid-cols-2 lg:gap-6'>
              <div className='prose prose-indigo prose-lg text-gray-500 lg:max-w-none'>
                <p>
                  For your convenience, Nonpareil also managers all logistics
                  relating to transport, including professional packaging,
                  customs clearance, warehousing and delivery worlwide. Our
                  transportation charges are always offered at net cost price
                  (as quoted to us bu our specialist international couriers).
                  Unless otherwise stated, our consignments are fully insured
                  while in transit and up to the point of acceptance of
                  delivery. As a general rule there are two main delivery
                  options:
                </p>
              </div>
              <div className='mt-6 prose prose-indigo prose-lg text-gray-500 lg:mt-0'>
                <ul className='list'>
                  <li>
                    <span className='font-bold'>Curb side delivery</span> - This
                    is a standard service and the most economic method. One
                    driver only and delivery to curb side. The client is
                    therefore advised to organize assistance at delivery point.
                  </li>
                  <li>
                    <span className='font-bold'>Curb side delivery</span> - This
                    is a standard service and the most economic method. One
                    driver only and delivery to curb side. The client is
                    therefore advised to organize assistance at delivery point.
                  </li>
                </ul>
              </div>
            </div>
            <div className='mt-8 inline-flex rounded-md shadow'>
              <motion.div
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 1.05,
                }}
              >
                <Link
                  to='/contact_us'
                  style={{
                    border: "1px solid #332C2C",
                    color: "#EDD3A7",
                    background: "#0D0D0D",
                  }}
                  className=' bg-black border-transparent mt-14 flex py-4 px-8 text-base font-lg text-white  hover:bg-gray-900 shadow-xl'
                >
                  Contact representative{" "}
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
