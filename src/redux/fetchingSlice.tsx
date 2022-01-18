import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

// Define a type for the slice state
interface FetcherState {
  fetching: boolean;
}

// Define the initial state using that type
const initialState: FetcherState = {
  fetching: false,
};

export const fetcherSlice = createSlice({
  name: "fetcher",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setFetching: (state, action: PayloadAction<boolean>) => {
      state.fetching = action.payload;
    },
  },
});

export const { setFetching } = fetcherSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectFetching = (state: RootState) => state.fetcher.fetching;
export default fetcherSlice.reducer;
