import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

// Define a type for the slice state
interface ErrorState {
  error: boolean;
}

// Define the initial state using that type
const initialState: ErrorState = {
  error: false,
};

export const errorSlice = createSlice({
  name: "error",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setError: (state, action: PayloadAction<boolean>) => {
      state.error = action.payload;
    },
  },
});

export const { setError } = errorSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectError = (state: RootState) => state.error.error;

export default errorSlice.reducer;
