import { useContext, useState, useEffect, Fragment } from "react";
import { Disclosure, Tab } from "@headlessui/react";
import { StarIcon } from "@heroicons/react/solid";
import { MinusSmIcon, PlusSmIcon } from "@heroicons/react/outline";
import ProductContext from "../../context/products/productContext";
import ProductFeatures from "../components/ProductFeatures";
import PropTypes from "prop-types";
import { useParams, Link } from "react-router-dom";
import MainLoader from "../components/MainLoader";
import { motion } from "framer-motion";
import { Redirect } from "react-router-dom";
import { v4 as uuid } from "uuid";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example({ colors, details }) {
  const productContext = useContext(ProductContext);
  const { product, getProduct, loading, error, id_error } = productContext;
  const [selectedColor, setSelectedColor] = useState();
  const { id } = useParams();

  useEffect(() => {
    window.scroll(0, 0);

    getProduct(id.split(":").join(""));
  }, [id, error]);

  if (error || id_error) {
    return <Redirect to='server_error' />;
  }

  return (
    <Fragment>
      {!product || loading ? (
        <div className='h-screen flex items-center justify-center container mx-auto'>
          <MainLoader />
        </div>
      ) : (
        <div className='bg-white'>
          <div className='max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
            <div className='lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start'>
              {/* Image gallery */}
              <Tab.Group as='div' className='flex flex-col-reverse'>
                {/* Image selector */}
                <div className='mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none'>
                  <Tab.List className='grid grid-cols-4 gap-6'>
                    {product.urls.map((url) => (
                      <Tab
                        key={uuid()}
                        className='relative h-24 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50'
                      >
                        {({ selected }) => (
                          <>
                            <span className='sr-only'>{product.title}</span>
                            <span className='absolute inset-0 rounded-md overflow-hidden'>
                              <img
                                src={url.urls}
                                alt=''
                                className='w-full h-full object-center object-cover'
                              />
                            </span>
                            <span
                              className={classNames(
                                selected
                                  ? "ring-yellow-500"
                                  : "ring-transparent",
                                "absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none"
                              )}
                              aria-hidden='true'
                            />
                          </>
                        )}
                      </Tab>
                    ))}
                  </Tab.List>
                </div>

                <Tab.Panels className='w-full aspect-w-1 aspect-h-1'>
                  {product.urls.map((url) => (
                    <Tab.Panel key={uuid()}>
                      <img
                        src={url.urls}
                        alt={product.id}
                        className='w-full h-full object-center object-cover sm:rounded-lg'
                      />
                    </Tab.Panel>
                  ))}
                </Tab.Panels>
              </Tab.Group>

              {/* Product info */}
              <div className='mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0'>
                <h1 className='text-3xl font-extrabold tracking-tight text-gray-900'>
                  {product.title}
                </h1>

                <div className='mt-3'>
                  <h2 className='sr-only'>Product information</h2>
                  <p className='text-3xl text-gray-900'>
                    $
                    {new Intl.NumberFormat("en-IN", {
                      style: "currency",
                      currency: "AUS",
                    }).format(product.price)}
                  </p>
                </div>

                {/* Reviews */}
                <div className='mt-3'>
                  <h3 className='sr-only'>Reviews</h3>
                  <div className='flex items-center'>
                    <div className='flex items-center'>
                      {[0, 1, 2, 3, 4].map((rating) => (
                        <StarIcon
                          key={uuid()}
                          className={classNames(
                            product.rating > rating
                              ? "text-yellow-500"
                              : "text-yellow-300",
                            "h-5 w-5 flex-shrink-0"
                          )}
                          aria-hidden='true'
                        />
                      ))}
                    </div>
                    <p className='sr-only'>{product.id} out of 5 stars</p>
                  </div>
                </div>

                <div className='mt-6'>
                  <h3 className='sr-only'>Description</h3>

                  <div
                    className='text-base text-gray-700 space-y-6'
                    dangerouslySetInnerHTML={{ __html: product.description }}
                  />
                </div>

                <form className='mt-6'>
                  <div className='mt-10 flex sm:flex-col1'>
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
                        type='submit'
                        className='max-w-xs flex-1 bg-black border border-transparent py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-yellow-500 sm:w-full'
                      >
                        Contact representative
                      </Link>
                    </motion.div>
                  </div>
                </form>

                <section aria-labelledby='details-heading' className='mt-12'>
                  <h2 id='details-heading' className='sr-only'>
                    Additional details
                  </h2>
                  <div className='border-t divide-y divide-gray-200'>
                    {product.details.map((detail) => (
                      <Disclosure as='div' key={uuid()}>
                        {({ open }) => (
                          <>
                            <h3>
                              <Disclosure.Button className='group relative w-full py-6 flex justify-between items-center text-left'>
                                <span
                                  className={classNames(
                                    open ? "text-yellow-600" : "text-gray-900",
                                    "text-sm font-medium"
                                  )}
                                >
                                  {detail.name}
                                </span>
                                <span className='ml-6 flex items-center'>
                                  {open ? (
                                    <MinusSmIcon
                                      className='block h-6 w-6 text-yellow-400 group-hover:text-yellow-500'
                                      aria-hidden='true'
                                    />
                                  ) : (
                                    <PlusSmIcon
                                      className='block h-6 w-6 text-gray-400 group-hover:text-gray-500'
                                      aria-hidden='true'
                                    />
                                  )}
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel
                              as='div'
                              className='pb-6 prose prose-sm'
                            >
                              <ul>
                                {detail.item.map((i) => (
                                  <li key={uuid()}>{i}</li>
                                ))}
                              </ul>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </div>
          <ProductFeatures />
        </div>
      )}
    </Fragment>
  );
}

Example.propTypes = {
  product: PropTypes.object,
};
