import PropTypes from "prop-types";
import { useRef, useContext } from "react";
import { Items } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
const SearchBar = function SearchBar({
  className,
  buttonClass,
  inputClass,
  type,
  children,
  placeholder,
}) {
  const inputRef = useRef();
  const { setSearch } = useContext(Items);
  const navigate = useNavigate();

  return (
    <div className={className}>
      <input
        className={inputClass}
        ref={inputRef}
        type={type}
        placeholder={placeholder}
      />
      <button
        onClick={() => {
          inputRef.current && setSearch(inputRef.current.value);
          console.log(inputRef.current.value);
          navigate("/results");
        }}
        className={buttonClass}
      >
        Search
      </button>
      {children}
    </div>
  );
};

SearchBar.propTypes = {
  className: PropTypes.string,
  buttonClass: PropTypes.string,
  inputClass: PropTypes.string,
  type: PropTypes.string,
  buttonClick: PropTypes.func,
  children: PropTypes.node,
  placeholder: PropTypes.string,
};

export default SearchBar;
