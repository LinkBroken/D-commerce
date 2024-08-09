import { Navigate, } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
 const PrivateRoutes = () => {
    const {isAuth} = useContext(AuthContext)
   
    return (
        isAuth == "true" ? "" : <Navigate to={'/login'}/>
    )
  }

export default PrivateRoutes