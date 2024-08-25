import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
export const AuthContext = createContext({});

export default function AuthContextProvider({ children }) {
    const [login,setLogin] = useState(true)

    let JWT = sessionStorage.getItem("token")
    useEffect(()=>{
        JWT?setLogin(false):setLogin(true)
    },[JWT])
    return <AuthContext.Provider value={{login,setLogin }}>{children}</AuthContext.Provider>;
}


AuthContextProvider.propTypes ={
        children: PropTypes.node.isRequired,

}
