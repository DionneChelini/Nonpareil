import { useEffect } from "react";
import ContactForm from "../components/ContactForm";
import ReactGA from "react-ga";
const Contact = () => {
  useEffect(() => {
    window.scroll(0, 0);
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <div>
      <ContactForm />
    </div>
  );
};

export default Contact;
