import { useEffect, useContext } from "react";
import Hero from "../components/Hero";
import ContactForm from "../components/ContactForm";
import CategoryDisplayOne from "../components/CategoryDisplayOne";
import CategoryDisplayTwo from "../components/CategoryDisplayTwo";
import FeatureSection from "../components/FeatureSection";
import MailSuccessMessage from "../components/MailSuccessMessage";
import MoutainHero from "../components/MountainHero";
// Context
import ProductContext from "../../context/products/productContext";
import AlertContext from "../../context/alert/alertContext";
import ReactGA from "react-ga";
export default function Example() {
  const productContext = useContext(ProductContext);
  const { products, getProductData } = productContext;
  const alertContext = useContext(AlertContext);
  const { setMessageSent, messageSent } = alertContext;
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
    //eslint-disable-next-line
  }, [messageSent]);

  if (messageSent) {
    return (
      <div className='h-screen flex items-center justify-center container mx-auto'>
        <MailSuccessMessage />
      </div>
    );
  }

  return (
    <div>
      {/* <CallToAction /> */}
      {/* Main heading  */}
      <MoutainHero />
      {/* <Hero /> */}
      {/* Category selection */}
      <FeatureSection />
      <CategoryDisplayOne />
      <CategoryDisplayTwo />
      <ContactForm />
    </div>
  );
}
