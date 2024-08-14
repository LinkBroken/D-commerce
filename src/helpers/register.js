
export const register = function register(e,setSignUp){
    e?.preventDefault();
    const name = e.currentTarget.name.value;
    const email = e.currentTarget.email.value;
    const password = e.currentTarget.password.value;

    const user = {
        name: name,
        email: email,
        password: password
    }
    fetch("http://localhost:3000/auth/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
    .then(res => res.text())
    .then(data => setSignUp(JSON.parse(data).message))
    .catch(err => err)
}

export default register