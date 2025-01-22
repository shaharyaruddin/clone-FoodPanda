import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import favoritesReducer from "./slices/favouriteSlice";
import addToCartReducer from "./slices/cartSlice";

const rootReducer = combineReducers({
  favorites: favoritesReducer,
  addToCart: addToCartReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["favorites", "addToCart"]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
