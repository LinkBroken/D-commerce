import { AuthContext } from "../../context/AuthContext"
import handleLogin from "../../helpers/handleLogin"
import { useContext } from "react"
function Login() {
    const {setLogin} = useContext(AuthContext)
    return (
        <div className=" flex flex-col p-24 items-center place-content-center min-h-screen">
            <form onSubmit={(e) => 
                {
                handleLogin(e)
                setLogin(false)
                }} className=" flex flex-col items-center p-10 gap-7 bg-slate-600 rounded-xl w-fit text-white">

                <label className="self-start" htmlFor="email"> Email</label>
                <input className=" text-black p-4 border border-solid border-black rounded-md text-center" type="text" name="email" placeholder="Enter User Name" required />

                <label className=" self-start" htmlFor="password"> Password</label>
                <input className="text-black p-4 border border-solid border-black rounded-md text-center" type="password" name="password" placeholder="Password" required />

                <button className="p-4 rounded-md bg-orange-300">Login</button>
            </form>
        </div>
    )
}

export default Login
