import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
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

    const goBack = () => {
        history.push("/")
    }

    const createUser = (e) => {
        e.preventDefault()

        const configObj = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }, body: JSON.stringify(formData)
        }

        fetch("/signup", configObj)
            .then(r => {
                if (r.ok) {
                    r.json().then(user => {
                        setCurrentUser(user)
                        history.push("/", user)
                    })
                } else {
                    r.json().then(err => {
                        console.log(err.errors)
                        setErrors(err.errors)
                    })
                }
            })
    }

    const renderErrors = errors.map(e => <Error key={e}>{e}</Error>)

    return (
        <div className='signup__container'>
        <h1> Sign Up</h1>
            <form className='signup' onSubmit={createUser}>
                Name:
                <input onChange={handleChange} value={name} name="name" type="text" />
                < br />
                Age:
                <input onChange={handleChange} value={age} name="age" type="number" />
                < br />
                Credit Score:
                <input onChange={handleChange} value={credit_score} name="credit_score" type="number" />
                < br />
                Email:
                <input onChange={handleChange} value={email} name="email" type="email" />
                < br />
                Password:
                <input onChange={handleChange} value={password} name="password" type="password" />
                < br />
                <input type="submit" />
                {errors.length > 0 ? renderErrors : null}
                <button onClick={goBack}>Go Back</button>
            </form>
        </div>
    )
}

export default Signup