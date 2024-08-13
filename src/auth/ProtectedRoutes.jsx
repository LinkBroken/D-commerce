import { Navigate, } from 'react-router-dom'
// import { useContext } from 'react'
import { token } from '../helpers/token'
 const PrivateRoutes = () => {
   
    return (
        token? null : <Navigate to={'/login'}/>
    )
  }

export default PrivateRoutes