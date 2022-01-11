import PropTypes from "prop-types";
import {
  useContext,
  useEffect,
  Fragment,
  useState,
  useRef,
  useCallback,
} from "react";
import { Dialog, Disclosure, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { ChevronDownIcon, PlusSmIcon } from "@heroicons/react/solid";
import ProductContext from "../../context/products/productContext";
import { useHistory, useParams, Link } from "react-router-dom";
import MainLoader from "../components/MainLoader";
import { motion } from "framer-motion";
import { Redirect } from "react-router-dom";
import { v4 as uuid } from "uuid";
import ReactGA from "react-ga";
import useFirebasePagination from "../../hooks/useFirebasePagination";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

interface products {
  title: string;
  description: string;
  price: string;
  id: string;
  urls: any;
  category: string;
  imageAlt: string;
}

export default function Example() {
  const history = useHistory();
  const { location } = useHistory();
  const params = useParams<any>();
  const { all, caseGoods, next, lastAll, loading } = useFirebasePagination(
    location.pathname
  );

  const productContext = useContext(ProductContext);
  const {
    products,
    getProductData,
    error,

    getCategoryData,
    getProduct,
    latestDoc,
  } = productContext;
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const observer: React.MutableRefObject<any> = useRef();

  const lastProductRef = useCallback((node) => {
    console.log(loading);
    if (loading) return;

    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        console.log("running");
      }
    });
    if (node) observer.current.observe(node);
  }, []);

  //* This function handles the individual product being put into state

  const handleOnClick = (e: React.FormEvent<HTMLFormElement>, id: string) => {
    e.preventDefault();

    try {
      return history.push(`/product_overview:${id}`);
    } catch (error) {
      console.log("something went wrong");
    }
  };

  const handleFilterSelection = (e: React.ChangeEvent<HTMLInputElement>) => {
    getCategoryData(e.target.value, setMobileFiltersOpen);
  };
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
    // getProductData(params, setMobileFiltersOpen);

    //eslint-disable-next-line
  }, [loading]);

  if (error) {
    return <Redirect to='server_error' />;
  }

  // if (!products || loading) {
  //   return (
  //     <div className='h-screen flex items-center justify-center container mx-auto'>
  //       <MainLoader />
  //     </div>
  //   );
  // }

  if (!error) {
    return (
      <motion.div
        className='bg-white'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div>
          <div>
            {/* Mobile filter dialog */}
            <Transition.Root show={mobileFiltersOpen} as={Fragment}>
              <Dialog
                as='div'
                className='fixed inset-0 flex z-40 lg:hidden'
                onClose={setMobileFiltersOpen}
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
                  enterFrom='translate-x-full'
                  enterTo='translate-x-0'
                  leave='transition ease-in-out duration-300 transform'
                  leaveFrom='translate-x-0'
                  leaveTo='translate-x-full'
                >
                  <div className='ml-auto relative max-w-xs w-full h-full bg-white shadow-xl py-4 pb-6 flex flex-col overflow-y-auto'>
                    <div className='px-4 flex items-center justify-between'>
                      <h2 className='text-lg font-medium text-gray-900'>
                        Filters
                      </h2>
                      <button
                        type='button'
                        className='-mr-2 w-10 h-10 p-2 flex items-center justify-center text-gray-400 hover:text-gray-500'
                        onClick={() => setMobileFiltersOpen(false)}
                      >
                        <span className='sr-only'>Close menu</span>
                        <XIcon className='h-6 w-6' aria-hidden='true' />
                      </button>
                    </div>

                    {/* Filters */}
                    <form className='mt-4'>
                      {filters.map((section, i) => (
                        <Disclosure
                          as='div'
                          key={uuid()}
                          className='border-t border-gray-200 pt-4 pb-4'
                          defaultOpen={true}
                        >
                          {({ open }) => (
                            <fieldset>
                              <legend className='w-full px-2'>
                                <Disclosure.Button className='w-full p-2 flex items-center justify-between text-gray-400 hover:text-gray-500'>
                                  <Link to='/collection:all' />
                                  <span className='text-sm font-medium text-gray-900'>
                                    {section.name}
                                  </span>
                                  <span className='ml-6 h-7 flex items-center'>
                                    <ChevronDownIcon
                                      className={classNames(
                                        open ? "-rotate-180" : "rotate-0",
                                        "h-5 w-5 transform"
                                      )}
                                      aria-hidden='true'
                                    />
                                  </span>
                                </Disclosure.Button>
                              </legend>
                              <Disclosure.Panel className='pt-4 pb-2 px-4'>
                                <div className='space-y-6'>
                                  {section.options.map((option, optionIdx) => (
                                    <div
                                      key={uuid()}
                                      className='flex items-center'
                                    >
                                      <input
                                        id={`${section.id}-${optionIdx}-mobile`}
                                        name={`${section.id}[]`}
                                        defaultValue={option.value}
                                        type='checkbox'
                                        className='h-4 w-4 border-gray-300 rounded text-yellow-600 focus:ring-yellow-500'
                                        onFocus={handleFilterSelection}
                                      />
                                      <label
                                        htmlFor={`${section.id}-${optionIdx}-mobile`}
                                        className='ml-3 text-sm text-gray-500'
                                      >
                                        {option.label}
                                      </label>
                                    </div>
                                  ))}
                                </div>
                              </Disclosure.Panel>
                            </fieldset>
                          )}
                        </Disclosure>
                      ))}
                    </form>
                  </div>
                </Transition.Child>
              </Dialog>
            </Transition.Root>

            <div className='border-b border-gray-200 z-50'>
              <nav className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <ol className='flex items-center space-x-4 py-4'>
                  <li>
                    <div className='flex items-center'>
                      <Link
                        to='/collection:all'
                        className='mr-4 text-sm font-medium text-gray-900'
                      >
                        Collection
                      </Link>
                      <svg
                        viewBox='0 0 6 20'
                        aria-hidden='true'
                        className='h-5 w-auto text-gray-300'
                      >
                        <path
                          d='M4.878 4.34H3.551L.27 16.532h1.327l3.281-12.19z'
                          fill='currentColor'
                        />
                      </svg>
                    </div>
                  </li>

                  <li className='text-sm'>
                    <Link
                      to={`/collection${params.category}`}
                      className='font-medium text-gray-500 hover:text-gray-600'
                    >
                      {params.category.split(":").join("")}
                    </Link>
                  </li>
                </ol>
              </nav>
            </div>

            <main className='max-w-2xl mx-auto px-4 lg:max-w-7xl lg:px-8'>
              <div className='border-b border-gray-200 pt-24 pb-10'>
                <h1 className='text-4xl font-extrabold tracking-tight text-gray-900'>
                  Collection
                </h1>
                <p className='mt-4 text-base text-gray-500'>
                  Discover exquiste design and splendid craftmanship
                </p>
              </div>

              <div className='pt-12 pb-24 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4'>
                <aside>
                  <h2 className='sr-only'>Filters</h2>

                  <button
                    type='button'
                    className='inline-flex items-center lg:hidden'
                    onClick={() => setMobileFiltersOpen(true)}
                  >
                    <span className='text-sm font-medium text-gray-700'>
                      Filters
                    </span>
                    <PlusSmIcon
                      className='flex-shrink-0 ml-1 h-5 w-5 text-gray-400'
                      aria-hidden='true'
                    />
                  </button>

                  <div className='hidden lg:block'>
                    <form className='divide-y divide-gray-200 space-y-10'>
                      {filters.map((section, sectionIdx) => (
                        <div
                          key={uuid()}
                          className={sectionIdx === 0 ? undefined : "pt-10"}
                        >
                          <fieldset>
                            <legend className='block text-sm font-medium text-gray-900'>
                              {section.name}
                            </legend>
                            <div className='pt-6 space-y-3'>
                              {section.options.map((option, optionIdx) => (
                                <div key={uuid()} className='flex items-center'>
                                  <input
                                    id={`${section.id}-${optionIdx}`}
                                    name={`${section.id}[]`}
                                    defaultValue={option.value}
                                    type='checkbox'
                                    className='h-4 w-4 border-gray-300 rounded text-yellow-600 focus:ring-yellow-500'
                                    onFocus={handleFilterSelection}
                                  />
                                  <label
                                    htmlFor={`${section.id}-${optionIdx}`}
                                    className='ml-3 text-sm text-gray-600'
                                  >
                                    {option.label}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </fieldset>
                        </div>
                      ))}
                    </form>
                  </div>
                </aside>

                <section
                  aria-labelledby='product-heading'
                  className='mt-6 lg:mt-0 lg:col-span-2 xl:col-span-3'
                >
                  <h2 id='product-heading' className='sr-only'>
                    Products
                  </h2>

                  {location.pathname === "/collection:all" && all && (
                    <div className='grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8 xl:grid-cols-2'>
                      {all.map((product: products, index: string) =>
                        all.length === index + 1 ? (
                          <div
                            ref={lastProductRef}
                            id={product.id}
                            onClick={(e: any) => handleOnClick(e, product.id)}
                            key={uuid()}
                            className='group relative bg-pink-500 p-8 border border-gray-200 rounded-lg flex flex-col overflow-hidden cursor-pointer'
                          >
                            <div className='aspect-w-3 aspect-h-4 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-96'>
                              <img
                                src={product.urls[0].urls}
                                alt={product.imageAlt}
                                className='w-full h-full object-center object-cover sm:w-full sm:h-full'
                              />
                            </div>
                            <div className='flex-1 p-4 space-y-2 flex flex-col'>
                              <h3 className='text-sm font-medium text-gray-900'>
                                <Link to={`/collection${params.category}`}>
                                  <span
                                    aria-hidden='true'
                                    className='absolute inset-0'
                                  />
                                  {product.title}
                                </Link>
                              </h3>
                              <p className='text-sm text-gray-500 truncate'>
                                {product.description}
                              </p>
                              {/* <div className='flex-1 flex flex-col justify-end'>
              <p className='text-base font-medium text-gray-900'>
                ${product.price}
              </p>
            </div> */}
                            </div>
                          </div>
                        ) : (
                          <div
                            id={product.id}
                            onClick={(e: any) => handleOnClick(e, product.id)}
                            key={uuid()}
                            className='group relative bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden cursor-pointer'
                          >
                            <div className='aspect-w-3 aspect-h-4 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-96'>
                              <img
                                src={product.urls[0].urls}
                                alt={product.imageAlt}
                                className='w-full h-full object-center object-cover sm:w-full sm:h-full'
                              />
                            </div>
                            <div className='flex-1 p-4 space-y-2 flex flex-col'>
                              <h3 className='text-sm font-medium text-gray-900'>
                                <Link to={`/collection${params.category}`}>
                                  <span
                                    aria-hidden='true'
                                    className='absolute inset-0'
                                  />
                                  {product.title}
                                </Link>
                              </h3>
                              <p className='text-sm text-gray-500 truncate'>
                                {product.description}
                              </p>
                              {/* <div className='flex-1 flex flex-col justify-end'>
              <p className='text-base font-medium text-gray-900'>
                ${product.price}
              </p>
            </div> */}
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  )}
                </section>
              </div>
            </main>
            <button onClick={next} className='p-4 bg-red-500'>
              LOAD
            </button>
          </div>
        </div>
      </motion.div>
    );
  }
}

const breadcrumbs = [{ id: 1, name: "Collection", href: `/collection:all` }];
const filters = [
  {
    id: "category",
    name: "Category",
    options: [
      { value: "beds", label: "Beds" },
      { value: "case-goods", label: "Case Goods" },
      { value: "lighting", label: "Lighting" },
      { value: "office", label: "Office" },
      { value: "seating", label: "Seating" },
      { value: "tables", label: "Tables" },
      { value: "mirrors", label: "Mirrors" },
    ],
  },
];
