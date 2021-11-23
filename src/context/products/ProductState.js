import React, { useReducer } from "react";
import ProductContext from "./productContext";
import productReducer from "./productReducer";
import {
  GET_PRODUCTS,
  FETCH_ERROR,
  SET_PRODUCT,
  SET_LOADING,
  PRODUCT_ID_DOES_NOT_EXIST_ERROR,
} from "../types";
import { db } from "../../firebase";
import {
  collection,
  query,
  where,
  getDocs,
  getDoc,
  doc,
} from "firebase/firestore";

export default function ProductState(props) {
  const initialState = {
    products: null,
    product: null,
    error: null,
    id_error: null,
    loading: null,
  };

  const [state, dispatch] = useReducer(productReducer, initialState);

  const getProductData = async (params, setMobileFiltersOpen) => {
    setLoading(true);
    let category = params.category.replace(":", "");
    let data = [];
    if (category === "all") {
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
        querySnapshot.forEach((doc) => {
          data.push({ ...doc.data(), id: doc.id });
        });
        dispatch({ type: GET_PRODUCTS, payload: data });
      } catch (error) {
        console.log(error);
        dispatch({ type: FETCH_ERROR, payload: error });
      }
      setTimeout(() => {
        setLoading(false);
      }, 2200);
      return;
    }

    if (category) {
      category = category.charAt(0).toUpperCase() + category.slice(1);
      console.log(category);
      if (category === "Case-goods") {
        category = category.replace("-", "");
        category = category.replace("g", "G");
      }
      try {
        const q = query(
          collection(db, "products"),
          where("category", "==", category)
        );
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          data.push({ ...doc.data(), id: doc.id });
        });
        dispatch({ type: GET_PRODUCTS, payload: data });
        setTimeout(() => {
          setLoading(false);
        }, 2000);
        setMobileFiltersOpen(false);
      } catch (err) {
        dispatch({ type: FETCH_ERROR, payload: err });
      }
      setTimeout(() => {
        setLoading(false);
      }, 2200);
    }
  };

  const setProduct = async (singleProductObject) => {
    setLoading(true);
    try {
      dispatch({ type: SET_PRODUCT, payload: singleProductObject });
      setTimeout(() => {
        setLoading(false);
      }, 2200);
    } catch (err) {
      dispatch({ type: FETCH_ERROR, payload: err });
    }
  };

  const getProduct = async (id) => {
    setLoading(true);
    try {
      const docRef = doc(db, "products", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log(docSnap);
        dispatch({ type: SET_PRODUCT, payload: docSnap.data() });
      } else {
        // doc.data() will be undefined in this case
        dispatch({ type: PRODUCT_ID_DOES_NOT_EXIST_ERROR, payload: true });
      }
    } catch (err) {
      dispatch({ type: FETCH_ERROR, payload: err });
    }
    setTimeout(() => {
      setLoading(false);
    }, 2200);
  };

  const getCategoryData = async (category, setMobileFiltersOpen) => {
    // setLoading(true);
    console.log("fired");
    //Uppercase the first letter
    category = category.charAt(0).toUpperCase() + category.slice(1);
    if (category === "Case-goods") {
      category = category.replace("-", "");
      category = category.replace("g", "G");
    }
    let data = [];

    try {
      const q = query(
        collection(db, "products"),
        where("category", "==", category)
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id });
      });
      dispatch({ type: GET_PRODUCTS, payload: data });
      setTimeout(() => {
        setLoading(false);
      }, 2000);
      setMobileFiltersOpen(false);
    } catch (err) {
      dispatch({ type: FETCH_ERROR, payload: err });
    }
    setTimeout(() => {
      setLoading(false);
    }, 2200);
  };

  const setLoading = (bool) => {
    dispatch({ type: SET_LOADING, payload: bool });
  };

  return (
    <ProductContext.Provider
      value={{
        products: state.products,
        getProductData: getProductData,
        product: state.product,
        setProduct,
        getCategoryData,
        error: state.error,
        id_error: state.id_error,
        loading: state.loading,
        setLoading,
        getProduct,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
}
