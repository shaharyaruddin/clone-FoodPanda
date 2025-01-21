import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./slices/favouriteSlice";
import addToCartReducer from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    addToCart: addToCartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
