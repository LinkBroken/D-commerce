import PropTypes from "prop-types";
import { createContext, useReducer } from "react";

export const Items = createContext({});

function itemsReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
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
  const initialState = {
    items: [],
  };
  const [state, dispatch] = useReducer(itemsReducer, initialState);

  const addItem = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };
  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  return (
    <Items.Provider value={{ state, addItem, removeItem }}>
      {children}
    </Items.Provider>
  );
}

ItemsContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ItemsContextProvider;
