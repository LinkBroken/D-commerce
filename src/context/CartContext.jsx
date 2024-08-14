import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";

export const Items = createContext({});

function ItemsContextProvider({ children }) {

  const [modal, setModal] = useState(false);
  const [search, setSearch] = useState("");
  const [empty, setEmpty] = useState(false);
  const [signUp, setSignUp] = useState(false)

  useEffect(() => {
    modal
      ? setTimeout(() => {
          setModal(false);
        }, 1500)
      : null;
      empty
      ? setTimeout(() => {
          setEmpty(false);
        }, 1500)
      : null;
      signUp
      ? setTimeout(() => {
        setSignUp(false);
        }, 1500)
      : null;
  }, [modal,empty,signUp]);




  return (
    <Items.Provider
      value={{
        setModal,
        modal,
        search,
        setSearch,
        setEmpty,
        empty,
        setSignUp,
        signUp
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
