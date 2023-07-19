import { quotesAPI } from "@/features/quotes/quotesAPI";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

const store = configureStore({
  reducer: {
    [quotesAPI.reducerPath]: quotesAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(quotesAPI.middleware),
});

setupListeners(store.dispatch);

export default store;
