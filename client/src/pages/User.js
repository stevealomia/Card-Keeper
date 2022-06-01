import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import EditProfile from "../Components/EditProfile"

function User({ userDetails, setCurrentUser }) {

    const [showEditForm, setShowEditForm] = useState(false)
    const history = useHistory()

    const { id, name, age, email, credit_score } = userDetails

    const deleteUser = () => {
        fetch(`/users/${id}`, { method: 'DELETE' })
            .then(data => {
                setCurrentUser(null)
                history.push("/")})
    }


    const toggleEditForm = () => {
        setShowEditForm(!showEditForm)
    }

    return (
        <>
            <div>
                <button onClick={toggleEditForm}>Click to Update your Profile!</button>
                <h3>
                    Age: {age}
                </h3>
                <h3>
                    Credit Score: {credit_score}
                </h3>
                <h3>
                    Email: {email}
                </h3>

                <button onClick={deleteUser}>Delete My Account</button>

                {showEditForm ? <EditProfile setCurrentUser={setCurrentUser} userDetails={userDetails} /> : null}
            </div>
        </>
    )
}
export default User