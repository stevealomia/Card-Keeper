import React, { useState } from 'react'
import Error from '../styles/Error'
function Login({ setCurrentUser }) {
    const [error, setError] = useState()
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const { email, password } = formData

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

    const loginUser = (e) => {
        e.preventDefault()
        fetch("/login", configObj)
            .then(r => {
                if (r.ok) {
                    r.json().then(user => {
                        setCurrentUser(user)
                    })
                } else {
                    // Console.log errors
                    r.json().then(err => {
                        setError(err.error)
                    })
                }
            })
    }

    const renderError = <Error key={error}>{error}</Error>

    return (
        <div>
            <h1>Login!</h1>
            <form
                className='login__form' onSubmit={loginUser}>
                Email:
                <input onChange={handleChange} value={email} name="email" type="email" />
                <br />
                Password:
                <input onChange={handleChange} value={password} name="password" type="password" />
                <br />
                <input type="submit" />
                {error ? renderError : null}
            </form>
        </div>
    )
}

export default Login