import { forwardRef } from "react";
import PropTypes from "prop-types";

const SearchBar = forwardRef(function SearchBar(
  { className, buttonClass, inputClass, type, buttonClick,children,placeholder},
  ref
) {
  return (
    <div className={className}>
      <input className={inputClass} ref={ref} type={type} placeholder={placeholder} />
      <button onClick={buttonClick} className={buttonClass}>
        Search
      </button>
      {children}
    </div>
  );
});

SearchBar.propTypes = {
  className: PropTypes.string,
  buttonClass: PropTypes.string,
  inputClass: PropTypes.string,
  type: PropTypes.string,
  buttonClick: PropTypes.func,
  children: PropTypes.node,
  placeholder: PropTypes.string
};

export default SearchBar;
