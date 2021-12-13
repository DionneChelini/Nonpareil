import { MailIcon } from "@heroicons/react/solid";
import { useState } from "react";
import useFirebase from "../../hooks/useFirebase";
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
  useFirebase({ user, submit, setSubmit, setUser });

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

              <div className='mt-10'>
                <form
                  action='https://shopbuyculture.us20.list-manage.com/subscribe/post'
                  method='POST'
                  className='grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8'
                >
                  <input
                    type='hidden'
                    name='u'
                    value='81749b520733852e4da3d7935'
                  />
                  <input type='hidden' name='id' value='2a7896df7c' />
                  <div className='sm:col-span-2'>
                    <div className='flex justify-between'>
                      <label
                        htmlFor='first-name'
                        className='block text-sm font-medium text-gray-700'
                      >
                        First name
                      </label>
                      <span
                        className='text-sm text-gray-500'
                        id='first-name-required'
                      >
                        *Required
                      </span>
                    </div>
                    <div className='mt-1'>
                      <input
                        type='text'
                        required
                        name='MERGE1'
                        id='first-name'
                        autoComplete='given-name'
                        className='py-3 px-4 block w-full shadow-sm focus:ring-yellow-500 focus:border-yellow-500 border-gray-300 rounded-md'
                      />
                    </div>
                  </div>

                  <div className='sm:col-span-2'>
                    <div className='flex justify-between'>
                      <label
                        htmlFor='email'
                        className='block text-sm font-medium text-gray-700'
                      >
                        Email
                      </label>
                      <span
                        className='text-sm text-gray-500'
                        id='email-required'
                      >
                        *Required
                      </span>
                    </div>
                    <div className='mt-1'>
                      <input
                        id='MERGE0'
                        required
                        name='MERGE0'
                        type='email'
                        autoComplete='email'
                        className='py-3 px-4 block w-full shadow-sm focus:ring-yellow-500 focus:border-yellow-500 border-gray-300 rounded-md'
                      />
                    </div>
                  </div>
                  <div className='sm:col-span-2'>
                    <div className='flex justify-between'>
                      <label
                        htmlFor='tel'
                        className='block text-sm font-medium text-gray-700'
                      >
                        Telephone
                      </label>
                      <span
                        className='text-sm text-gray-500'
                        id='telephone-required'
                      >
                        *Required
                      </span>
                    </div>
                    <div className='mt-1'>
                      <input
                        id='MERGE5'
                        required
                        name='MERGE5'
                        type='tel'
                        autoComplete='tel'
                        className='py-3 px-4 block w-full shadow-sm focus:ring-yellow-500 focus:border-yellow-500 border-gray-300 rounded-md'
                      />
                    </div>
                  </div>
                  <div className='sm:col-span-2'>
                    <div className='flex justify-between'>
                      <label
                        htmlFor='company'
                        className='block text-sm font-medium text-gray-700'
                      >
                        Company
                      </label>
                      <span
                        className='text-sm text-gray-500'
                        id='company-optional'
                      >
                        Optional
                      </span>
                    </div>
                    <div className='mt-1'>
                      <input
                        id='MERGE2'
                        name='MERGE2'
                        type='text'
                        autoComplete='organization'
                        className='py-3 px-4 block w-full shadow-sm focus:ring-yellow-500 focus:border-yellow-500 border-gray-300 rounded-md'
                      />
                    </div>
                  </div>
                  <div className='sm:col-span-2'>
                    <div className='flex justify-between'>
                      <label
                        htmlFor='country-name'
                        className='block text-sm font-medium text-gray-700'
                      >
                        City/State
                      </label>
                      <span
                        className='text-sm text-gray-500'
                        id='state-required'
                      >
                        *Required
                      </span>
                    </div>
                    <div className='mt-1'>
                      <input
                        id='MERGE4'
                        required
                        name='MERGE4'
                        type='text'
                        autoComplete='country-name'
                        className='py-3 px-4 block w-full shadow-sm focus:ring-yellow-500 focus:border-yellow-500 border-gray-300 rounded-md'
                      />
                    </div>
                  </div>
                  <div className='sm:col-span-2'>
                    <div className='flex justify-between'>
                      <label
                        htmlFor='country-name'
                        className='block text-sm font-medium text-gray-700'
                      >
                        Country
                      </label>
                      <span
                        className='text-sm text-gray-500'
                        id='country-required'
                      >
                        *Required
                      </span>
                    </div>
                    <div className='mt-1'>
                      <input
                        id='MERGE6'
                        required
                        name='MERGE6'
                        type='text'
                        autoComplete='country-name'
                        className='py-3 px-4 block w-full shadow-sm focus:ring-yellow-500 focus:border-yellow-500 border-gray-300 rounded-md'
                      />
                    </div>
                  </div>

                  <div className='sm:col-span-2'>
                    <div className='flex justify-between'>
                      <label
                        htmlFor='message'
                        className='block text-sm font-medium text-gray-700'
                      >
                        Enquiry
                      </label>
                      <span
                        className='text-sm text-gray-500'
                        id='enquiry-required'
                      >
                        *Required
                      </span>
                    </div>
                    <div className='mt-1'>
                      <textarea
                        id='MERGE3'
                        name='MERGE3'
                        required
                        rows={4}
                        className='py-3 px-4 block w-full shadow-sm focus:ring-yellow-500 focus:border-yellow-500 border border-gray-300 rounded-md'
                        placeholder='Please provide Product ID, ex. AT23492F, as reference, available on product overview page'
                      />
                    </div>
                  </div>
                  <div className='sm:col-span-2'>
                    <button
                      type='submit'
                      className='w-full inline-flex items-center justify-center px-6 py-3 border border-transparent shadow-sm text-base font-medium text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500'
                    >
                      Let's talk
                    </button>
                  </div>
                  <div className='sm:col-span-2'>
                    <div className='flex items-start'>
                      <div className='text-justify'>
                        <p className='text-xs text-gray-500'>
                          Thank you for using the Nonpareil Collection enquiry
                          form. Please be assured of the fact that any
                          information you provide to Nonpareil Collection is
                          strictly for internal use only. Nonpareil Collection
                          is a private company and does not share any
                          information provided with any third parties.
                        </p>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
