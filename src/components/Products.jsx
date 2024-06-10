import PropTypes from "prop-types";

function Products({
  className,
  image,
  title,
  price,
  imageClass,
  buttonClass,
  buttonClick,
}) {
  return (
    <div className={className}>
      <h1>${price}</h1>
      <p>{title}</p>
      <img className={imageClass} src={image} alt={title} />
      <button className={buttonClass} onClick={buttonClick}>
        Add to Cart
      </button>
    </div>
  );
}

// Define prop types
Products.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  imageClass: PropTypes.string,
  buttonClass: PropTypes.string,
  buttonClick: PropTypes.func.isRequired,
};

export default Products;
