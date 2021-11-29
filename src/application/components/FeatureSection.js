import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";

export default function Example({ products }) {
  return (
    <div className='bg-white'>
      <div className='pb-16 pt-6 sm:pb-24 sm:pt-16 lg:max-w-7xl lg:mx-auto lg:px-8'>
        <div className='px-4 flex items-center justify-between sm:px-6 lg:px-0'>
          <h2 className='text-2xl font-extrabold tracking-tight text-gray-900'>
            Featured pieces
          </h2>
          <Link
            to='/collection:all'
            className='hidden sm:block text-sm font-semibold text-yellow-800 hover:text-yellow-700'
          >
            Discover the collection<span aria-hidden='true'> &rarr;</span>
          </Link>
        </div>

        <div className='mt-8 relative'>
          <div className='relative w-full pb-6 -mb-6 overflow-x-auto'>
            <ul className='mx-4 inline-flex space-x-8 sm:mx-6 lg:mx-0 lg:space-x-0 lg:grid lg:grid-cols-5 lg:gap-x-8'>
              {products.map((product) => (
                <li
                  key={uuid()}
                  className='w-64 inline-flex flex-col text-center lg:w-auto'
                >
                  <div className='group relative'>
                    <div className='w-full bg-gray-200 rounded-md overflow-hidden aspect-w-1 aspect-h-1'>
                      <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className='w-full h-full object-center object-cover group-hover:opacity-75'
                      />
                    </div>
                    <div className='mt-6 mb-10'>
                      <h3 className='mt-1 font-semibold text-gray-900'>
                        <Link to={product.href}>
                          <span className='absolute inset-0' />
                          {product.title}
                        </Link>
                      </h3>
                      <p className='mt-1 text-gray-900'>{product.price}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className='mt-12 flex px-4 sm:hidden'>
          <Link
            to='/collection'
            className='text-sm font-semibold text-yellow-800 hover:text-yellow-700'
          >
            Discover more<span aria-hidden='true'> &rarr;</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

Example.propTypes = {
  products: PropTypes.array.isRequired,
};
Example.defaultProps = {
  products: [
    {
      id: 1,
      title: "Title",

      price: "$35,000",
      href: "/",
      imageSrc:
        "https://firebasestorage.googleapis.com/v0/b/nonpareil-collection.appspot.com/o/1093_1.jpg?alt=media&token=c32d616d-4e02-4f0d-863e-a3608674e96a",
      imageAlt: "Nonpareil",
    },
    {
      id: 2,
      title: "Title",

      price: "$35,000",
      href: "/",
      imageSrc:
        "https://firebasestorage.googleapis.com/v0/b/top-quality-furniture---dev.appspot.com/o/1020_1.jpg?alt=media&token=74054ec6-4346-442b-bc2e-e65b1274cb78",
      imageAlt: "Nonpareil",
    },
    {
      id: 3,
      title: "Title",

      price: "$35,000",
      href: "/",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg",
      imageAlt: "Nonpareil",
    },
    {
      id: 4,
      title: "Title",

      price: "$35,000",
      href: "/",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg",
      imageAlt: "Nonpareil",
    },
    {
      id: 5,
      title: "Title",

      price: "$35,000",
      href: "/",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg",
      imageAlt: "Nonpareil",
    },
    {
      id: 6,
      title: "Title",

      price: "$35,000",
      href: "/",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg",
      imageAlt: "Nonpareil",
    },
    {
      id: 7,
      title: "Title",

      price: "$35,000",
      href: "/",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg",
      imageAlt: "Nonpareil",
    },
    {
      id: 8,
      title: "Title",

      price: "$35,000",
      href: "/",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg",
      imageAlt: "Nonpareil",
    },
    {
      id: 9,
      title: "Title",

      price: "$35,000",
      href: "/",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg",
      imageAlt: "Nonpareil",
    },
    {
      id: 10,
      title: "Title",

      price: "$35,000",
      href: "/",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg",
      imageAlt: "Nonpareil",
    },
    {
      id: 11,
      title: "Title",

      price: "$35,000",
      href: "/",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg",
      imageAlt: "Nonpareil",
    },
    {
      id: 12,
      title: "Title",

      price: "$35,000",
      href: "/",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg",
      imageAlt: "Nonpareil",
    },
    {
      id: 13,
      title: "Title",

      price: "$35,000",
      href: "/",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg",
      imageAlt: "Nonpareil",
    },
    {
      id: 14,
      title: "Title",

      price: "$35,000",
      href: "/",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg",
      imageAlt: "Nonpareil",
    },
    {
      id: 15,
      title: "Title",

      price: "$35,000",
      href: "/",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg",
      imageAlt: "Nonpareil",
    },
    {
      id: 16,
      title: "Title",

      price: "$35,000",
      href: "/",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg",
      imageAlt: "Nonpareil",
    },
    {
      id: 17,
      title: "Title",

      price: "$35,000",
      href: "/",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg",
      imageAlt: "Nonpareil",
    },
    {
      id: 18,
      title: "Title",

      price: "$35,000",
      href: "/",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg",
      imageAlt: "Nonpareil",
    },
    {
      id: 19,
      title: "Title",

      price: "$35,000",
      href: "/",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg",
      imageAlt: "Nonpareil",
    },
    {
      id: 20,
      title: "Title",

      price: "$35,000",
      href: "/",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg",
      imageAlt: "Nonpareil",
    },

    // More products...
  ],
};
