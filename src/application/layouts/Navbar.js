import PropTypes from "prop-types";
import { Fragment, useState } from "react";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";

import {
  MenuIcon,
  QuestionMarkCircleIcon,
  SearchIcon,
  XIcon,
} from "@heroicons/react/outline";
import NavbarLogo from "../components/NavbarLogo";
import { withRouter } from "react-router-dom";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Example = ({ navigation, history }) => {
  const [open, setOpen] = useState(false);

  return history.location.pathname === "/dashboard" ? null : (
    <motion.div
      className='bg-black'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as='div'
          className='fixed inset-0 flex z-40 lg:hidden'
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter='transition-opacity ease-linear duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='transition-opacity ease-linear duration-300'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter='transition ease-in-out duration-300 transform'
            enterFrom='-translate-x-full'
            enterTo='translate-x-0'
            leave='transition ease-in-out duration-300 transform'
            leaveFrom='translate-x-0'
            leaveTo='-translate-x-full'
          >
            <div className='relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto'>
              <div className='px-4 pt-5 pb-2 flex'>
                <button
                  type='button'
                  className='-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400'
                  onClick={() => setOpen(false)}
                >
                  <span className='sr-only'>Close menu</span>
                  <XIcon className='h-6 w-6' aria-hidden='true' />
                </button>
              </div>

              {/* Links */}
              <Tab.Group as='div' className='mt-2'>
                <div className='border-b border-gray-200'>
                  <Tab.List className='-mb-px flex px-4 space-x-8'>
                    {navigation.categories.map((category) => (
                      <Tab
                        key={uuid()}
                        className={({ selected }) =>
                          classNames(
                            selected
                              ? "text-yellow-700 border-yellow-700"
                              : "text-gray-900",
                            "flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium"
                          )
                        }
                      >
                        {category.name}
                      </Tab>
                    ))}
                  </Tab.List>
                </div>
                <Tab.Panels as={Fragment}>
                  {navigation.categories.map((category) => (
                    <Tab.Panel key={uuid()} className='px-4 py-6 space-y-12'>
                      <div className='grid grid-cols-2 gap-x-4 gap-y-10'>
                        {category.featured.map((item) => (
                          <div key={uuid()} className='group relative'>
                            <div className='aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden group-hover:opacity-75'>
                              <img
                                src={item.imageSrc}
                                alt={item.imageAlt}
                                className='object-center object-cover'
                              />
                            </div>
                            <Link
                              to={item.href}
                              className='mt-6 block text-sm font-medium text-gray-900'
                            >
                              <span
                                className='absolute z-10 inset-0'
                                aria-hidden='true'
                              />
                              {item.name}
                            </Link>
                            <p
                              aria-hidden='true'
                              className='mt-1 text-sm text-gray-500'
                            >
                              Shop now
                            </p>
                          </div>
                        ))}
                      </div>
                    </Tab.Panel>
                  ))}
                </Tab.Panels>
              </Tab.Group>

              <div className='border-t border-gray-200 py-6 px-4 space-y-6'>
                {navigation.pages.map((page) => (
                  <div key={uuid()} className='flow-root'>
                    <Link
                      to={page.href}
                      className={`-m-2 p-2 block font-medium text-gray-900 ${page.classes}`}
                    >
                      {page.name}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>

      <header className='relative'>
        <nav aria-label='Top'>
          {/* Secondary navigation */}
          <div className='bg-white'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
              <div className='border-b border-gray-200'>
                <div className='h-16 flex items-center justify-between'>
                  {/* Logo (lg+) */}
                  <div className='hidden lg:flex-1 lg:flex lg:items-center'>
                    <Link to='/'>
                      <div className='h-auto w-auto text-gray-900'>
                        {" "}
                        <NavbarLogo height={"h-12"} />
                      </div>
                    </Link>
                  </div>

                  <div className='hidden h-full lg:flex z-50'>
                    {/* Flyout menus */}
                    <Popover.Group className='px-4 bottom-0 inset-x-0'>
                      <div className='h-full flex justify-center space-x-8'>
                        {navigation.categories.map((category) => (
                          <Popover key={uuid()} className='flex'>
                            {({ open }) => (
                              <>
                                <div className='relative flex'>
                                  <Popover.Button
                                    className={classNames(
                                      open
                                        ? "border-yellow-700 text-yellow-700 "
                                        : "border-transparent text-gray-700 hover:text-gray-800",
                                      "relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px"
                                    )}
                                  >
                                    {category.name}
                                  </Popover.Button>
                                </div>

                                <Transition
                                  as={Fragment}
                                  enter='transition ease-out duration-200'
                                  enterFrom='opacity-0'
                                  enterTo='opacity-100'
                                  leave='transition ease-in duration-150'
                                  leaveFrom='opacity-100'
                                  leaveTo='opacity-0'
                                >
                                  <Popover.Panel className='absolute top-full inset-x-0 text-sm text-gray-500'>
                                    {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                                    <div
                                      className='absolute inset-0 top-1/2 bg-white shadow'
                                      aria-hidden='true'
                                    />

                                    <div className='relative bg-white'>
                                      <div className='max-w-7xl mx-auto px-8'>
                                        <div className='grid grid-cols-4 gap-y-10 gap-x-8 py-16'>
                                          {category.featured.map((item) => (
                                            <div
                                              key={uuid()}
                                              className='group relative'
                                            >
                                              <div className='aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden group-hover:opacity-75'>
                                                <img
                                                  src={item.imageSrc}
                                                  alt={item.imageAlt}
                                                  className='object-center object-cover'
                                                />
                                              </div>
                                              <Link
                                                to={item.href}
                                                className='mt-4 block font-medium text-gray-900'
                                              >
                                                <span
                                                  className='absolute z-10 inset-0'
                                                  aria-hidden='true'
                                                />
                                                {item.name}
                                              </Link>
                                              <p
                                                aria-hidden='true'
                                                className='mt-1'
                                              >
                                                Shop now
                                              </p>
                                            </div>
                                          ))}
                                        </div>
                                      </div>
                                    </div>
                                  </Popover.Panel>
                                </Transition>
                              </>
                            )}
                          </Popover>
                        ))}

                        {navigation.pages.map((page) => (
                          <Link
                            key={uuid()}
                            to={page.href}
                            className={`${page.classes} flex items-center text-sm font-medium text-gray-700 hover:text-gray-800`}
                          >
                            {page.name}
                          </Link>
                        ))}
                      </div>
                    </Popover.Group>
                  </div>

                  {/* Mobile menu and search (lg-) */}
                  <div className='flex-1 flex items-center lg:hidden'>
                    <button
                      type='button'
                      className='-ml-2 bg-white p-2 rounded-md text-gray-400'
                      onClick={() => setOpen(true)}
                    >
                      <span className='sr-only'>Open menu</span>
                      <MenuIcon className='h-6 w-6' aria-hidden='true' />
                    </button>

                    {/* Search */}
                    <Link
                      to='/collection'
                      className='ml-2 p-2 text-gray-400 hover:text-gray-500'
                    >
                      <span className='sr-only'>Search</span>
                      <SearchIcon className='w-6 h-6' aria-hidden='true' />
                    </Link>
                  </div>

                  {/* Logo (lg-) */}
                  <Link to='/' className='lg:hidden'>
                    <span className='sr-only'>Nonpareil</span>
                    <div className='h-12 w-auto text-gray-900 flex items-center'>
                      {" "}
                      <NavbarLogo height={"h-12"} />
                    </div>
                  </Link>

                  <div className='flex-1 flex items-center justify-end'>
                    <div className='flex items-center lg:ml-8'>
                      {/* Help */}
                      <Link
                        to='/faq'
                        className='p-2 text-gray-400 hover:text-gray-500 lg:hidden'
                      >
                        <span className='sr-only'>FAQ</span>
                        <QuestionMarkCircleIcon
                          className='w-6 h-6'
                          aria-hidden='true'
                        />
                      </Link>
                      <Link
                        to='/faq'
                        className='hidden text-sm font-medium text-gray-700 hover:text-gray-800 lg:block'
                      >
                        FAQ
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </motion.div>
  );
};
export default withRouter(Example);

Example.propTypes = {
  navigation: PropTypes.object.isRequired,
};
Example.defaultProps = {
  navigation: {
    categories: [
      {
        name: "Beds",
        featured: [
          {
            name: "Beds",
            href: "/collection:beds",
            imageSrc:
              "https://firebasestorage.googleapis.com/v0/b/nonpareil-collection.appspot.com/o/1086_1.jpg?alt=media&token=4bd984ef-897b-4697-b643-6299a33019ce",
            imageAlt:
              "Nonpareil Collection: The Ultimate Destination For Luxurious Beds || Luxurious Designer Bed",
          },
          {
            name: "Beds",
            href: "/collection:beds",
            imageSrc:
              "https://firebasestorage.googleapis.com/v0/b/nonpareil-collection.appspot.com/o/1088_1.jpg?alt=media&token=f975174c-0367-4e31-8c54-ffe3c4ab2d0b",
            imageAlt:
              "Nonpareil Collection: The Ultimate Destination For Luxurious Beds || Luxurious Designer Bed",
          },
          {
            name: "Beds",
            href: "/collection:beds",
            imageSrc:
              "https://firebasestorage.googleapis.com/v0/b/nonpareil-collection.appspot.com/o/1089_2.jpg?alt=media&token=4f84a5d8-fb10-468a-a674-1b9501846454",
            imageAlt:
              "Nonpareil Collection: The Ultimate Destination For Luxurious Beds || Luxurious Designer Bed",
          },
          {
            name: "Beds",
            href: "/collection:beds",
            imageSrc:
              "https://firebasestorage.googleapis.com/v0/b/nonpareil-collection.appspot.com/o/1093_1.jpg?alt=media&token=c32d616d-4e02-4f0d-863e-a3608674e96a",
            imageAlt:
              "Nonpareil Collection: The Ultimate Destination For Luxurious Beds || Luxurious Designer Bed",
          },
        ],
      },
      {
        name: "Case Goods",
        featured: [
          {
            name: "Nightstands & Bedside tables",
            href: "/collection:caseGoods",
            imageSrc:
              "https://firebasestorage.googleapis.com/v0/b/nonpareil-collection.appspot.com/o/1118_1.jpg?alt=media&token=75f087ec-94a3-4ed7-92b0-574e4a17e1f5",
            imageAlt:
              "Nonpareil Collection: The Ultimate Destination For Luxurious Case Goods || Luxurious Designer Case Goods",
          },
          {
            name: "Bookcase & Displays",
            href: "/collection:caseGoods",
            imageSrc:
              "https://firebasestorage.googleapis.com/v0/b/nonpareil-collection.appspot.com/o/1127_2.jpg?alt=media&token=340bed16-8055-4037-8f1d-8024a5d7f8f2",
            imageAlt:
              "Nonpareil Collection: The Ultimate Destination For Luxurious Case Goods || Luxurious Designer Case Goods",
          },
          {
            name: "Cabinets",
            href: "/collection:caseGoods",
            imageSrc:
              "https://firebasestorage.googleapis.com/v0/b/nonpareil-collection.appspot.com/o/1168_1.jpg?alt=media&token=0a436235-34ab-4de4-95b5-f799ba749cc2",
            imageAlt:
              "Nonpareil Collection: The Ultimate Destination For Luxurious Cabinets || Luxurious Designer Cabinets",
          },
          {
            name: "Chests of Drawers",
            href: "/collection:caseGoods",
            imageSrc:
              "https://firebasestorage.googleapis.com/v0/b/nonpareil-collection.appspot.com/o/1141_2.jpg?alt=media&token=ea3e3f2d-64f9-4236-a194-f64031f02e06",
            imageAlt:
              "Nonpareil Collection: The Ultimate Destination For Luxurious Chests of Drawers || Luxurious Designer Chests of Drawers",
          },
          {
            name: "Cocktail Cabinets",
            href: "/collection:caseGoods",
            imageSrc:
              "https://firebasestorage.googleapis.com/v0/b/nonpareil-collection.appspot.com/o/1120_1.jpg?alt=media&token=be19332e-f290-4b6c-a414-ddfbaf4e884e",
            imageAlt:
              "Nonpareil Collection: The Ultimate Destination For Luxurious Cocktail Cabinets || Luxurious Designer Cocktail Cabinets",
          },
          {
            name: "Credenzas & Sideboards",
            href: "/collection:caseGoods",
            imageSrc:
              "https://firebasestorage.googleapis.com/v0/b/nonpareil-collection.appspot.com/o/1235_1.jpg?alt=media&token=11eb9c5a-18c9-4afb-8198-e2b4ced05470",
            imageAlt:
              "Nonpareil Collection: The Ultimate Destination For Luxurious Cocktail Cabinets || Luxurious Designer Cocktail Cabinets",
          },
        ],
      },
      {
        name: "Lighting",
        featured: [
          {
            name: "Table Lamps",
            href: "/collection:lighting",
            imageSrc:
              "https://firebasestorage.googleapis.com/v0/b/nonpareil-collection.appspot.com/o/1023_2.jpg?alt=media&token=0c003c95-ac15-4b42-a012-32c0ac2f64c0",
            imageAlt:
              "Nonpareil Collection: The Ultimate Destination For Luxurious Table Lamps || Designer Lighting Decor",
          },
          {
            name: "Wall Lights",
            href: "/collection:lighting",
            imageSrc:
              "https://firebasestorage.googleapis.com/v0/b/nonpareil-collection.appspot.com/o/1476_2.jpg?alt=media&token=2006ae3d-2765-4a7d-82b4-c10a839618f1",
            imageAlt:
              "Nonpareil Collection: The Ultimate Destination For Luxurious Wall Lights || Designer Lighting Decor",
          },
          {
            name: "Chandeliers",
            href: "/collection:lighting",
            imageSrc:
              "https://firebasestorage.googleapis.com/v0/b/nonpareil-collection.appspot.com/o/1534_1.jpg?alt=media&token=b8fae76f-aa05-4c29-ad2f-b5d6fa9b09ef",
            imageAlt:
              "Nonpareil Collection: The Ultimate Destination For Luxurious Chandeliers || Designer Lighting Decor",
          },
          {
            name: "Floor Lamps",
            href: "/collection:lighting",
            imageSrc:
              "https://firebasestorage.googleapis.com/v0/b/nonpareil-collection.appspot.com/o/1568_3.jpg?alt=media&token=1547a646-bba8-493a-b77b-995c6eac6f9f",
            imageAlt:
              "Nonpareil Collection: The Ultimate Destination For Luxurious Floor Lamps || Designer Lighting Decor",
          },
        ],
      },
      {
        name: "Office",
        featured: [
          {
            name: "Office Chairs",
            href: "/collection:office",
            imageSrc:
              "https://firebasestorage.googleapis.com/v0/b/top-quality-furniture---dev.appspot.com/o/1074_4.jpg?alt=media&token=b2b3fa20-22b2-4cdd-bc80-481ddb79cd14",
            imageAlt:
              "Nonpareil Collection: The Ultimate Destination For Luxurious Office Furniture || Exquisite Office Furniture",
          },
          {
            name: "Office Bookcases",
            href: "/collection:office",
            imageSrc:
              "https://firebasestorage.googleapis.com/v0/b/top-quality-furniture---dev.appspot.com/o/1121_1.jpg?alt=media&token=637f4755-66c0-4caa-b433-b01229d5f6eb",
            imageAlt:
              "Nonpareil Collection: The Ultimate Destination For Luxurious Office Furniture || Exquisite Office Furniture",
          },
          {
            name: "Collector Items",
            href: "/collection:office",
            imageSrc:
              "https://firebasestorage.googleapis.com/v0/b/top-quality-furniture---dev.appspot.com/o/1057_2.jpg?alt=media&token=15435423-3307-42cb-8c8c-c5add304d3f4",
            imageAlt:
              "Nonpareil Collection: The Ultimate Destination For Luxurious Office Furniture || Exquisite Office Furniture",
          },
          {
            name: "Office Desks",
            href: "/collection:office",
            imageSrc:
              "https://firebasestorage.googleapis.com/v0/b/top-quality-furniture---dev.appspot.com/o/1048_1.jpg?alt=media&token=b1780aeb-94b3-4e56-863d-af3256b1cbb0",
            imageAlt:
              "Nonpareil Collection: The Ultimate Destination For Luxurious Office Furniture || Exquisite Office Furniture",
          },
        ],
      },
      {
        name: "Seating",
        featured: [
          {
            name: "Sofas",
            href: "/collection:seating",
            imageSrc:
              "https://firebasestorage.googleapis.com/v0/b/top-quality-furniture---dev.appspot.com/o/1660_4.jpg?alt=media&token=d44b109b-bc38-4011-9e7f-a7712dcfd9b6",
            imageAlt:
              "Nonpareil Collection: The Ultimate Destination For Luxurious Seating || Sofas | Benches & Ottomans | Armchairs | Chaise Longues",
          },
          {
            name: "Benches & Ottomans",
            href: "/collection:seating",
            imageSrc:
              "https://firebasestorage.googleapis.com/v0/b/top-quality-furniture---dev.appspot.com/o/1591_3.jpg?alt=media&token=ef0b42e0-248a-4b8a-9425-601731c479a6",
            imageAlt:
              "Nonpareil Collection: The Ultimate Destination For Luxurious Seating || Sofas | Benches & Ottomans | Armchairs | Chaise Longues",
          },
          {
            name: "Armchairs",
            href: "/collection:seating",
            imageSrc:
              "https://firebasestorage.googleapis.com/v0/b/top-quality-furniture---dev.appspot.com/o/1743_3.jpg?alt=media&token=0da68ee1-235f-4798-aa09-7da6621d6672",
            imageAlt:
              "Nonpareil Collection: The Ultimate Destination For Luxurious Seating || Sofas | Benches & Ottomans | Armchairs | Chaise Longues",
          },
          {
            name: "Chaise Longues",
            href: "/collection:seating",
            imageSrc:
              "https://firebasestorage.googleapis.com/v0/b/top-quality-furniture---dev.appspot.com/o/1602_2.jpg?alt=media&token=95a59ce4-01eb-4a76-942c-650977700c70",
            imageAlt:
              "Nonpareil Collection: The Ultimate Destination For Luxurious Seating || Sofas | Benches & Ottomans | Armchairs | Chaise Longues",
          },
        ],
      },
      {
        name: "Tables",
        featured: [
          {
            name: "Coffee & Cocktail Tables ",
            href: "/collection:tables",
            imageSrc:
              "https://firebasestorage.googleapis.com/v0/b/top-quality-furniture---dev.appspot.com/o/1337_2.jpg?alt=media&token=17e5812e-a639-49e7-9edb-762c862744b1",
            imageAlt:
              "Nonpareil Collection: The Ultimate Destination For Luxurious Tables || Cocktail Tables | Console Tables | Hall Tables | Dinning Tables",
          },
          {
            name: "Console Tables",
            href: "/collection:tables",
            imageSrc:
              "https://firebasestorage.googleapis.com/v0/b/top-quality-furniture---dev.appspot.com/o/1360_1.jpg?alt=media&token=f5dd0853-e678-459e-9a37-ecc4bcb0c20e",
            imageAlt:
              "Nonpareil Collection: The Ultimate Destination For Luxurious Tables || Cocktail Tables | Console Tables | Hall Tables | Dinning Tables",
          },
          {
            name: "Hall Tables",
            href: "/collection:tables",
            imageSrc:
              "https://firebasestorage.googleapis.com/v0/b/top-quality-furniture---dev.appspot.com/o/1235_2.jpg?alt=media&token=fd11ba15-6d7d-4ae9-92b5-991db548503a",
            imageAlt:
              "Nonpareil Collection: The Ultimate Destination For Luxurious Tables || Cocktail Tables | Console Tables | Hall Tables | Dinning Tables",
          },
          {
            name: "Dinning Tables",
            href: "/collection:tables",
            imageSrc:
              "https://firebasestorage.googleapis.com/v0/b/nonpareil-collection.appspot.com/o/1430_1.jpg?alt=media&token=fc007fc0-1c03-4cbd-8845-c6a949f32816",
            imageAlt:
              "Nonpareil Collection: The Ultimate Destination For Luxurious Tables || Cocktail Tables | Console Tables | Hall Tables | Dinning Tables",
          },
        ],
      },
      {
        name: "Mirrors",
        featured: [
          {
            name: "Mirrors",
            href: "/collection:mirrors",
            imageSrc:
              "https://firebasestorage.googleapis.com/v0/b/nonpareil-collection.appspot.com/o/1105_1.jpg?alt=media&token=a5b8b06a-9886-46ed-8fac-52e41ca46575",
            imageAlt:
              "Nonpareil Collection: The Ultimate Destination For Luxurious Mirrors|| Murano Glass",
          },
          {
            name: "Mirrors",
            href: "/collection:mirrors",
            imageSrc:
              "https://firebasestorage.googleapis.com/v0/b/nonpareil-collection.appspot.com/o/1104_2.jpg?alt=media&token=5668d8c4-0e73-4a5f-b9d8-553de67c9d4d",
            imageAlt:
              "Nonpareil Collection: The Ultimate Destination For Luxurious Mirrors|| Murano Glass",
          },
          {
            name: "Mirrors",
            href: "/collection:mirrors",
            imageSrc:
              "https://firebasestorage.googleapis.com/v0/b/nonpareil-collection.appspot.com/o/1101_1.jpg?alt=media&token=b4718967-d4a9-49fb-80b9-e48e23acbc83",
            imageAlt:
              "Nonpareil Collection: The Ultimate Destination For Luxurious Mirrors|| Murano Glass",
          },
          {
            name: "Mirrors",
            href: "/collection:mirrors",
            imageSrc:
              "https://firebasestorage.googleapis.com/v0/b/nonpareil-collection.appspot.com/o/1095_1.jpg?alt=media&token=8ff1f8ed-8e97-45bd-9c37-36d302a40ebc",
            imageAlt:
              "Nonpareil Collection: The Ultimate Destination For Luxurious Mirrors|| Murano Glass",
          },
        ],
      },
    ],
    pages: [
      { name: "Company", href: "/our_service" },
      {
        name: "Contact",
        href: "/contact_us",
        classes: "",
      },
    ],
  },
};
