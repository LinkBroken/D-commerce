
function Logout() {
    return (
        <button onClick={()=> sessionStorage.clear()

        }>Logout</button>
    )
}

export default Logout
