import { useEffect, useContext } from "react";
import Hero from "../components/Hero";
import ContactForm from "../components/ContactForm";
import CategoryDisplayOne from "../components/CategoryDisplayOne";
import CategoryDisplayTwo from "../components/CategoryDisplayTwo";
import FeatureSection from "../components/FeatureSection";
import MoutainHero from "../components/MountainHero";

import ReactGA from "react-ga";
export default function Example() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
    //eslint-disable-next-line
  }, []);

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
