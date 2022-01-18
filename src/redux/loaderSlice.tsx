import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

// Define a type for the slice state
interface LoaderState {
  loading: boolean;
}

// Define the initial state using that type
const initialState: LoaderState = {
  loading: false,
};

export const loaderSlice = createSlice({
  name: "loader",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { setLoading } = loaderSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectLoading = (state: RootState) => state.loader.loading;

export default loaderSlice.reducer;
