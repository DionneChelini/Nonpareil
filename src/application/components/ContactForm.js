import { MailIcon } from "@heroicons/react/solid";
import { useState } from "react";
import useFirebase from "../../hooks/useFirebase";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Example() {
  const [submit, setSubmit] = useState(false);
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    budget: "",
    source: "",
  });
  useFirebase({ user, submit, setSubmit, setUser });

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
    return;
  };

  const handleUserInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className='mt-24'>
      {/* Header */}
      <div className='bg-white'>
        <div className='max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <h2 className='text-base font-semibold text-yellow-600 tracking-wide uppercase'>
              CONTACT NOW
            </h2>
            <p className='mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl'>
              Sales Support
            </p>
            <p className='max-w-xl mt-5 mx-auto text-xl text-gray-500'>
              Interested in purchasing one of our designer pieces? Sales support
              awaits to handle all enquiries. Please fill out your details below
              or contact us via telephone.
            </p>
          </div>
          <div className=''>
            <div className='max-w-md mx-auto sm:max-w-lg lg:mx-auto lg:mt-24'>
              <form
                onSubmit={onSubmit}
                className='mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8'
              >
                <div>
                  <label
                    htmlFor='first-name'
                    className='block text-sm font-medium text-gray-700'
                  >
                    First name
                  </label>
                  <div className='mt-1'>
                    <input
                      type='text'
                      name='firstName'
                      id='first-name'
                      autoComplete='given-name'
                      className='block w-full shadow-sm sm:text-sm focus:ring-yellow-500 focus:border-yellow-500  border-gray-300 rounded-md'
                      value={user.firstName}
                      onChange={handleUserInput}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor='last-name'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Last name
                  </label>
                  <div className='mt-1'>
                    <input
                      type='text'
                      name='lastName'
                      id='last-name'
                      autoComplete='family-name'
                      className='block w-full shadow-sm sm:text-sm focus:ring-yellow-500 focus:border-yellow-500 border-gray-300 rounded-md'
                      value={user.lastName}
                      onChange={handleUserInput}
                      required
                    />
                  </div>
                </div>
                <div className='sm:col-span-2'>
                  <label
                    htmlFor='email'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Email
                  </label>
                  <div className='mt-1'>
                    <input
                      id='email'
                      name='email'
                      type='email'
                      autoComplete='email'
                      className='block w-full shadow-sm sm:text-sm focus:ring-yellow-500 focus:border-yellow-500  border-gray-300 rounded-md'
                      value={user.email}
                      onChange={handleUserInput}
                      required
                    />
                  </div>
                </div>

                <div className='sm:col-span-2'>
                  <div className='flex justify-between'>
                    <label
                      htmlFor='how-can-we-help'
                      className='block text-sm font-medium text-gray-700'
                    >
                      How can we help you?
                    </label>
                    <span
                      id='how-can-we-help-description'
                      className='text-sm text-gray-500'
                    >
                      Max. 500 characters
                    </span>
                  </div>
                  <div className='mt-1'>
                    <textarea
                      id='how-can-we-help'
                      name='message'
                      aria-describedby='how-can-we-help-description'
                      rows={4}
                      className='block w-full shadow-sm sm:text-sm focus:ring-yellow-500 focus:border-yellow-500 border border-gray-300 rounded-md'
                      value={user.message}
                      onChange={handleUserInput}
                      required
                    />
                  </div>
                </div>
                <fieldset className='sm:col-span-2'>
                  <legend className='block text-sm font-medium text-gray-700'>
                    Expected budget
                  </legend>
                  <div className='mt-4 grid grid-cols-1 gap-y-4'>
                    <div className='flex items-center'>
                      <input
                        id='budget-under-25k'
                        name='budget'
                        defaultValue='under_25k'
                        type='radio'
                        className='focus:ring-yellow-500 h-4 w-4 text-yellow-600 border-gray-300'
                        onChange={handleUserInput}
                      />
                      <label htmlFor='budget-under-25k' className='ml-3'>
                        <span className='block text-sm text-gray-700'>
                          Less than $25K
                        </span>
                      </label>
                    </div>
                    <div className='flex items-center'>
                      <input
                        id='budget-25k-50k'
                        name='budget'
                        defaultValue='25k-50k'
                        type='radio'
                        className='focus:ring-yellow-500 h-4 w-4 text-yellow-600 border-gray-300'
                        onChange={handleUserInput}
                      />
                      <label htmlFor='budget-25k-50k' className='ml-3'>
                        <span className='block text-sm text-gray-700'>
                          $25K – $50K
                        </span>
                      </label>
                    </div>
                    <div className='flex items-center'>
                      <input
                        id='budget-50k-100k'
                        name='budget'
                        defaultValue='50k-100k'
                        type='radio'
                        className='focus:ring-yellow-500 h-4 w-4 text-yellow-600 border-gray-300'
                        onChange={handleUserInput}
                      />
                      <label htmlFor='budget-50k-100k' className='ml-3'>
                        <span className='block text-sm text-gray-700'>
                          $50K – $100K
                        </span>
                      </label>
                    </div>
                    <div className='flex items-center'>
                      <input
                        id='budget-over-100k'
                        name='budget'
                        defaultValue='over_100k'
                        type='radio'
                        className='focus:ring-yellow-500 h-4 w-4 text-yellow-600 border-gray-300'
                        onChange={handleUserInput}
                      />
                      <label htmlFor='budget-over-100k' className='ml-3'>
                        <span className='block text-sm text-gray-700'>
                          $100K+
                        </span>
                      </label>
                    </div>
                  </div>
                </fieldset>
                <div className='sm:col-span-2'>
                  <label
                    htmlFor='how-did-you-hear-about-us'
                    className='block text-sm font-medium text-gray-700'
                  >
                    How did you hear about us?
                  </label>
                  <div className='mt-1'>
                    <input
                      type='text'
                      name='source'
                      id='how-did-you-hear-about-us'
                      className='shadow-sm focus:ring-yellow-500 focus:border-yellow-500 block w-full sm:text-sm border-gray-300 rounded-md'
                      value={user.source}
                      onChange={handleUserInput}
                      required
                    />
                  </div>
                </div>
                <div className='text-right sm:col-span-2'>
                  <div className='mt-8 inline-flex rounded-md shadow'>
                    <motion.div
                      whileHover={{
                        scale: 1.05,
                      }}
                      whileTap={{
                        scale: 1.05,
                      }}
                    >
                      <button
                        style={{
                          color: "#EDD3A7",
                          background: "#0D0D0D",
                        }}
                        className=' bg-black  flex py-4 px-8 text-base font-lg text-white  hover:bg-gray-900 shadow-xl'
                      >
                        Send enquiry{" "}
                        <MailIcon className='h-6 w-6 pl-2' aria-hidden='true' />
                      </button>
                    </motion.div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
