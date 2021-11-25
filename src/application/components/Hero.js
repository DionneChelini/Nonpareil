import Video from "./Video";
// import Logo from '../../resources/logo.png';

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { ArrowRightIcon } from "@heroicons/react/solid";
/* This example requires Tailwind CSS v2.0+ */
export default function Example() {
  return (
    <div className='bg-white'>
      <motion.div
        className='relative bg-gradient-to-r from-gray-400 to-gray-600'
        initial={{ height: "100vh" }}
        animate={{ height: "75vh" }}
        transition={{ duration: 6 }}
      >
        {/* Decorative image and overlay */}
        <Video />

        <div aria-hidden='true' className='absolute inset-0' />

        <motion.div
          className='relative max-w-3xl mx-auto py-22 px-6 flex flex-col items-center text-center sm:py-32 lg:px-0'
          initial={{ opacity: 0, y: "100px" }}
          animate={{ opacity: 1, y: "0px" }}
          transition={{ duration: 2 }}
        >
          {/* <img src={Logo} className='' alt='' /> */}
          {/* <Logo stroke={"black"} classes={"h-96 sm:h-96 "} /> */}
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
              className='bg-black border-transparent flex py-4 px-8 text-base font-lg text-white  hover:bg-gray-900 shadow-xl'
            >
              VIEW COLLECTIONlklklk{" "}
              <ArrowRightIcon className='h-6 w-6 pl-2' aria-hidden='true' />
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
