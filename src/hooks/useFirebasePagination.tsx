import { useState, useEffect, useContext } from "react";
import { db } from "../firebase";
import ProductContext from "../context/products/productContext";
import {
  collection,
  query,
  where,
  getDocs,
  getDoc,
  doc,
  limit,
  startAfter,
  startAt,
  orderBy,
} from "firebase/firestore";

const useFirebasePagination = (location: string) => {
  const [all, setAll] = useState<any>([]);
  const [caseGoods, setCaseGoods] = useState([]);
  const [lastAll, setLastAll] = useState<any>();
  const [hasMore, setHasMore] = useState(false);
  const productContext = useContext(ProductContext);
  const { loading, setLoading } = productContext;

  let lastDoc: any;
  useEffect(() => {
    if (all.length === 0) {
      if (location === "/collection:all") {
        getAllProducts();
      }
    }
    if (caseGoods.length === 0) {
      if (location === "/collection:case_goods") {
        getCaseGoods();
      }
    }
  }, [location]);

  const next = async () => {
    setLoading(true);
    console.log(loading);
    try {
      let q = query(collection(db, "products"), startAfter(lastAll), limit(10));

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setAll((all: any) => [...all, doc.data()]);
      });

      setLastAll(querySnapshot.docs[querySnapshot.docs.length - 1]);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllProducts = async () => {
    setLoading(true);
    try {
      const q = query(collection(db, "products"), limit(10));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) =>
        setAll((all: any) => [...all, doc.data()] as any)
      );

      // Get the last visible document
      setLastAll(querySnapshot.docs[querySnapshot.docs.length - 1]);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const getCaseGoods = async () => {};

  return { all, caseGoods, next, hasMore, lastAll, loading };
};
export default useFirebasePagination;
