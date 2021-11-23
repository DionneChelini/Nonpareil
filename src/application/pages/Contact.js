import { useEffect } from "react";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div>
      <ContactForm />
    </div>
  );
};

export default Contact;
