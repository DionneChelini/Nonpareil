import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

// Define a type for the slice state
interface ProductState {
  singleProduct: any;
  productDataAll: any;
  tableData: any;
  casegoodData: any;
  seatingData: any;
  mirrorsData: any;
  officeData: any;
  lightingData: any;
  bedData: any;
}

// Define the initial state using that type
const initialState: ProductState = {
  singleProduct: null,
  productDataAll: [],
  tableData: [],
  casegoodData: [],
  seatingData: [],
  mirrorsData: [],
  officeData: [],
  lightingData: [],
  bedData: [],
};

export const productSlice = createSlice({
  name: "products",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`

    setSingleProduct: (
      state,
      action: PayloadAction<ProductState["singleProduct"]>
    ) => {
      state.singleProduct = action.payload;
    },
    setProductDataAll: (
      state,
      action: PayloadAction<ProductState["productDataAll"]>
    ) => {
      state.productDataAll = [...state.productDataAll, action.payload];
    },

    setTableData: (state, action: PayloadAction<ProductState["tableData"]>) => {
      state.tableData = [...state.tableData, action.payload];
    },
    setCaseGoodData: (
      state,
      action: PayloadAction<ProductState["casegoodData"]>
    ) => {
      state.casegoodData = [...state.casegoodData, action.payload];
    },
    setSeatingData: (
      state,
      action: PayloadAction<ProductState["seatingData"]>
    ) => {
      state.seatingData = [...state.seatingData, action.payload];
    },
    setMirrorData: (
      state,
      action: PayloadAction<ProductState["mirrorsData"]>
    ) => {
      state.mirrorsData = [...state.mirrorsData, action.payload];
    },
    setOfficeData: (
      state,
      action: PayloadAction<ProductState["officeData"]>
    ) => {
      state.officeData = [...state.officeData, action.payload];
    },
    setLightingData: (
      state,
      action: PayloadAction<ProductState["lightingData"]>
    ) => {
      state.lightingData = [...state.lightingData, action.payload];
    },
    setBedData: (state, action: PayloadAction<ProductState["bedData"]>) => {
      state.bedData = [...state.bedData, action.payload];
    },
  },
});

export const {
  setProductDataAll,
  setCaseGoodData,
  setLightingData,
  setMirrorData,
  setOfficeData,
  setSeatingData,
  setTableData,
  setBedData,
  setSingleProduct,
} = productSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectProduct = (state: RootState) =>
  state.products.productDataAll;
export const selectTable = (state: RootState) => state.products.tableData;
export const selectCaseGood = (state: RootState) => state.products.casegoodData;
export const selectSeating = (state: RootState) => state.products.seatingData;
export const selectMirrors = (state: RootState) => state.products.mirrorsData;
export const selectOffice = (state: RootState) => state.products.officeData;
export const selectLighting = (state: RootState) => state.products.lightingData;
export const selectBed = (state: RootState) => state.products.bedData;
export const selectSingleProduct = (state: RootState) =>
  state.products.singleProduct;

export default productSlice.reducer;
