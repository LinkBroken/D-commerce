import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDropbox as icon } from "@fortawesome/free-brands-svg-icons";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Logout from "../Logout/Logout";
// import { useEffect } from "react";

function Nav({ children, ...props }) {
  const {login,setLogin} = useContext(AuthContext)

  return (
    <div className=" text-white bg-cyan-950 flex justify-evenly w-full  bg">
      {children}
      <div {...props}>
        <Link to="/">Home</Link>
        <Link to="/Main">Products</Link>
        {login?<Link to="/login">login</Link>:<Logout onClick={()=>
          {
            setLogin(!login)
            sessionStorage.removeItem("token")
        }}/>}
        {login&&<Link to="/register">Register</Link>}
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
