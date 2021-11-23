import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Example({ categories }) {
  return (
    <div className='bg-white sm:mb-48 mb-24'>
      <div className='max-w-xl mx-auto px-4  sm:px-6 lg:max-w-7xl lg:px-8'>
        <div className=' space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8'>
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
Example.propTypes = {
  categories: PropTypes.array.isRequired,
};

Example.defaultProps = {
  categories: [
    {
      name: 'Office',
      href: '/collection:office',
      imageSrc:
        'https://firebasestorage.googleapis.com/v0/b/top-quality-furniture---dev.appspot.com/o/1074_4.jpg?alt=media&token=b2b3fa20-22b2-4cdd-bc80-481ddb79cd14',
      imageAlt:
        'Brown leather key ring with brass metal loops and rivets on wood table.',
      description:
        'High profile, luxury office, workspace and study furniture.',
    },
    {
      name: 'Seating',
      href: '/collection:seating',
      imageSrc:
        'https://firebasestorage.googleapis.com/v0/b/top-quality-furniture---dev.appspot.com/o/1660_4.jpg?alt=media&token=d44b109b-bc38-4011-9e7f-a7712dcfd9b6',
      imageAlt:
        'Natural leather mouse pad on white desk next to porcelain mug and keyboard.',
      description:
        'Designer luxury Italian seating for the dining room, lounge, office and bedroom.',
    },
    {
      name: 'Tables',
      href: '/collection:tables',
      imageSrc:
        'https://firebasestorage.googleapis.com/v0/b/top-quality-furniture---dev.appspot.com/o/1360_1.jpg?alt=media&token=f5dd0853-e678-459e-9a37-ecc4bcb0c20e',
      imageAlt:
        'Person placing task list card into walnut card holder next to felt carrying case on leather desk pad.',
      description: 'Luxury designer Italian tables.',
    },
  ],
};
