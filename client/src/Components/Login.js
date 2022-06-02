import React, { useState } from 'react'
import Error from '../styles/Error'
import styles from './../styles/styles.js'
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
            <div style={styles.main}>
                <div style={styles.email}>
                    <form onSubmit={loginUser}>
                        email:
                        <input style={styles.input} onChange={handleChange} value={email} name="email" type="email" />
                        password:
                        <input style={styles.input} onChange={handleChange} value={password} name="password" type="password" />
                        <input style={styles.submit} type="submit" />
                        {error ? renderError : null}
                    </form>
                </div>
            </div>
    )
}

export default Login