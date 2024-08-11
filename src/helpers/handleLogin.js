import { json } from "react-router-dom";

export default function handleLogin(e){
    e?.preventDefault();
    const email = e.currentTarget.email.value;
    const password = e.currentTarget.password.value;
    const user = {
        email: email,
        password: password
    }
    fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
    .then(res => res.text())
    .then(data => JSON.parse(data)["access_token"]? sessionStorage.setItem("token",JSON.parse(data)["access_token"]):null)
    .catch(err => console.log(err))
}