import { createContext, useState } from "react";
import PropTypes from "prop-types";
export const AuthContext = createContext({});

export default function AuthContextProvider({ children }) {
    const [isAuth, setIsAuth] = useState(false);
    return <AuthContext.Provider value={{ isAuth, setIsAuth }}>{children}</AuthContext.Provider>;
}


AuthContextProvider.propTypes ={
        children: PropTypes.node.isRequired,
      
}
