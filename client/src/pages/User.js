import React, {useEffect} from "react"
import { useHistory } from "react-router-dom"


function User({ currentUser, setCurrentUser }) {

    // const userDetails = window.localStorage.getItem("logged-in-user")
    // setCurrentUser(JSON.parse(userDetails))

    // console.log(userDetails)
    console.log(currentUser)

    // useEffect (()=> {
    //     const userDetails = window.localStorage.getItem("logged-in-user")
    //     setCurrentUser(JSON.parse(userDetails))
    //     fetch("/auth")
    //     .then(r => r.json())
    //     .then(user => setCurrentUser(user))
    // }, [])
    // console.log(userDetails)
    const history = useHistory()

    // const { id, name, age, email, credit_score } = currentUser

    const deleteUser = () => {
        fetch(`/users/${currentUser.id}`, { method: 'DELETE' })
            .then(data => {
                setCurrentUser(null)
                history.push("/")
            })
    }

    const redirectToEditForm = () => {
        history.push("/editprofile", currentUser)
    }

    return (
        <>
            <div>
                <button onClick={redirectToEditForm}>Click to Update your Profile!</button>
                <h3>Name: {currentUser && currentUser.name}</h3>
                <h3>Age: {currentUser && currentUser.age}</h3>
                <h3>Credit Score: {currentUser && currentUser.credit_score}</h3>
                <h3>Email: {currentUser && currentUser.email}</h3>
                <button onClick={deleteUser}>Delete My Account</button>
            </div>
        </>
    )
}
export default User