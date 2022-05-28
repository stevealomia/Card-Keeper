import React, { useState } from 'react'

function Login({ setCurrentUser }) {
    const [errors, setErrors] = useState()
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
                    r.json().then(data => {
                        setCurrentUser(data)
                    })
                } else {
                    // Console.log errors
                    r.json().then(errors => {
                        console.log(errors)
                        setErrors(errors)
                    })
                }
            })
    }

    // const displayErrors = () => {
    //     <p>{errors}</p>
    // }

    return (
        <>
            <h1>Login!</h1>
            <form onSubmit={loginUser}>
                Email:
                <input onChange={handleChange} value={email} name="email" type="email" />
                Password:
                <input onChange={handleChange} value={password} name="password" type="password" />
                <input type="submit" />
                {/* {errors ? displayErrors() : null} */}
            </form>
        </>
    )
}

export default Login