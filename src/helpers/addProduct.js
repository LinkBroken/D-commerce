import axios from "axios"
export const addProduct = async (...args)=>{
    const data = axios.post("http://localhost:3000/products",...args,{
        
        headers:{
            "Content-Type":"application/json",
            Authorization:`Bearer ${sessionStorage.getItem("token")}`
        }
        
    }).then((res)=>{
        return res.data
    }).catch((err)=>{
        return err
    })
    return data
}

export default addProduct