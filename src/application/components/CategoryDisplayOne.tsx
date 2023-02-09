import { Link } from "react-router-dom";
const categories = [
  {
    name: "Beds",
    href: "/collection:beds",
    imageSrc:
      "https://firebasestorage.googleapis.com/v0/b/nonpareil-collection.appspot.com/o/1086_1.jpg?alt=media&token=4bd984ef-897b-4697-b643-6299a33019ce",
    imageAlt:
      "Brown leather key ring with brass metal loops and rivets on wood table.",
    description: "Luxurious beds & designer headboards.",
  },
  {
    name: "Case Goods",
    href: "/collection:caseGoods",
    imageSrc:
      "https://firebasestorage.googleapis.com/v0/b/nonpareil-collection.appspot.com/o/1235_1.jpg?alt=media&token=11eb9c5a-18c9-4afb-8198-e2b4ced05470",
    imageAlt:
      "Natural leather mouse pad on white desk next to porcelain mug and keyboard.",
    description:
      "Designer cabinets, luxury display units & high end sideboards.",
  },
  {
    name: "Lighting",
    href: "/collection:lighting",
    imageSrc:
      "https://firebasestorage.googleapis.com/v0/b/nonpareil-collection.appspot.com/o/1482_1.jpg?alt=media&token=f82907d3-83e4-4f94-931e-224acf4a0d92",
    imageAlt:
      "Person placing task list card into walnut card holder next to felt carrying case on leather desk pad.",
    description: "Luxurious Italian lighting design.",
  },
];
export default function Example(): JSX.Element {
  return (
    <div className='bg-white'>
      <div className='max-w-xl mx-auto pb-16 pt-4 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
        <h2 className='text-4xl font-extrabold tracking-tight text-gray-900'>
          View by Category
        </h2>
        <p className='mt-4 text-base text-gray-500'>
          Each year, we collaborate with world-class designers to create a
          collection inspired by the natural world.
        </p>

        <div className='mt-10 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8'>
          {categories.map((category) => (
            <Link
              key={category.name}
              to={category.href}
              className='group block'
            >
              <div
                aria-hidden='true'
                className='aspect-w-3 aspect-h-2 rounded-lg overflow-hidden group-hover:opacity-75 lg:aspect-w-5 lg:aspect-h-6  bg-gray-200'
              >
                <img
                  src={category.imageSrc}
                  alt={category.imageAlt}
                  className='w-full h-full object-center object-cover'
                />
              </div>
              <h3 className='mt-4 text-base font-semibold text-gray-900'>
                {category.name}
              </h3>
              <p className='mt-2 text-sm text-gray-500'>
                {category.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
