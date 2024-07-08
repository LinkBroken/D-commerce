import { createContext, useEffect, useState } from "react";
import propTypes from "prop-types"
// eslint-disable-next-line react-refresh/only-export-components
export const store = createContext({});

export default function StoreProvider({ children }) {
  const [storeData, setStoreData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((Response) => Response.json())
      .then(async (data) => setStoreData(await data));
  }, []);
  return <store.Provider value={{ storeData }}>{children}</store.Provider>;
}

StoreProvider.propTypes = {
    children: propTypes.node.isRequired
}