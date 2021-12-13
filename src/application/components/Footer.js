import PropTypes from "prop-types";
import { withRouter, Link } from "react-router-dom";
import {
  faCcStripe,
  faCcVisa,
  faCcMastercard,
  faCcApplePay,
  faCcAmazonPay,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MailIcon, PhoneIcon } from "@heroicons/react/outline";
const Example = ({ footerNavigation, history }) => {
  return history.location.pathname === "/dashboard" ? null : (
    <footer aria-labelledby='footer-heading' className='bg-black'>
      <h2 id='footer-heading' className='sr-only'>
        Footer
      </h2>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='py-20 xl:grid xl:grid-cols-3 xl:gap-8'>
          <div className='grid grid-cols-2 gap-8 xl:col-span-2'>
            <div className='space-y-12 md:space-y-0 md:grid md:grid-cols-2 md:gap-8'>
              <div>
                <h3 className='text-sm font-medium text-white'>Shop</h3>
                <ul className='mt-6 space-y-6'>
                  {footerNavigation.shop.map((item) => (
                    <li key={item.name} className='text-sm'>
                      <Link
                        to={item.href}
                        className='text-gray-300 hover:text-white'
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className='text-sm font-medium text-white'>Information</h3>
                <ul className='mt-6 space-y-6'>
                  {footerNavigation.information.map((item) => (
                    <li key={item.name} className='text-sm'>
                      <Link
                        to={item.href}
                        className='text-gray-300 hover:text-white'
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className='space-y-12 md:space-y-0 md:grid md:grid-cols-2 md:gap-8'>
              <div>
                <h3 className='text-sm font-medium text-white'>Connect</h3>
                <ul className='mt-6 space-y-6'>
                  {footerNavigation.connect.map((item) => (
                    <li key={item.name} className='text-sm'>
                      <Link
                        to={item.href}
                        className='text-gray-300 hover:text-white'
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className='mt-8 xl:mt-0'>
            <div>
              <h2 className='text-2xl font-extrabold text-gray-200 sm:text-3xl'>
                Sales Support
              </h2>
              <div className='mt-3'>
                <p className='text-lg text-gray-400'>
                  Sales support awaits to handle all enquiries, approve orders
                  and facilitate payment.
                </p>
              </div>
              <div className='mt-9'>
                <div className='flex'>
                  <div className='flex-shrink-0'>
                    <PhoneIcon
                      className='h-6 w-6 text-gray-400'
                      aria-hidden='true'
                    />
                  </div>
                  <div className='ml-3 text-base text-gray-400'>
                    <p>+61 (03) 8373 7798</p>
                    <p className='mt-1'>Mon-Fri 9am to 5pm PST</p>
                  </div>
                </div>
                <div className='mt-6 flex'>
                  <div className='flex-shrink-0'>
                    <MailIcon
                      className='h-6 w-6 text-gray-400'
                      aria-hidden='true'
                    />
                  </div>
                  <div className='ml-3 text-base text-gray-400'>
                    <p>enquiry@nonpareil.com.au</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='border-t border-gray-700 py-10'>
          <p className='text-sm text-gray-400'>
            <FontAwesomeIcon
              icon={faCcStripe}
              className=' text-yellow-100 m-0 text-4xl'
            />{" "}
            <FontAwesomeIcon
              icon={faCcVisa}
              className=' text-yellow-100 m-0 text-4xl'
            />{" "}
            <FontAwesomeIcon
              icon={faCcMastercard}
              className=' text-yellow-100 m-0 text-4xl'
            />{" "}
            <FontAwesomeIcon
              icon={faCcApplePay}
              className=' text-yellow-100 m-0 text-4xl'
            />{" "}
            <FontAwesomeIcon
              icon={faCcAmazonPay}
              className=' text-yellow-100 m-0 text-4xl'
            />{" "}
          </p>
          <p className='text-xs font-light text-gray-400 my-2'>
            Copyright &copy; 2021 Nonpareil Pty Ltd
          </p>
        </div>
      </div>
    </footer>
  );
};
export default withRouter(Example);

Example.propTypes = {
  footerNavigation: PropTypes.exact({
    shop: PropTypes.array.isRequired,
    information: PropTypes.array.isRequired,
    connect: PropTypes.array.isRequired,
  }),
};
Example.defaultProps = {
  footerNavigation: {
    shop: [
      { name: "Beds", href: "/collection:beds" },
      { name: "Case Goods", href: "/collection:caseGoods" },

      { name: "Lighting", href: "/collection:lighting" },
      { name: "Office", href: "/collection:office" },
      { name: "Seating", href: "/collection:seating" },
      { name: "Tables", href: "/collection:tables" },
      { name: "Mirrors", href: "/collection:mirrors" },
    ],
    information: [
      { name: "Our Mission", href: "/our_mission" },
      { name: "Our Service", href: "/our_service" },
      { name: "How to Order", href: "/how_to_order" },
      { name: "Shipping", href: "/shipping" },
      { name: "Payment", href: "/payment" },
      { name: "Cancellation & Return Policy", href: "/returns" },

      { name: "Privacy", href: "/privacy" },
    ],

    connect: [{ name: "Contact Us", href: "/contact_us" }],
  },
};
