import { useEffect, useContext } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import AlertContext from "../context/alert/alertContext";
const useFirebase = ({ user, submit, setSubmit, setUser }) => {
  const alertContext = useContext(AlertContext);
  const { setMessageSent } = alertContext;

  useEffect(() => {
    if (!submit) return;

    saveCustomerEnquiry(user);
  }, [submit]);

  function saveCustomerEnquiry(user) {
    try {
      addDoc(collection(db, "customers"), {
        ...user,
      });
      setSubmit(false);
      setUser({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
        budget: "",
        source: "",
      });
      setMessageSent(true);
      setTimeout(() => {
        setMessageSent(false);
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  }
};

export default useFirebase;
