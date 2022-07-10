import React, { createContext, useReducer, useState } from "react";
import storeApi from "../api/Api";
import { cartReducer, productReducer } from "../reducers/Reducer";

export const AppContext = createContext(null);

export default function Context({ children }) {
  const [product, setProduct] = useState([]);
  const [total, setTotal] = useState(0);
  const getProduct = async () => {
    const { data } = await storeApi.get("/");
    return data;
  };
  const [state, dispatch] = useReducer(cartReducer, {
    cart: [],
  });
  const [sortType, sortOrder] = useReducer(productReducer, {
    byDesc: false,
    byAsc: false,
    sort: "",
    search: ""
  });
  return (
    <div>
      <AppContext.Provider
        value={{
          setProduct,
          product,
          getProduct,
          state,
          dispatch,
          total,
          setTotal,
          sortType,
          sortOrder,
        }}
      >
        {children}
      </AppContext.Provider>
    </div>
  );
}
