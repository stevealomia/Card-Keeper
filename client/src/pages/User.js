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
                <h1 style={{fontSize: 'xxx-large'}}>your deets</h1>
                {/* <button onClick={redirectToEditForm}>update your info</button> */}
                <h3>Name: {currentUser && currentUser.name}</h3>
                <h3>Age: {currentUser && currentUser.age}</h3>
                <h3>Credit Score: {currentUser && currentUser.credit_score}</h3>
                <h3>Email: {currentUser && currentUser.email}</h3>
                <button onClick={redirectToEditForm}>update your info</button><button onClick={deleteUser}>delete my account :(</button>
            </div>
        </>
    )
}
export default User