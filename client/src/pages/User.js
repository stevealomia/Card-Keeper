import React, {useState} from "react" 
import EditProfile from "../Components/EditProfile"

function User({ userDetails, setCurrentUser }) {
    const [showEditForm, setShowEditForm] = useState(false)
    const { name, age, email, credit_score } = userDetails



    const toggleEditForm = () => {
        setShowEditForm(!showEditForm)
    }

    return (
        <>
            <div>
                <h1>
                    Welcome Back, {name}!
                </h1>
                <h3>
                    Age: {age}
                </h3>
                <h3>
                    Credit Score: {credit_score}
                </h3>
                <h3>
                    Email: {email}
                </h3>

                <button onClick={toggleEditForm}>Click to Update your Profile!</button>
                {showEditForm ? <EditProfile setCurrentUser={setCurrentUser} userDetails={userDetails} /> : null}
            </div>
        </>
    )
}
export default User