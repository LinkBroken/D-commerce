import PropTypes from "prop-types";
import { forwardRef } from "react";

const Products = forwardRef(
  (
    {
      className,
      image,
      title,
      price,
      imageClass,
      buttonClass,
      buttonClick,
      itemClass,
      onChange
    },
    ref
  ) => {
    return (
      <div className={className}>
        
        <p className={itemClass}>{title}</p>
        <img className={imageClass} src={image} alt={title} />
        <h1>${price}</h1>
        
        <div className="flex flex-row-reverse items-center justify-evenly w-full p-4">
        <button className={buttonClass} onClick={buttonClick}>
          Add
        </button>
        <section className="flex justify-evenly">
          <input
            ref={ref}
            className=" bg-slate-200 w-3/4 text-black "
            type="number"
            name="items"
            id=""
            onChange={onChange}

          />
        </section>
        
        
        </div>
      </div>
    );
  }
);

// Define prop types
Products.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  imageClass: PropTypes.string,
  buttonClass: PropTypes.string,
  buttonClick: PropTypes.func.isRequired,
  itemClass: PropTypes.string,
  onChange: PropTypes.func,
};

export default Products;
