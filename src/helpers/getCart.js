import axios from "axios";
export default async function getCart(setState) {
    axios.get("http://localhost:3000/cart", {
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`
        }
    }).then(Response => Response.data).then(async (data) => setState(await data))

}