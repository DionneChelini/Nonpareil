import { Link } from "react-router-dom";
import { useEffect } from "react";

const faqs = [
  {
    question: "Do you ship to my country",
    answer:
      "Yes, delivery is worldwide. Our shipments are handled by specialist couriers and our consignments are fully insured while in transit up to the point of delivery",
  },
  {
    question: "How do I order?",
    answer:
      "To order please contact us via telephone and or by email, quoting the Product ID. There is also the option of filling out the enquiry form on our website. We generally responde within 24 hours.",
  },
  {
    question: "What are my payment options?",
    answer:
      "We accept payment via Visa, Mastercard, American Express and ApplePay. All transactions are secured online via Stripe. Other payment options are available on request",
  },
  {
    question: "How do I pay?",
    answer:
      "Upon order approval, clients receive a specially generated URL to make payment via Stripe. Payment is completed whilst on telephone by our designated representative. Our business terms and standard within our field and industry: payment of 50% deposit funds on purchase order (prior to commencement of production) and 50% outstanding balance on advice of completion (prior to delivery). ",
  },
  {
    question: "What currency do you accept?",
    answer:
      "All payment will be charged to you in Australia dollars. Other currencies will be subject to exchange rate at the time of purchase.",
  },
  {
    question: "When will my order ship?",
    answer:
      "Delivery will take place after being in receipt of full payment of proforma invoice.",
  },
  {
    question: "How do I track my order?",
    answer:
      "You can track your order online via the tracking number and link we provide.",
  },
  {
    question: "What is your return policy?",
    answer:
      "Under the distance selling regualtions you are entitled to cancel your order and obtain a refund. You may do this by emailing us anytime after making the order and up to 7 working days beginning with the day on which you received the goods. The right to cancel under te distance selling regualtion does not apply to goods which are made to order.",
  },
  {
    question: "What if the product is damaged?",
    answer:
      "Consignments must be checked for any damage on delivery. All damages must be notified immediately to us. Defects which could not be established immediately upon arrival must be declared to us within 3 business days from receipt of the goods. Failure to do so will invalidate all future claims.",
  },
  // More questions...
];

export default function Example() {
  useEffect(() => {
    window.scroll(0, 0);

    //eslint-disable-next-line
  }, []);
  return (
    <div className='bg-white'>
      <div className='max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8'>
        <div className='lg:grid lg:grid-cols-3 lg:gap-8'>
          <div>
            <h2 className='text-3xl font-extrabold text-gray-900'>
              Frequently asked questions
            </h2>
            <p className='mt-4 text-lg text-gray-500'>
              You've got questions? We've got answers. It seems like you are
              looking for help. If you don't find the answer you are looking for
              please reach out to our{" "}
              <Link
                to='/contact_us'
                className='font-medium text-yellow-600 hover:text-yellow-500'
              >
                customer support
              </Link>{" "}
              team.
            </p>
          </div>

          <div className='mt-12 lg:mt-0 lg:col-span-2'>
            <dl className='space-y-12'>
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <dt className='text-lg leading-6 font-medium text-gray-900'>
                    {faq.question}
                  </dt>
                  <dd className='mt-2 text-base text-gray-500'>{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
