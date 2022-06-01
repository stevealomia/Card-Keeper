import React, { useState } from 'react'
import {useHistory} from 'react-router-dom'
import Error from "../styles/Error"

function Signup({ setCurrentUser }) {
    const [errors, setErrors] = useState([])
    const [formData, setFormData] = useState({
        name: '',
        age: 0,
        email: '',
        password: '',
        credit_score: 0
    })
    
    const history = useHistory()
    const { name, age, email, password, credit_score } = formData

    const handleChange = (e) => {
        const key = e.target.name

        setFormData({
            ...formData,
            [key]: e.target.value
        })
    }

    const configObj = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }, body: JSON.stringify(formData)
    }

    const goBack = () => {
        history.push("/")
    }

    const createUser = (e) => {
        e.preventDefault()
        fetch("/signup", configObj)
            .then(r => {
                if (r.ok) {
                    r.json().then(data => {
                        setCurrentUser(data)
                        history.push("/")
                    })
                } else {
                    // Console.log errors
                    r.json().then(err => {
                        console.log(err.errors)
                        setErrors(err.errors)
                       
                    })
                }
            })
    }

    const renderErrors = errors.map(e => <Error key={e}>{e}</Error>)

    return (

        <div>
            <h1>Sign Up Below</h1>
            <form onSubmit={createUser}>
                Name:
                <input onChange={handleChange} value={name} name="name" type="text" />
                Age:
                <input onChange={handleChange} value={age} name="age" type="number" />
                Credit Score:
                <input onChange={handleChange} value={credit_score} name="credit_score" type="number" />
                Email:
                <input onChange={handleChange} value={email} name="email" type="email" />
                Password:
                <input onChange={handleChange} value={password} name="password" type="password" />
                <input type="submit" />
                {errors.length > 0 ? renderErrors : null}
            </form>
            <button onClick={goBack}>Go Back</button>
        </div>
    )
}

export default Signup