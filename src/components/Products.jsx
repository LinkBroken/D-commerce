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
    },
    ref
  ) => {
    // const [value, setValue] = useState("")
    return (
      <div className={className}>
        <h1>${price}</h1>
        <p className={itemClass}>{title}</p>
        <img className={imageClass} src={image} alt={title} />
        <section className="flex justify-evenly">
          <input
            ref={ref}
            className=" bg-slate-200 w-1/3 text-black "
            type="number"
            name="items"
            id=""
            // value={value}
            // onChange={()=> setValue()}
          />
        </section>
        <button className={buttonClass} onClick={buttonClick}>
          Add to Cart
        </button>
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
};

export default Products;
