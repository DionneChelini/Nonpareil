import PropTypes from "prop-types";
import { Fragment, useState } from "react";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
                        key={category.name}
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
                    <Tab.Panel
                      key={category.name}
                      className='px-4 py-6 space-y-12'
                    >
                      <div className='grid grid-cols-2 gap-x-4 gap-y-10'>
                        {category.featured.map((item) => (
                          <div key={item.name} className='group relative'>
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
                  <div key={page.name} className='flow-root'>
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
                          <Popover key={category.name} className='flex'>
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
                                              key={item.name}
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
                            key={page.name}
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
            href: "#",
            imageSrc:
              "https://firebasestorage.googleapis.com/v0/b/top-quality-furniture---dev.appspot.com/o/1086_1.jpg?alt=media&token=48accc6d-48b9-41fb-b1fc-a7e66f136d05",
            imageAlt:
              "Models sitting back to back, wearing Basic Tee in black and bone.",
          },
          {
            name: "Beds1",
            href: "#",
            imageSrc:
              "https://firebasestorage.googleapis.com/v0/b/top-quality-furniture---dev.appspot.com/o/1088_1.jpg?alt=media&token=30b5fa2a-2951-4c3e-b558-aa08f72da404",
            imageAlt:
              "Models sitting back to back, wearing Basic Tee in black and bone.",
          },
          {
            name: "Beds2",
            href: "#",
            imageSrc:
              "https://firebasestorage.googleapis.com/v0/b/top-quality-furniture---dev.appspot.com/o/1089_3.jpg?alt=media&token=102f1d83-d7ef-4bdf-aa7e-6d5cff4c3e22",
            imageAlt:
              "Models sitting back to back, wearing Basic Tee in black and bone.",
          },
          {
            name: "Beds3",
            href: "#",
            imageSrc:
              "https://firebasestorage.googleapis.com/v0/b/top-quality-furniture---dev.appspot.com/o/1093_1.jpg?alt=media&token=04d7b2fc-c2b7-42ee-b9f6-6114c07a8d0c",
            imageAlt:
              "Models sitting back to back, wearing Basic Tee in black and bone.",
          },
        ],
      },
      {
        name: "Case Goods",
        featured: [
          {
            name: "Nightstands & Bedside tables",
            href: "#",
            imageSrc:
              "https://firebasestorage.googleapis.com/v0/b/top-quality-furniture---dev.appspot.com/o/1118_3.jpg?alt=media&token=8dd857ef-2dfe-4ad6-8e8f-2f38724264cd",
            imageAlt:
              "Model putting folded cash into slim card holder olive leather wallet with hand stitching.",
          },
          {
            name: "Cabinets",
            href: "#",
            imageSrc:
              "https://firebasestorage.googleapis.com/v0/b/top-quality-furniture---dev.appspot.com/o/1168_1.jpg?alt=media&token=274f287a-d251-4c80-b8a9-b3c3e2cca391",
            imageAlt: "Model wearing light heather gray t-shirt.",
          },
          {
            name: "Chests of Drawers",
            href: "#",
            imageSrc:
              "https://firebasestorage.googleapis.com/v0/b/top-quality-furniture---dev.appspot.com/o/1138_1.jpg?alt=media&token=7e134b2d-b7aa-4a2d-9650-12a499b57c88",
            imageAlt:
              "Grey 6-panel baseball hat with black brim, black mountain graphic on front, and light heather gray body.",
          },
          {
            name: "Cocktail Cabinets",
            href: "#",
            imageSrc:
              "https://firebasestorage.googleapis.com/v0/b/top-quality-furniture---dev.appspot.com/o/1153_3.jpg?alt=media&token=d34d10a4-02ba-4be2-a8a6-e6b706782dde",
            imageAlt:
              "Model putting folded cash into slim card holder olive leather wallet with hand stitching.",
          },
        ],
      },
      {
        name: "Lighting",
        featured: [
          {
            name: "Table Lamps",
            href: "#",
            imageSrc:
              "https://firebasestorage.googleapis.com/v0/b/top-quality-furniture---dev.appspot.com/o/1500_2.jpg?alt=media&token=bc1cf7d5-4153-4358-ac4e-b31b10106bfa",
            imageAlt:
              "Hats and sweaters on wood shelves next to various colors of t-shirts on hangers.",
          },
          {
            name: "Wall Lights",
            href: "#",
            imageSrc:
              "https://firebasestorage.googleapis.com/v0/b/top-quality-furniture---dev.appspot.com/o/1476_2.jpg?alt=media&token=e77d348e-faca-4b22-9012-ad87074532cf",
            imageAlt: "Model wearing light heather gray t-shirt.",
          },
          {
            name: "Chandeliers",
            href: "#",
            imageSrc:
              "https://firebasestorage.googleapis.com/v0/b/top-quality-furniture---dev.appspot.com/o/1524_1.jpg?alt=media&token=40d9ddc9-063f-425a-bca2-8940d96e6cbc",
            imageAlt:
              "Grey 6-panel baseball hat with black brim, black mountain graphic on front, and light heather gray body.",
          },
          {
            name: "Floor Lamps",
            href: "#",
            imageSrc:
              "https://firebasestorage.googleapis.com/v0/b/top-quality-furniture---dev.appspot.com/o/1561_2.jpg?alt=media&token=3779f52a-0960-47f4-bb7c-e2187a51c19e",
            imageAlt:
              "Model putting folded cash into slim card holder olive leather wallet with hand stitching.",
          },
        ],
      },
      {
        name: "Office",
        featured: [
          {
            name: "Office Chairs",
            href: "#",
            imageSrc:
              "https://firebasestorage.googleapis.com/v0/b/top-quality-furniture---dev.appspot.com/o/1074_4.jpg?alt=media&token=b2b3fa20-22b2-4cdd-bc80-481ddb79cd14",
            imageAlt:
              "Hats and sweaters on wood shelves next to various colors of t-shirts on hangers.",
          },
          {
            name: "Office Bookcases",
            href: "#",
            imageSrc:
              "https://firebasestorage.googleapis.com/v0/b/top-quality-furniture---dev.appspot.com/o/1121_1.jpg?alt=media&token=637f4755-66c0-4caa-b433-b01229d5f6eb",
            imageAlt:
              "Hats and sweaters on wood shelves next to various colors of t-shirts on hangers.",
          },
          {
            name: "Collector Items",
            href: "#",
            imageSrc:
              "https://firebasestorage.googleapis.com/v0/b/top-quality-furniture---dev.appspot.com/o/1057_2.jpg?alt=media&token=15435423-3307-42cb-8c8c-c5add304d3f4",
            imageAlt:
              "Hats and sweaters on wood shelves next to various colors of t-shirts on hangers.",
          },
          {
            name: "Office Desks",
            href: "#",
            imageSrc:
              "https://firebasestorage.googleapis.com/v0/b/top-quality-furniture---dev.appspot.com/o/1048_1.jpg?alt=media&token=b1780aeb-94b3-4e56-863d-af3256b1cbb0",
            imageAlt:
              "Hats and sweaters on wood shelves next to various colors of t-shirts on hangers.",
          },
        ],
      },
      {
        name: "Seating",
        featured: [
          {
            name: "Sofas",
            href: "#",
            imageSrc:
              "https://firebasestorage.googleapis.com/v0/b/top-quality-furniture---dev.appspot.com/o/1660_4.jpg?alt=media&token=d44b109b-bc38-4011-9e7f-a7712dcfd9b6",
            imageAlt:
              "Hats and sweaters on wood shelves next to various colors of t-shirts on hangers.",
          },
          {
            name: "Benches & Ottomans",
            href: "#",
            imageSrc:
              "https://firebasestorage.googleapis.com/v0/b/top-quality-furniture---dev.appspot.com/o/1591_3.jpg?alt=media&token=ef0b42e0-248a-4b8a-9425-601731c479a6",
            imageAlt: "Model wearing light heather gray t-shirt.",
          },
          {
            name: "Armchairs",
            href: "#",
            imageSrc:
              "https://firebasestorage.googleapis.com/v0/b/top-quality-furniture---dev.appspot.com/o/1743_3.jpg?alt=media&token=0da68ee1-235f-4798-aa09-7da6621d6672",
            imageAlt:
              "Grey 6-panel baseball hat with black brim, black mountain graphic on front, and light heather gray body.",
          },
          {
            name: "Chaise Longues",
            href: "#",
            imageSrc:
              "https://firebasestorage.googleapis.com/v0/b/top-quality-furniture---dev.appspot.com/o/1602_2.jpg?alt=media&token=95a59ce4-01eb-4a76-942c-650977700c70",
            imageAlt:
              "Model putting folded cash into slim card holder olive leather wallet with hand stitching.",
          },
        ],
      },
      {
        name: "Tables",
        featured: [
          {
            name: "Coffee & Cocktail Tables ",
            href: "#",
            imageSrc:
              "https://firebasestorage.googleapis.com/v0/b/top-quality-furniture---dev.appspot.com/o/1337_2.jpg?alt=media&token=17e5812e-a639-49e7-9edb-762c862744b1",
            imageAlt:
              "Hats and sweaters on wood shelves next to various colors of t-shirts on hangers.",
          },
          {
            name: "Console Tables",
            href: "#",
            imageSrc:
              "https://firebasestorage.googleapis.com/v0/b/top-quality-furniture---dev.appspot.com/o/1360_1.jpg?alt=media&token=f5dd0853-e678-459e-9a37-ecc4bcb0c20e",
            imageAlt: "Model wearing light heather gray t-shirt.",
          },
          {
            name: "Hall Tables",
            href: "#",
            imageSrc:
              "https://firebasestorage.googleapis.com/v0/b/top-quality-furniture---dev.appspot.com/o/1235_2.jpg?alt=media&token=fd11ba15-6d7d-4ae9-92b5-991db548503a",
            imageAlt:
              "Model putting folded cash into slim card holder olive leather wallet with hand stitching.",
          },
          {
            name: "Dinning Tables",
            href: "#",
            imageSrc:
              "https://firebasestorage.googleapis.com/v0/b/top-quality-furniture---dev.appspot.com/o/1414_1.jpg?alt=media&token=b6ea849c-fbfd-47d1-a96e-57c8013603b8",
            imageAlt:
              "Model putting folded cash into slim card holder olive leather wallet with hand stitching.",
          },
        ],
      },
      {
        name: "Mirrors",
        featured: [
          {
            name: "Mirrors",
            href: "#",
            imageSrc:
              "http://localhost:4000/api/product/images/616d4cf1cda3472be42e6e09",
            imageAlt:
              "Hats and sweaters on wood shelves next to various colors of t-shirts on hangers.",
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
