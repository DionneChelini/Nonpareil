import { db } from "../firebase";
import { useState } from "react";
import { useAppSelector, useAppDispatch } from "./useRedux";
import { setLoading } from "../redux/loaderSlice";
import { setFetching } from "../redux/fetchingSlice";
import { setError } from "../redux/errorSlice";
import {
  setCaseGoodData,
  setProductDataAll,
  setTableData,
  setLightingData,
  setMirrorData,
  setOfficeData,
  setSeatingData,
  setBedData,
  setSingleProduct,
} from "../redux/productSlice";
import {
  collection,
  query,
  getDocs,
  getDoc,
  doc,
  limit,
  where,
} from "firebase/firestore";

export const useFirebaseFirestore = () => {
  const loading = useAppSelector((state) => state.loader.loading);
  const dispatch = useAppDispatch();
  const {
    productDataAll,
    tableData,
    seatingData,
    lightingData,
    officeData,
    casegoodData,
    mirrorsData,
    bedData,
  } = useAppSelector((state) => state.products.productDataAll);
  const [productDataLast, setProductDataLast] = useState<any>([]);
  const [tableDataLast, setTableDataLast] = useState<any>([]);
  const [caseGoodDataLast, setCaseGoodDataLast] = useState<any>([]);
  const [mirrorDataLast, setMirrorDataLast] = useState<any>([]);
  const [lightingDataLast, setLightingDataLast] = useState<any>([]);
  const [officeDataLast, setOfficeDataLast] = useState<any>([]);
  const [seatingDataLast, setSeatingDataLast] = useState<any>([]);
  const [bedDataLast, setBedDataLast] = useState<any>([]);

  async function getSingleProduct(id: string) {
    console.log("Am I gettign in side");
    dispatch(setLoading(true));
    dispatch(setFetching(true));
    dispatch(setError(false));

    try {
      const docRef = doc(db, "products", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        dispatch(setSingleProduct(docSnap.data()));
      } else {
        dispatch(setSingleProduct(null));
      }
      dispatch(setLoading(false));
      dispatch(setFetching(false));
    } catch (err) {
      dispatch(setError(true));
    }
  }

  async function getProductData() {
    dispatch(setLoading(true));
    dispatch(setFetching(true));
    dispatch(setError(false));

    try {
      const q = query(collection(db, "products"), limit(10));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        dispatch(setProductDataAll({ ...doc.data(), id: doc.id }));
      });

      // Get the last visible document

      setProductDataLast(querySnapshot.docs[querySnapshot.docs.length - 1]);

      dispatch(setLoading(false));
      dispatch(setFetching(false));
    } catch (error) {
      dispatch(setError(true));
    }
  }

  async function getCategoryData(param: string) {
    dispatch(setFetching(true));
    dispatch(setLoading(true));
    dispatch(setError(false));

    try {
      const q = query(
        collection(db, "products"),
        where("category", "==", param),
        limit(10)
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) =>
        param === "Tables"
          ? dispatch(setTableData({ ...doc.data(), id: doc.id })) &&
            setTableDataLast(querySnapshot.docs[querySnapshot.docs.length - 1])
          : param === "Seating"
          ? dispatch(setSeatingData({ ...doc.data(), id: doc.id })) &&
            setSeatingDataLast(
              querySnapshot.docs[querySnapshot.docs.length - 1]
            )
          : param === "Lighting"
          ? dispatch(setLightingData({ ...doc.data(), id: doc.id })) &&
            setLightingDataLast(
              querySnapshot.docs[querySnapshot.docs.length - 1]
            )
          : param === "Office"
          ? dispatch(setOfficeData({ ...doc.data(), id: doc.id })) &&
            setOfficeDataLast(querySnapshot.docs[querySnapshot.docs.length - 1])
          : param === "CaseGoods"
          ? dispatch(setCaseGoodData({ ...doc.data(), id: doc.id })) &&
            setCaseGoodDataLast(
              querySnapshot.docs[querySnapshot.docs.length - 1]
            )
          : param === "Mirrors"
          ? dispatch(setMirrorData({ ...doc.data(), id: doc.id })) &&
            setMirrorDataLast(querySnapshot.docs[querySnapshot.docs.length - 1])
          : param === "Beds"
          ? dispatch(setBedData({ ...doc.data(), id: doc.id })) &&
            setBedDataLast(querySnapshot.docs[querySnapshot.docs.length - 1])
          : ""
      );

      dispatch(setFetching(false));
      dispatch(setLoading(false));
      //   setMobileFiltersOpen(false);
    } catch (err) {
      //need to put error into state
      dispatch(setError(true));
    }
  }

  return {
    getProductData,
    getCategoryData,
    getSingleProduct,
    productDataLast,
    tableDataLast,
    caseGoodDataLast,
    mirrorDataLast,
    lightingDataLast,
    officeDataLast,
    seatingDataLast,
    bedDataLast,
    setProductDataLast,
    setTableDataLast,
    setCaseGoodDataLast,
    setMirrorDataLast,
    setLightingDataLast,
    setOfficeDataLast,
    setSeatingDataLast,
    setBedDataLast,
  };
};
