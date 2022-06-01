import React from "react"
import { useHistory } from "react-router-dom"

function User({ userDetails, setCurrentUser }) {
    // console.log(userDetails)
    const history = useHistory()

    const { id, name, age, email, credit_score } = userDetails

    const deleteUser = () => {
        fetch(`/users/${id}`, { method: 'DELETE' })
            .then(data => {
                setCurrentUser(null)
                history.push("/")
            })
    }

    const redirectToEditForm = () => {
        history.push("/editprofile", userDetails)
    }

    return (
        <>
            <div>
                <button onClick={redirectToEditForm}>Click to Update your Profile!</button>
                <h3>Name: {name}</h3>
                <h3>Age: {age}</h3>
                <h3>Credit Score: {credit_score}</h3>
                <h3>Email: {email}</h3>
                <button onClick={deleteUser}>Delete My Account</button>
            </div>
        </>
    )
}
export default User