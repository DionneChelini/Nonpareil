import PropTypes from "prop-types";
import { Fragment, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import {
  BellIcon,
  CollectionIcon,
  MenuAlt2Icon,
  SaveIcon,
  XIcon,
} from "@heroicons/react/outline";
import { SearchIcon } from "@heroicons/react/solid";
import ProgressBar from "../components/ProgressBar";
import useDashboard from "../../hooks/useDashboard";
// import Logo from "../../resources/logo.png";
import InputTags from "../components/InputTags";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example({ navigation, userNavigation, types }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [files, setFiles] = useState([]);
  const [error, setError] = useState(null);
  const [submit, setSubmit] = useState(false);
  const [category, setCategory] = useState({});
  const [deliveryTag, setDeliveryTag] = useState([]);
  const [dimensionTag, setDimensionTag] = useState([]);
  const [materialTag, setMaterialTag] = useState([]);
  const [idTag, setIdTag] = useState([]);
  const [productData, setProductData] = useState({
    title: "",
    description: "",
    category: "",
    subcategory: "",
    price: "",
    details: [
      { name: "material", item: [] },
      { name: "dimensions", item: [] },
      { name: "delivery", item: [] },
      { name: "product_id", item: [] },
    ],
  });

  const selected = (tags, name) => {
    let updated = [...productData.details];
    console.log(updated);
    updated.forEach((tag) => {
      if (tag.name === name) {
        tag.item = tags;
        setProductData({ ...productData, details: updated });
        return;
      }
    });
  };

  const { progress } = useDashboard({
    files,
    productData,
    submit,
    setSubmit,
    setFiles,
    setProductData,
  });

  const selectCategoryHandler = (e) => {
    setCategory({ [e.target.value]: true });
  };

  const handleInput = (e) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };
  const handleImage = (e) => {
    for (let i = 0; i < e.target.files.length; i++) {
      const images = e.target.files[i];
      setFiles((prevState) => [...prevState, images]);
    }
  };

  console.log("Dashboard component rerenders", "submitValue: " + submit);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!files) {
      return setError("You need to upload file");
    }
    if (files) {
      setSubmit(true);
    }
  };
  return (
    <>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as='div'
            className='fixed inset-0 flex z-40 md:hidden'
            onClose={setSidebarOpen}
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
              <Dialog.Overlay className='fixed inset-0 bg-gray-600 bg-opacity-75' />
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
              <div className='relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-black'>
                <Transition.Child
                  as={Fragment}
                  enter='ease-in-out duration-300'
                  enterFrom='opacity-0'
                  enterTo='opacity-100'
                  leave='ease-in-out duration-300'
                  leaveFrom='opacity-100'
                  leaveTo='opacity-0'
                >
                  <div className='absolute top-0 right-0 -mr-12 pt-2'>
                    <button
                      type='button'
                      className='ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className='sr-only'>Close sidebar</span>
                      <XIcon
                        className='h-6 w-6 text-white'
                        aria-hidden='true'
                      />
                    </button>
                  </div>
                </Transition.Child>
                <div className='flex-shrink-0 flex items-center px-4'>
                  {/* <img className='w-64' src={Logo} alt='Nonpareil' /> */}
                </div>
                <div className='mt-5 flex-1 h-0 overflow-y-auto'>
                  <nav className='px-2 space-y-1'>
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current
                            ? "bg-yellow-800 text-white"
                            : "text-yellow-100 hover:bg-black",
                          "group flex items-center px-2 py-2 text-base font-medium rounded-md"
                        )}
                      >
                        <item.icon
                          className='mr-4 flex-shrink-0 h-6 w-6 text-yellow-300'
                          aria-hidden='true'
                        />
                        {item.name}
                      </Link>
                    ))}
                  </nav>
                </div>
              </div>
            </Transition.Child>
            <div className='flex-shrink-0 w-14' aria-hidden='true'>
              {/* Dummy element to force sidebar to shrink to fit close icon */}
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className='hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0'>
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className='flex flex-col flex-grow pt-5 bg-black overflow-y-auto'>
            <div className='flex items-center flex-shrink-0 px-4'>
              {/* <img className='w-64' src={Logo} alt='Nonpareil' /> */}
            </div>
            <div className='mt-5 flex-1 flex flex-col'>
              <nav className='flex-1 px-2 pb-4 space-y-1'>
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={classNames(
                      item.current
                        ? "bg-yellow-500 text-black"
                        : "text-yellow-100 hover:bg-yellow-600",
                      "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                    )}
                  >
                    <item.icon
                      className='mr-3 flex-shrink-0 h-6 w-6 text-yellow-900'
                      aria-hidden='true'
                    />
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
        <div className='md:pl-64 flex flex-col flex-1'>
          <div className='sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white shadow'>
            <button
              type='button'
              className='px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500 md:hidden'
              onClick={() => setSidebarOpen(true)}
            >
              <span className='sr-only'>Open sidebar</span>
              <MenuAlt2Icon className='h-6 w-6' aria-hidden='true' />
            </button>
            <div className='flex-1 px-4 flex justify-between'>
              <div className='flex-1 flex'>
                <form className='w-full flex md:ml-0' action='#' method='GET'>
                  <label htmlFor='search-field' className='sr-only'>
                    Search
                  </label>
                  <div className='relative w-full text-gray-400 focus-within:text-gray-600'>
                    <div className='absolute inset-y-0 left-0 flex items-center pointer-events-none'>
                      <SearchIcon className='h-5 w-5' aria-hidden='true' />
                    </div>
                    <input
                      id='search-field'
                      className='block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm'
                      placeholder='Search'
                      type='search'
                      name='search'
                    />
                  </div>
                </form>
              </div>
              <div className='ml-4 flex items-center md:ml-6'>
                <button
                  type='button'
                  className='bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500'
                >
                  <span className='sr-only'>View notifications</span>
                  <BellIcon className='h-6 w-6' aria-hidden='true' />
                </button>

                {/* Profile dropdown */}
                <Menu as='div' className='ml-3 relative'>
                  <div>
                    <Menu.Button className='max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500'>
                      <span className='sr-only'>Open user menu</span>
                      <img
                        className='h-8 w-8 rounded-full'
                        src='https://firebasestorage.googleapis.com/v0/b/top-quality-furniture---dev.appspot.com/o/15f815776d1b24b0d448432b2cca5ec3.jpeg?alt=media&token=a6e5c562-8ada-4b1d-af70-1c8806d6469b'
                        alt=''
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter='transition ease-out duration-100'
                    enterFrom='transform opacity-0 scale-95'
                    enterTo='transform opacity-100 scale-100'
                    leave='transition ease-in duration-75'
                    leaveFrom='transform opacity-100 scale-100'
                    leaveTo='transform opacity-0 scale-95'
                  >
                    <Menu.Items className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'>
                      {userNavigation.map((item) => (
                        <Menu.Item key={item.name}>
                          {({ active }) => (
                            <Link
                              to={item.href}
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              {item.name}
                            </Link>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <main>
            <div className='py-6'>
              <div className='max-w-7xl mx-auto px-4 sm:px-6 md:px-8'>
                <h1 className='text-2xl font-semibold text-gray-900 mb-5'>
                  Dashboard
                </h1>
              </div>
              <div className='max-w-7xl mx-auto px-4 sm:px-6 md:px-8'>
                <div className='space-y-6'>
                  <div className='bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6'>
                    <div className='md:grid md:grid-cols-3 md:gap-6'>
                      <div className='md:col-span-1'>
                        <h3 className='text-lg font-medium leading-6 text-gray-900'>
                          Add Product
                        </h3>
                        <p className='mt-1 text-sm text-gray-500'>
                          This information will be added to Google's firebase
                          data storage. The collection name is products.
                        </p>
                      </div>
                      <div className='mt-5 md:mt-0 md:col-span-2'>
                        <form className='space-y-6' onSubmit={handleFormSubmit}>
                          <div className='grid grid-cols-3 gap-6'>
                            <div className='col-span-6 sm:col-span-3'>
                              <label
                                htmlFor='first-name'
                                className='block text-sm font-medium text-gray-700'
                              >
                                Product title
                              </label>
                              <input
                                required
                                onChange={handleInput}
                                type='text'
                                name='title'
                                autoComplete='given-name'
                                className='mt-1 focus:ring-yellow-500 focus:border-yellow-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                                value={productData.title}
                                autoComplete='off'
                              />
                            </div>
                          </div>

                          <div>
                            <label
                              htmlFor='about'
                              className='block text-sm font-medium text-gray-700'
                            >
                              Description
                            </label>
                            <div className='mt-1'>
                              <textarea
                                required
                                onChange={handleInput}
                                name='description'
                                rows={3}
                                className='shadow-sm focus:ring-yellow-500 focus:border-yellow-500 block w-full sm:text-sm border border-gray-300 rounded-md'
                                value={productData.description}
                                autoComplete='off'
                              />
                            </div>

                            <div className='col-span-6 sm:col-span-3 mt-5'>
                              <label
                                htmlFor='country'
                                className='block text-sm font-medium text-gray-700'
                              >
                                Category
                              </label>
                              <select
                                required
                                onChange={handleInput}
                                name='category'
                                autoComplete='category'
                                className='mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm'
                                value={productData.category}
                                onClick={selectCategoryHandler}
                              >
                                <option>Select Category</option>
                                <option>Beds</option>
                                <option>CaseGoods</option>
                                <option>Lighting</option>
                                <option>Office</option>
                                <option>Seating</option>
                                <option>Tables</option>
                                <option>Mirrors</option>
                              </select>
                            </div>
                            <div className='col-span-6 sm:col-span-3 mt-5'>
                              <label
                                htmlFor='country'
                                className='block text-sm font-medium text-gray-700'
                              >
                                Subcategory
                              </label>
                              <select
                                required
                                onChange={handleInput}
                                name='subcategory'
                                autoComplete='subcategory'
                                className='mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm'
                                placeholder={productData.subcategory}
                              >
                                {category.Beds === true ? (
                                  <option>Beds</option>
                                ) : (
                                  ""
                                )}

                                {category.CaseGoods ? (
                                  <Fragment>
                                    <option>
                                      Nightstands &amp; Bedside Tables
                                    </option>{" "}
                                    <option>Cabinets</option>{" "}
                                    <option>Chests of Drawers</option>
                                    <option>Cocktail Cabinets</option>
                                  </Fragment>
                                ) : (
                                  ""
                                )}
                                {category.Lighting ? (
                                  <Fragment>
                                    {" "}
                                    <option>Table Lamps</option>{" "}
                                    <option>Wall Lights</option>{" "}
                                    <option>Chandeliers</option>{" "}
                                    <option>Floor Lamps</option>
                                  </Fragment>
                                ) : (
                                  ""
                                )}
                                {category.Office ? (
                                  <Fragment>
                                    {" "}
                                    <option>Office Chairs</option>{" "}
                                    <option>Office Bookcases</option>{" "}
                                    <option>Collector Items</option>{" "}
                                    <option>Office Desks</option>
                                  </Fragment>
                                ) : (
                                  ""
                                )}
                                {category.Seating ? (
                                  <Fragment>
                                    {" "}
                                    <option>Sofas</option>{" "}
                                    <option>Benches &amp; Ottomans</option>{" "}
                                    <option>Armchairs</option>{" "}
                                    <option>Chaise Longues</option>
                                  </Fragment>
                                ) : (
                                  ""
                                )}
                                {category.Tables ? (
                                  <Fragment>
                                    {" "}
                                    <option>
                                      Coffee &amp; Cocktail Tables
                                    </option>{" "}
                                    <option>Console Tables</option>{" "}
                                    <option>Hall Tables</option>{" "}
                                    <option>Dinning Tables</option>
                                  </Fragment>
                                ) : (
                                  ""
                                )}
                                {category.Mirrors ? (
                                  <Fragment>
                                    {" "}
                                    <option>Mirror</option>
                                  </Fragment>
                                ) : (
                                  ""
                                )}
                              </select>
                            </div>

                            <div className='col-span-6 sm:col-span-3 mt-5'>
                              <label
                                htmlFor='price'
                                className='block text-sm font-medium text-gray-700'
                              >
                                Price
                              </label>
                              <div className='mt-1 relative rounded-md shadow-sm'>
                                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                                  <span className='text-gray-500 sm:text-sm'>
                                    $
                                  </span>
                                </div>
                                <input
                                  onChange={handleInput}
                                  type='text'
                                  name='price'
                                  id='price'
                                  placeholder='0.00'
                                  className='focus:ring-yellow-500 focus:border-yellow-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md'
                                  value={productData.price}
                                  aria-describedby='price-currency'
                                  autoComplete='off'
                                />
                                <div className='absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none'>
                                  <span
                                    className='text-gray-500 sm:text-sm'
                                    id='price-currency'
                                  >
                                    AUD
                                  </span>
                                </div>
                              </div>
                            </div>
                            <InputTags
                              selected={selected}
                              name={"dimensions"}
                              tags={dimensionTag}
                              setTags={setDimensionTag}
                            />
                            <InputTags
                              selected={selected}
                              name={"product_id"}
                              tags={idTag}
                              setTags={setIdTag}
                            />
                            <InputTags
                              selected={selected}
                              name={"delivery"}
                              tags={deliveryTag}
                              setTags={setDeliveryTag}
                            />

                            <InputTags
                              selected={selected}
                              name={"material"}
                              tags={materialTag}
                              setTags={setMaterialTag}
                            />
                          </div>

                          <div>
                            <label className='block text-sm font-medium text-gray-700'>
                              Product photo's
                            </label>
                            <div className='mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md'>
                              <div className='space-y-1 text-center'>
                                <svg
                                  className='mx-auto h-12 w-12 text-gray-400'
                                  stroke='currentColor'
                                  fill='none'
                                  viewBox='0 0 48 48'
                                  aria-hidden='true'
                                >
                                  <path
                                    d='M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02'
                                    strokeWidth={2}
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                  />
                                </svg>
                                <div className='flex text-sm text-gray-600'>
                                  <label
                                    htmlFor='file-upload'
                                    className='relative cursor-pointer bg-white rounded-md font-medium text-yellow-600 hover:text-yellow-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-yellow-500'
                                  >
                                    <span>Upload files</span>
                                    <input
                                      required
                                      onChange={handleImage}
                                      id='file-upload'
                                      name='file-upload'
                                      type='file'
                                      className='sr-only'
                                      multiple
                                    />
                                  </label>
                                  <p className='pl-1'>or drag and drop</p>
                                </div>
                                <p className='text-xs text-gray-500'>
                                  PNG, JPG, GIF up to 10MB
                                </p>
                              </div>
                            </div>
                          </div>
                          {progress ? (
                            <ProgressBar progress={progress} />
                          ) : null}

                          <div className='flex justify-end'>
                            <button
                              type='submit'
                              className='inline-flex px-4 py-2 border border-transparent shadow-sm text-base font-medium text-black  bg-yellow-500'
                            >
                              Upload Product
                              <SaveIcon
                                className='ml-3 -mr-1 h-5 w-5'
                                aria-hidden='true'
                              />
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

Example.propTypes = {
  navigation: PropTypes.array.isRequired,
  userNavigation: PropTypes.array.isRequired,
  types: PropTypes.array.isRequired,
};
Example.defaultProps = {
  navigation: [
    { name: "Collection", href: "#", icon: CollectionIcon, current: true },
  ],
  userNavigation: [
    { name: "Your Profile", href: "#" },
    { name: "Settings", href: "#" },
    { name: "Sign out", href: "#" },
  ],

  types: ["image/png", "image/jpeg"],
};
