import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { ArrowDownIcon } from "@heroicons/react/solid";
/* This example requires Tailwind CSS v2.0+ */
export default function Example() {
  return (
    <div className='bg-white'>
      <motion.div
        className='relative bg-black'
        initial={{ height: "100vh" }}
        animate={{ height: "80vh" }}
        transition={{ duration: 6 }}
      >
        {/* Decorative image and overlay */}
        <div aria-hidden='true' className='absolute inset-0 overflow-hidden '>
          <motion.svg
            viewBox='0 0 1440 783'
            className='mx-auto sm:h-screen'
            initial={{ height: "100vh" }}
            animate={{ height: "80vh" }}
            transition={{ delay: 2, duration: 3 }}
          >
            <defs>
              <clipPath id='_clipPath_4aEgZJ6uh27W33RdUS7Zn1iefDgl2tXe'>
                <rect width='1440' height='783' />
              </clipPath>
            </defs>
            <g clipPath='url(#_clipPath_4aEgZJ6uh27W33RdUS7Zn1iefDgl2tXe)'>
              <rect
                x='0'
                y='0'
                width='1440'
                height='783'
                transform='matrix(1,0,0,1,0,0)'
                fill='rgb(0,0,0)'
              />
              <radialGradient
                id='_rgradient_1'
                fx='0.5'
                fy='0.5'
                cx='0.5'
                cy='0.5'
                r='0.5'
                gradientTransform='matrix(1438,0,0,276,2,1)'
                gradientUnits='userSpaceOnUse'
              >
                <stop
                  offset='0%'
                  stopOpacity='1'
                  style={{ stopColor: "rgb(32,32,32)" }}
                />
                <stop
                  offset='16.956521739130434%'
                  stopOpacity='1'
                  style={{ stopColor: "rgb(30,30,30)" }}
                />
                <stop
                  offset='100%'
                  stopOpacity='1'
                  style={{ stopColor: "rgb(0,0,0)" }}
                />
              </radialGradient>
              <motion.path
                initial={{ opacity: 0, fill: "#000" }}
                animate={{ opacity: 1, fill: "url(#_rgradient_1)" }}
                transition={{ duration: 2 }}
                d=' M 2 261 L 726 1 L 1440 277 L 2 261 Z '
                vector-effect='non-scaling-stroke'
                stroke-width='1'
                stroke='rgb(0,0,0)'
                stroke-linejoin='miter'
                stroke-linecap='square'
                stroke-miterlimit='3'
              />
              <linearGradient
                id='_lgradient_1'
                x1='-0.1518640328031305'
                y1='0.6377485257977584'
                x2='0.8946190149258222'
                y2='0.30947115418180327'
                gradientTransform='matrix(458.245,0,0,218.081,373,564.919)'
                gradientUnits='userSpaceOnUse'
              >
                <stop
                  offset='0%'
                  stopOpacity='1'
                  style={{ stopColor: "rgb(106,106,106)" }}
                />
                <stop
                  offset='100%'
                  stopOpacity='1'
                  style={{ stopColor: "rgb(0,0,0)" }}
                />
              </linearGradient>
              <linearGradient id='_lgradient_2' x1='0' y1='0.5' x2='1' y2='0.5'>
                <stop
                  offset='0%'
                  stopOpacity='1'
                  style={{ stopColor: "rgb(255,255,255)" }}
                />
                <stop
                  offset='100%'
                  stopOpacity='1'
                  style={{ stopColor: "rgb(0,0,0)" }}
                />
              </linearGradient>
              <motion.path
                d=' M 703.768 632 C 724.502 623.56 810.637 572.523 824 566 C 843.182 556.636 717.833 610.065 653.188 651.393 C 588.542 692.721 875.038 736.376 587 758.589 Q 430.39 770.667 373 783 L 757.199 783 Q 835.503 779.43 831 758.589 C 826.497 737.748 695.256 697.932 682.905 680.05 C 670.555 662.168 664 656 694.58 640.017 C 697.721 639.622 683.5 640.25 703.768 632 Z '
                vector-effect='non-scaling-stroke'
                stroke-width='1'
                stroke='url(#_lgradient_2)'
                stroke-linejoin='miter'
                stroke-linecap='square'
                stroke-miterlimit='3'
                initial={{
                  opacity: 0,
                  fill: "#000",
                  y: "-140px",
                  pathLength: 0,
                }}
                animate={{
                  fill: "url(#_lgradient_1)",
                  opacity: 0,
                  pathLength: 0,

                  x: "-13px",
                }}
              />
            </g>
          </motion.svg>
        </div>

        <div aria-hidden='true' className='absolute inset-0 ' />
        <motion.div
          className='relative max-w-3xl mx-auto py-22 px-6 flex flex-col items-center pt-24 text-center sm:pb-32 lg:px-0'
          initial={{ opacity: 0, y: "20px" }}
          animate={{ opacity: 1, y: "0px" }}
          transition={{ duration: 2 }}
        >
          <img
            src='https://firebasestorage.googleapis.com/v0/b/nonpareil-collection.appspot.com/o/assets%2Flogo.png?alt=media&token=3f281ca1-26cd-4aa2-ab81-a52a83f7f144'
            className=' object-center h-42'
            alt=''
          />
          <p className='tracking-wide text-white  sm:text-xl font-thin'>
            The Ultimate Destination For Luxurious Home &amp; Office Furniture{" "}
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
                border: "1px solid #332C2C",
                color: "#EDD3A7",
                background: "#0D0D0D",
              }}
              className='bg-black border-transparent mt-14 flex py-4 px-8 text-base font-lg text-white  hover:bg-gray-900 shadow-xl'
            >
              Discover Collection{" "}
              <ArrowDownIcon className='h-6 w-6 pl-2' aria-hidden='true' />
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
