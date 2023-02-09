import { MailIcon } from "@heroicons/react/solid";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Switch } from "@headlessui/react";
export default function Example() {
  const [submit, setSubmit] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const [user, setUser] = useState({
    MERGE1: "",
    MERGE2: "",
    MERGE0: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
    return;
  };

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const handleUserInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className='mt-24'>
      {/* Header */}
      <div className='bg-white'>
        <div className='max-w-7xl mx-auto py-16 px-4 sm:py-16 sm:px-6 lg:px-8'>
          <h2 className='text-base text-center font-semibold text-yellow-600 tracking-wide uppercase'>
            GET IN TOUCH
          </h2>
          <p className='mt-1 text-4xl text-center font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl'>
            Contact Us
          </p>
          <p className='max-w-xl mt-5 mx-auto text-xl text-center text-gray-500'>
            Interested in purchasing one of our designer pieces? Specialized
            staff awaits to handle all enquiries. Please fill out your details
            below or contact us via telephone.
          </p>

          <div className='bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:pb-24 lg:pt-8'>
            <div className='relative max-w-xl mx-auto'>
              <svg
                className='absolute left-full transform translate-x-1/2'
                width={404}
                height={404}
                fill='none'
                viewBox='0 0 404 404'
                aria-hidden='true'
              >
                <defs>
                  <pattern
                    id='85737c0e-0916-41d7-917f-596dc7edfa27'
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
                  height={404}
                  fill='url(#85737c0e-0916-41d7-917f-596dc7edfa27)'
                />
              </svg>
              <svg
                className='absolute right-full bottom-0 transform -translate-x-1/2'
                width={404}
                height={404}
                fill='none'
                viewBox='0 0 404 404'
                aria-hidden='true'
              >
                <defs>
                  <pattern
                    id='85737c0e-0916-41d7-917f-596dc7edfa27'
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
                  height={404}
                  fill='url(#85737c0e-0916-41d7-917f-596dc7edfa27)'
                />
              </svg>

              <div className="flow-root mt-4 justify-center  sm:flex">
                        <div className="group -m-2 flex justify-center items-center p-2">
                            <button
                                type="button"
                                className="inline-flex justify-center items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 sm:mr-4 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                            >

                                WhatsApp +393278659243
                            </button>

                        </div>
             
                    </div>
      
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
