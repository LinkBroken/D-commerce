import axios from "axios"
export const removeProduct = async (productName) => {
    axios.delete("http://localhost:3000/cart",  {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            name: productName
        }
        
    }).then((res) => {
        return res.data
    }).catch((err) => {
        return err
    })
}

export default removeProduct