import { useState, useEffect, useContext } from "react";
import { db } from "../firebase";
import { useAppSelector, useAppDispatch } from "./useRedux";
import { setLoading } from "../redux/loaderSlice";
import { setError } from "../redux/errorSlice";
import { setFetching } from "../redux/fetchingSlice";
import { useFirebaseFirestore } from "./useFirebaseFirestore";
import {
  setCaseGoodData,
  setProductDataAll,
  setTableData,
  setLightingData,
  setMirrorData,
  setOfficeData,
  setSeatingData,
  setBedData,
} from "../redux/productSlice";
import {
  collection,
  query,
  getDocs,
  limit,
  where,
  startAfter,
} from "firebase/firestore";
// interface productData {
//   productData: {
//     id: string;
//     title: string;
//     description: string;
//     price: string;
//     urls: any[];
//     category: string;
//     subcategory?: string;
//     imageAlt: string;
//     details: [];
//   }[];
// }
const useFirebasePagination = (
  location: string,
  url: { [key: string]: string }
) => {
  const { all, tables, office, mirrors, lighting, seating, caseGoods, beds } =
    url;

  const loading = useAppSelector((state) => state.loader.loading);
  const {
    productDataAll,
    tableData,
    seatingData,
    lightingData,
    officeData,
    casegoodData,
    mirrorsData,
    bedData,
  } = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();
  const {
    getProductData,
    getCategoryData,
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
  } = useFirebaseFirestore();

  useEffect(() => {
    if (productDataAll.length === 0) {
      if (location === all) {
        getProductData();
      }
      if (tableData.length === 0 && location === tables) {
        getCategoryData("Tables");
      }
      if (seatingData.length === 0 && location === seating) {
        getCategoryData("Seating");
      }
      if (lightingData.length === 0 && location === lighting) {
        getCategoryData("Lighting");
      }
      if (officeData.length === 0 && location === office) {
        getCategoryData("Office");
      }
      if (casegoodData.length === 0 && location === caseGoods) {
        getCategoryData("CaseGoods");
      }
      if (mirrorsData.length === 0 && location === mirrors) {
        getCategoryData("Mirrors");
      }
      if (bedData.length === 0 && location === beds) {
        getCategoryData("Beds");
      }
    }
  }, [location]);

  const next = async (params: string) => {
    dispatch(setFetching(true));
    dispatch(setError(false));
    dispatch(setLoading(false));

    if (params === ":all") {
      try {
        let q = query(
          collection(db, "products"),
          startAfter(productDataLast),
          limit(10)
        );
        const querySnapshot = await getDocs(q);
        if (querySnapshot.empty) {
          return;
        }

        querySnapshot.forEach((doc) => {
          dispatch(setProductDataAll({ ...doc.data(), id: doc.id }));
        });
        setProductDataLast(querySnapshot.docs[querySnapshot.docs.length - 1]);

        if (querySnapshot.empty) {
          console.log("finished");
        }
        dispatch(setFetching(false));
      } catch (error) {
        dispatch(setError(true));
      }
    }
    if (params === ":tables") {
      try {
        let q = query(
          collection(db, "products"),
          where("category", "==", "Tables"),
          startAfter(tableDataLast),
          limit(10)
        );
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          dispatch(setTableData({ ...doc.data(), id: doc.id }));
        });

        setTableDataLast(querySnapshot.docs[querySnapshot.docs.length - 1]);

        if (querySnapshot.empty) {
          return;
        }
      } catch (error) {
        dispatch(setError(true));
      }
    }
    if (params === ":seating") {
      try {
        let q = query(
          collection(db, "products"),
          where("category", "==", "Seating"),
          startAfter(seatingDataLast),
          limit(10)
        );
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          dispatch(setSeatingData({ ...doc.data(), id: doc.id }));
        });

        setSeatingDataLast(querySnapshot.docs[querySnapshot.docs.length - 1]);

        if (querySnapshot.empty) {
          return;
        }
        dispatch(setFetching(false));
      } catch (error) {
        dispatch(setError(true));
      }
    }
    if (params === ":lighting") {
      try {
        let q = query(
          collection(db, "products"),
          where("category", "==", "Lighting"),
          startAfter(lightingDataLast),
          limit(10)
        );
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          dispatch(setLightingData({ ...doc.data(), id: doc.id }));
        });

        setLightingDataLast(querySnapshot.docs[querySnapshot.docs.length - 1]);

        if (querySnapshot.empty) {
          return;
        }
        dispatch(setFetching(false));
      } catch (error) {
        dispatch(setError(true));
      }
    }
    if (params === ":caseGoods") {
      try {
        let q = query(
          collection(db, "products"),
          where("category", "==", "caseGoods"),
          startAfter(caseGoodDataLast),
          limit(10)
        );
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          dispatch(setCaseGoodData({ ...doc.data(), id: doc.id }));
        });

        setCaseGoodDataLast(querySnapshot.docs[querySnapshot.docs.length - 1]);

        if (querySnapshot.empty) {
          return;
        }
      } catch (error) {
        dispatch(setError(true));
      }
      dispatch(setFetching(false));
    }
    if (params === ":beds") {
      try {
        let q = query(
          collection(db, "products"),
          where("category", "==", "Beds"),
          startAfter(bedDataLast),
          limit(10)
        );
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          dispatch(setBedData({ ...doc.data(), id: doc.id }));
        });

        setBedDataLast(querySnapshot.docs[querySnapshot.docs.length - 1]);

        if (querySnapshot.empty) {
          return;
        }
      } catch (error) {
        dispatch(setError(true));
      }
      dispatch(setFetching(false));
    }
    if (params === ":tables") {
      try {
        let q = query(
          collection(db, "products"),
          where("category", "==", "Tables"),
          startAfter(tableDataLast),
          limit(10)
        );
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          dispatch(setTableData({ ...doc.data(), id: doc.id }));
        });

        setTableDataLast(querySnapshot.docs[querySnapshot.docs.length - 1]);

        if (querySnapshot.empty) {
          return;
        }
        dispatch(setFetching(false));
      } catch (error) {
        dispatch(setError(true));
      }
    }
    if (params === ":mirrors") {
      try {
        let q = await query(
          collection(db, "products"),
          where("category", "==", "Mirrors"),
          startAfter(mirrorDataLast),
          limit(10)
        );
        const querySnapshot = await getDocs(q);
        if (querySnapshot.empty) {
          return;
        }
        console.log(querySnapshot);

        querySnapshot.forEach((doc: any) => {
          dispatch(setMirrorData({ ...doc.data(), id: doc.id }));
        });

        setMirrorDataLast(querySnapshot.docs[querySnapshot.docs.length - 1]);
        dispatch(setFetching(false));
      } catch (error) {
        dispatch(setError(true));
      }
    }
    if (params === ":office") {
      try {
        let q = query(
          collection(db, "products"),
          where("category", "==", "Office"),
          startAfter(officeDataLast),
          limit(10)
        );
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          dispatch(setOfficeData({ ...doc.data(), id: doc.id }));
        });

        setOfficeDataLast(querySnapshot.docs[querySnapshot.docs.length - 1]);

        if (querySnapshot.empty) {
          return;
        }
        dispatch(setFetching(false));
      } catch (error) {
        dispatch(setError(true));
      }
    }
  };

  return { next, loading };
};
export default useFirebasePagination;
