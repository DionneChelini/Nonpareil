/* This example requires Tailwind CSS v2.0+ */
const features = [
  {
    name: "Production",
    description:
      "This piece is designed, made to order and finished in “continental” Europe by hand. Our leading manufacturers stand out for their dedication to the pursuit of excellence using hand crafted artisan traditional techniques as well as innovative, experimental production methods. ",
  },
  {
    name: "Aesthetic",
    description:
      "This piece is designed and created with particular attention to precision of composition, choice of materials, details and finish. The result is an exceptional product in terms of style, beauty, uniqueness and functionality. ",
  },
  {
    name: "Personalization",
    description:
      "We are in a position to bespoke many of our pieces to your specifications. In the event that your requirements (such as size, choice of fabric, materials or finishes) differ from those stated in the description above, please do not hesitate to contact us. ",
  },

  {
    name: "Delivery",
    description:
      "For your convenience we manage all logistics relating to transport, including professional packaging, customs clearance, warehousing and delivery worldwide. Our transportation charges are always offered to you at net cost price unless otherwise stated by us. Our consignments are fully insured up to the point of delivery. ",
  },
  {
    name: "Payment",
    description:
      "Our business terms are standard within our industry. Payment of 50% deposit funds on purchase order (prior to commencement of production) and 50% outstanding balance on advice of completion (prior to delivery). Should you wish to proceed with purchase we kindly request that you contact us by telephone and or by email. ",
  },
];

export default function Example() {
  return (
    <div className='bg-white lg:mt-48'>
      <div aria-hidden='true' className='relative'>
        <img
          src='https://thedesignfiles.net/wp-content/uploads/2018/11/bern-chandley-tools-tdf-ad-2200x1404.jpg'
          alt=''
          className='w-full h-96 object-center object-cover'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-white' />
      </div>

      <div className='relative -mt-12 max-w-7xl mx-auto pb-16 px-4 sm:pb-24 sm:px-6 lg:px-8'>
        <div className='max-w-2xl mx-auto text-center lg:max-w-4xl'>
          <h2 className='text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
            Additional Information
          </h2>
          <p className='mt-4 text-gray-500'>
            This piece has been carefully selected for its own design merit,
            outstanding materials and high-profile manufacturing. Nonpareil
            Collection guarantees that this product will match the quality
            represented on the images above.
          </p>
        </div>

        <dl className='mt-16 max-w-2xl mx-auto grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:max-w-none lg:grid-cols-3 lg:gap-x-8'>
          {features.map((feature) => (
            <div key={feature.name} className='border-t border-gray-200 pt-4'>
              <dt className='font-medium text-gray-900'>{feature.name}</dt>
              <dd className='mt-2 text-sm text-gray-500'>
                {feature.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
