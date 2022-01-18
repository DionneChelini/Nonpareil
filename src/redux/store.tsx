import { configureStore } from "@reduxjs/toolkit";

import loaderSlice from "./loaderSlice";
import productSlice from "./productSlice";
import fetchingSlice from "./fetchingSlice";
import errorSlice from "./errorSlice";

export const store = configureStore({
  reducer: {
    loader: loaderSlice,
    products: productSlice,
    fetcher: fetchingSlice,
    error: errorSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
