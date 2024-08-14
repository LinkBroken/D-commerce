import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDropbox as icon } from "@fortawesome/free-brands-svg-icons";

function Nav({ children, ...props }) {

  return (
    <div className=" text-white bg-cyan-950 flex justify-evenly w-full  bg">
      {children}
      <div {...props}>
        <Link to="/">Home</Link>
        <Link to="/Main">Products</Link>
        <Link to="/login">login</Link>
        <Link to="/register">Register</Link>
        <Link to="/cart">
          <FontAwesomeIcon icon={icon} />
        </Link>
      </div>
    </div>
  );
}

Nav.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Nav;
