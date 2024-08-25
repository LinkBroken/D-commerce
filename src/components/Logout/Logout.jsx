import PropTypes from "prop-types";
function Logout({onClick}) {
    
    return (
        <button onClick={onClick}>Logout</button>
    )
}

Logout.propTypes = {
    onClick: PropTypes.func.isRequired
}
export default Logout
