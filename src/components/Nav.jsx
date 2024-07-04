import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Nav({children, ...props}) {
  return (
    <div className=" text-white bg-cyan-950 flex justify-evenly w-full  bg">
      {children}
      <div {...props} >
      <Link to="/">Home</Link>
      <Link to="/Main">Main</Link>
      <Link to="/Cart">Cart</Link>
      <Link to="/About">{cartCount}</Link>
      </div>
    </div>
  );
}

Nav.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Nav;
