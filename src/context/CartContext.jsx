import PropTypes from "prop-types";
import { createContext, useEffect, useReducer, useState } from "react";

export const Items = createContext({});

function itemsReducer(state, action) {
  // const items =

  switch (action.type) {
    case "ADD_TO_CART":
      // console.log(state.items.map(item=> new Set(item)))
      return { ...state, items: [action.payload, ...state.items] };
    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
}

function ItemsContextProvider({ children }) {
  // const [cartCount, setCartCount] = useState(0);

  const initialState = {
    items: [],
  };
  const [state, dispatch] = useReducer(itemsReducer, initialState);
  const [modal, setModal] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    modal
      ? setTimeout(() => {
          setModal(false);
        }, 4000)
      : null;
  }, [modal]);
  const addItem = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
    // setCartCount((prev) => prev + 1);
  };
  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
    // setCartCount((prev) => prev - 1);
  };

  return (
    <Items.Provider
      value={{
        state,
        addItem,
        removeItem,
        setModal,
        modal,
        search,
        setSearch,
      }}
    >
      {children}
    </Items.Provider>
  );
}

ItemsContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ItemsContextProvider;
