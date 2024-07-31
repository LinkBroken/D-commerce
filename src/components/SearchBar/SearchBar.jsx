import PropTypes from "prop-types";
import { useRef, useContext } from "react";
import { Items } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
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
  const [focus, setFocus] = useState(false);
  const navigate = useNavigate();
  console.log(inputRef.current);
  return (
    <div className={className}>
      <>
      <div className="h-full flex flex-col-reverse items-center">
      {inputRef?.current&&inputRef?.current.value.trim()=="" && focus&& <p className="h-1/4 text-red-600 sans ">Empty Search</p> }
      <input
        className={inputClass}
        ref={inputRef}
        type={type}
        placeholder={placeholder}
        required
      />
      </div>
      
      <button
        onClick={() => {
          inputRef.current && setSearch(inputRef.current.value);
          console.log(inputRef.current.value);
          setFocus(true)
          inputRef.current?.value.trim() != "" ?navigate("/results"): null;
        }}
        className={buttonClass}
      >
        Search
      </button>
      </>
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
