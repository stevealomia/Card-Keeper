import React, {useEffect} from "react"
import { useHistory } from "react-router-dom"
import styles from "./../styles/styles.js"


function User({ currentUser, setCurrentUser }) {
    console.log(currentUser)

    const history = useHistory()

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
            <div style={styles.editProfile}>
                <button onClick={redirectToEditForm}>update your info</button>
                <h3>name: {currentUser && currentUser.name}</h3>
                <h3>age: {currentUser && currentUser.age}</h3>
                <h3>credit score: {currentUser && currentUser.credit_score}</h3>
                <h3>email: {currentUser && currentUser.email}</h3>
                <button onClick={deleteUser}>delete my account :(</button>
            </div>
        </>
    )
}
export default User