export default function handleLogin(e,setAuth){
    e?.preventDefault();
    const username = e.currentTarget.username.value;
    const password = e.currentTarget.password.value;
    const user = {
        username: username,
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
    .then(data => setAuth(data))
    .catch(err => console.log(err))
}