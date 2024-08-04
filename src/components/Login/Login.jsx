import handleLogin from "../../helpers/handleLogin"
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
// import { Navigate } from "react-router-dom";
function Login() {

    const {isAuth,setIsAuth} = useContext(AuthContext)
    console.log(isAuth)
    // if(isAuth == "true"){
    //     return <Navigate to="/" />
    // }
    return (
        <div className=" flex flex-col p-24 items-center min-h-96">
            <form   onSubmit={(e)=>handleLogin(e,setIsAuth)}   className="flex flex-col items-center p-10 gap-7 bg-slate-600 rounded-xl w-fit text-white">

                <label className="self-start" htmlFor="username"> User Name</label>
                <input className=" text-black p-4 border border-solid border-black rounded-md text-center" type="text" name="username" placeholder="Enter User Name" required />

                <label className=" self-start" htmlFor="password"> Password</label>
                <input className="text-black p-4 border border-solid border-black rounded-md text-center" type="password" name="password" placeholder="Password" required />

                <button className="p-4 rounded-md bg-orange-300">Login</button>
            </form>
        </div>
    )
}

export default Login
