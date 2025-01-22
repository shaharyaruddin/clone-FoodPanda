'use client'
import React from "react";
import { Provider } from "react-redux";
import { persistor, store } from "./store";
import { PersistGate } from "redux-persist/integration/react";

function Providerredux({ children }: any) {
  return <Provider store={store}>
      <PersistGate persistor={persistor}>
        {children}
      </PersistGate>
  
  
  </Provider>;
}

export default Providerredux;
