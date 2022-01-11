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
                      <h3 className='mt-1 font-semibold text-gray-800'>
                        <Link to={product.href}>
                          <span className='absolute inset-0' />
                          {product.title}
                        </Link>
                      </h3>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className='mt-12 flex px-4 sm:hidden'>
          <Link
            to='/collection:all'
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
      title: "Leather Upholstered Sideboard",
      price: "$AUS 41,115.01",
      href: "/product_overview:2G57mx4LZCNssfcLUWwc",
      imageSrc:
        "https://firebasestorage.googleapis.com/v0/b/nonpareil-collection.appspot.com/o/1235_1.jpg?alt=media&token=11eb9c5a-18c9-4afb-8198-e2b4ced05470",
      imageAlt:
        "Nonpareil Collection: The Ultimate Destination For Luxurious Cocktail Cabinets || Luxurious Designer Cocktail Cabinets",
    },
    {
      id: 2,
      title: "Storage Cabinet With Solid Back Fretwork",

      price: "$AUS 18,665.01",
      href: "/product_overview:KrN5SsLkKwhpaDo1iTzz",
      imageSrc:
        "https://firebasestorage.googleapis.com/v0/b/nonpareil-collection.appspot.com/o/1163_1.jpg?alt=media&token=eed0342e-b5fc-4e9b-94cc-39704208824f",
      imageAlt:
        "Nonpareil Collection: The Ultimate Destination For Luxurious Cabinets || Luxurious Designer Cabinets",
    },
    {
      id: 3,
      title: "Luxury Cut Crystal Architectural Table Lamp",

      price: "$AUS 14,469.84",
      href: "/product_overview:Oy3pbW3djfRAy2WsrFId",
      imageSrc:
        "https://firebasestorage.googleapis.com/v0/b/nonpareil-collection.appspot.com/o/1041_1.jpg?alt=media&token=28d4d79b-29fc-49a3-a737-17f52f90c64a",
      imageAlt:
        "Nonpareil Collection: The Ultimate Destination For Luxurious Lighting || Luxurious Designer Lighting",
    },
    {
      id: 4,
      title: "Sculptural Table Lamp Gold Majolica",

      price: "$AUS 11,555.19",
      href: "/product_overview:XrMnOVtOsAaK4gJskB61",
      imageSrc:
        "https://firebasestorage.googleapis.com/v0/b/nonpareil-collection.appspot.com/o/1486_1.jpg?alt=media&token=57dfad66-adae-4a66-8fda-6195c3bada6e",
      imageAlt:
        "Nonpareil Collection: The Ultimate Destination For Luxurious Lighting || Luxurious Designer Lighting",
    },
    {
      id: 5,
      title: "Mirror Polished Metal Bench",

      price: "$AUS 11,258.26",
      href: "/product_overview:PhIhcOuH5a1UbQIaMTxB",
      imageSrc:
        "https://firebasestorage.googleapis.com/v0/b/nonpareil-collection.appspot.com/o/1581_1.jpg?alt=media&token=47615189-f04c-47ee-9c1c-a15856e15d9f",
      imageAlt:
        "Nonpareil Collection: The Ultimate Destination For Luxurious Seating || Luxurious Designer Seating",
    },
    {
      id: 6,
      title: "White Macassar Ebony Night Stand",

      price: "$AUS 30,231.63",
      href: "/product_overview:FkQxPBn1ZujhvRfO6vLm",
      imageSrc:
        "https://firebasestorage.googleapis.com/v0/b/nonpareil-collection.appspot.com/o/1117_1.jpg?alt=media&token=c7545f5f-7041-4f53-b721-bfef51d6fbdb",
      imageAlt:
        "Nonpareil Collection: The Ultimate Destination For Luxurious Cabinets || Luxurious Designer Cabinets",
    },
    {
      id: 7,
      title: "Art Deco Stylised Sofa",

      price: "$AUS 34,959.85",
      href: "/product_overview:VHrz8kLeJhAbGE38WDek",
      imageSrc:
        "https://firebasestorage.googleapis.com/v0/b/nonpareil-collection.appspot.com/o/1652_3.jpg?alt=media&token=509e2349-866d-4e34-89e8-bf2986430dfb",
      imageAlt:
        "Nonpareil Collection: The Ultimate Destination For Luxurious Sofas || Luxurious Designer Sofas",
    },
    {
      id: 8,
      title: "Macassar Ebony Chest Of Drawers",

      price: "$AUS 66,957.01",
      href: "/product_overview:TTBCVUeJL20yaeHM7oEi",
      imageSrc:
        "https://firebasestorage.googleapis.com/v0/b/nonpareil-collection.appspot.com/o/1141_2.jpg?alt=media&token=ea3e3f2d-64f9-4236-a194-f64031f02e06",
      imageAlt:
        "Nonpareil Collection: The Ultimate Destination For Luxurious Chests of Drawers || Luxurious Designer Chests of Drawers",
    },
    {
      id: 9,
      title: "Architectural Gothic Carved Cabinet",

      price: "$AUS 97,345.85",
      href: "/product_overview:TkKDAIXQyL3l0nQ3cFcF",
      imageSrc:
        "https://firebasestorage.googleapis.com/v0/b/nonpareil-collection.appspot.com/o/1184_4.jpg?alt=media&token=a3371cfc-2866-49ad-9b5a-2149113caebb",
      imageAlt:
        "Nonpareil Collection: The Ultimate Destination For Luxurious Cabinets || Luxurious Designer Cabinets",
    },
    {
      id: 10,
      title: "Modular Sofa Seating With Bronze Metal Seat Rail",

      price: "$AUS 43,926.30",
      href: "/product_overview:m14tP8KMqU6MuX878A1o",
      imageSrc:
        "https://firebasestorage.googleapis.com/v0/b/nonpareil-collection.appspot.com/o/1660_4.jpg?alt=media&token=ed66054e-899f-44fc-a259-1a4b49adc662",
      imageAlt:
        "Nonpareil Collection: The Ultimate Destination For Luxurious Sofas|| Luxurious Designer Sofas",
    },
    {
      id: 11,
      title: "LEATHER FRAME BED",

      price: "$AUS 22,035.50",
      href: "/product_overview:1IG2fBrunKrQKi6L9OQP",
      imageSrc:
        "https://firebasestorage.googleapis.com/v0/b/nonpareil-collection.appspot.com/o/1093_1.jpg?alt=media&token=c32d616d-4e02-4f0d-863e-a3608674e96a",
      imageAlt:
        "Nonpareil Collection: The Ultimate Destination For Luxurious Beds || Luxurious Designer Beds",
    },
    {
      id: 12,
      title: "Macassar Ebony Sideboard",

      price: "$AUS 55,698.76",
      href: "/product_overview:6MYZ5kEMbSS8k33e8O0J",
      imageSrc:
        "https://firebasestorage.googleapis.com/v0/b/nonpareil-collection.appspot.com/o/1194_2.jpg?alt=media&token=51cedb78-9e62-4fc2-b534-47e67720b5a7",
      imageAlt:
        "Nonpareil Collection: The Ultimate Destination For Luxurious Sideboards || Luxurious Designer Sideboards",
    },
    {
      id: 13,
      title: "Murano Glass Mirrors - Gold Glass Frame",

      price: "$AUS 32,293.43",
      href: "/product_overview:J06MBUIzseJvbNn56bl6",
      imageSrc:
        "https://firebasestorage.googleapis.com/v0/b/nonpareil-collection.appspot.com/o/1102_3.jpg?alt=media&token=2cc64c77-0526-493b-8454-1763ac31f346",
      imageAlt:
        "NNonpareil Collection: The Ultimate Destination For Luxurious Mirrors || Luxurious Designer Mirrors",
    },
    {
      id: 14,
      title: "Rosewood & Velvet Upholstered Chest Of Drawers",

      price: "$AUS 22,996.71",
      href: "/product_overview:yABBP36QO51N0ngeMtlr",
      imageSrc:
        "https://firebasestorage.googleapis.com/v0/b/nonpareil-collection.appspot.com/o/1130_3.jpg?alt=media&token=ddc599ba-b72f-4a05-9c5f-7299f8afed2a",
      imageAlt:
        "Nonpareil Collection: The Ultimate Destination For Luxurious Chests of Drawers || Luxurious Designer Chests of Drawers",
    },

    // More products...
  ],
};
