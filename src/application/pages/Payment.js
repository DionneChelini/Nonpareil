import {
  faCcStripe,
  faCcVisa,
  faCcMastercard,
  faCcApplePay,
  faCcAmazonPay,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
export default function Example() {
  useEffect(() => {
    window.scroll(0, 0);

    //eslint-disable-next-line
  }, []);
  return (
    <div className='py-16 xl:py-36 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden'>
      <div className='max-w-max lg:max-w-7xl mx-auto'>
        <div className='relative z-10 mb-8 md:mb-2 md:px-6'>
          <div className='text-base max-w-prose lg:max-w-none'>
            <h2 className='leading-6 text-yellow-600 font-semibold tracking-wide uppercase'>
              PAYMENT
            </h2>
            <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
              Making Payment Online
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
                  We accept payment via{" "}
                  <span className='text-yellow-500'>Stripe</span> Online Payment
                  Processor. The following merchant facilities are accepted;
                  Visa, Mastercard, ApplePay, and AmazonPay. Once order is
                  finalised, we will forward a link to proceed with payment.
                </p>
                <p>
                  {" "}
                  Please note that the net prices displayed on our site are
                  provided as guidance only. They do not include
                  personalization, exchange rates, and delivery charges.
                </p>
                <FontAwesomeIcon
                  icon={faCcStripe}
                  className=' text-gray-800 m-0 text-4xl'
                />{" "}
                <FontAwesomeIcon
                  icon={faCcVisa}
                  className=' text-gray-800 m-0 text-4xl'
                />{" "}
                <FontAwesomeIcon
                  icon={faCcMastercard}
                  className=' text-gray-800 m-0 text-4xl'
                />{" "}
                <FontAwesomeIcon
                  icon={faCcApplePay}
                  className=' text-gray-800 m-0 text-4xl'
                />{" "}
                <FontAwesomeIcon
                  icon={faCcAmazonPay}
                  className=' text-gray-800 m-0 text-4xl'
                />{" "}
              </div>
              <div className='mt-6 prose prose-indigo prose-lg text-gray-500 lg:mt-0'>
                <img
                  src='https://firebasestorage.googleapis.com/v0/b/top-quality-furniture---dev.appspot.com/o/Screenshot%20from%202021-11-02%2000-03-05.png?alt=media&token=23d5d777-9522-49a5-a082-d8e042d088d5'
                  alt=''
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
