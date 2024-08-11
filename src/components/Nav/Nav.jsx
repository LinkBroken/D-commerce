import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useContext } from "react";
import { Items } from "../../context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDropbox as icon } from "@fortawesome/free-brands-svg-icons";
import { token } from "../../helpers/token";
import Logout from "../Logout/Logout";
function Nav({ children, ...props }) {
  const { state } = useContext(Items);
  return (
    <div className=" text-white bg-cyan-950 flex justify-evenly w-full  bg">
      {children}
      <div {...props}>
        <Link to="/">Home</Link>
        <Link to="/Main">Products</Link>
        {token?<Logout/> :<Link to="/login">login</Link>}
        <Link to="/cart/items">
          <FontAwesomeIcon icon={icon} /> {state.items.length}
        </Link>
      </div>
    </div>
  );
}

Nav.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Nav;
