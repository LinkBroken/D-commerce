import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";

export const Items = createContext({});

function ItemsContextProvider({ children }) {

  const [modal, setModal] = useState(false);
  const [search, setSearch] = useState("");
  const [empty, setEmpty] = useState(false)
  useEffect(() => {
    modal
      ? setTimeout(() => {
          setModal(false);
        }, 4000)
      : null;
      empty
      ? setTimeout(() => {
          setEmpty(false);
        }, 4000)
      : null;
  }, [modal,empty]);




  return (
    <Items.Provider
      value={{
        setModal,
        modal,
        search,
        setSearch,
        setEmpty,
        empty
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
