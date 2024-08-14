import { register } from "../../helpers/register"
import { useContext, useState } from "react";
import { Items } from "../../context/CartContext";
import RegModal from "../RegisterModal/RegisterModal";
function Register() {
    const { setSignUp } = useContext(Items)
    const [text, setText] = useState("")
    return (
        <>
            <RegModal text={text} />
            <div className=" flex flex-col p-24 items-center place-content-center min-h-screen">
                <form onSubmit={(e) => {
                    
                    register(e, setText)
                }} className=" flex flex-col items-center p-10 gap-7 bg-slate-600 rounded-xl w-fit text-white">
                    <label className="self-start" htmlFor="name"> Name</label>
                    <input className=" text-black p-4 border border-solid border-black rounded-md text-center" type="text" name="name" placeholder="Enter User Name" />

                    <label className="self-start" htmlFor="email"> Email</label>
                    <input className=" text-black p-4 border border-solid border-black rounded-md text-center" type="text" name="email" placeholder="Enter Email" />

                    <label className=" self-start" htmlFor="password"> Password</label>
                    <input className="text-black p-4 border border-solid border-black rounded-md text-center" type="password" name="password" placeholder="Password" />

                    <button onClick={() => setSignUp(true)} className="p-4 rounded-md bg-orange-300">Sign Up</button>
                </form>
            </div>
        </>
    )
}

export default Register
