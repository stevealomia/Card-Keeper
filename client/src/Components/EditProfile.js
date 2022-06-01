import React, { useState } from "react"
import { useLocation, useHistory } from "react-router-dom"
import Input from "../styles/Input"
import Error from "../styles/Error"

function EditProfile({ setCurrentUser }) {
  let locate = useLocation()
  const currentUser = locate.state

  const [errors, setErrors] = useState([])
  const [formData, setFormData] = useState({
    name: currentUser.name,
    age: currentUser.age,
    credit_score: currentUser.credit_score,
    email: currentUser.email
  })

  const history = useHistory()

  const handleInput = (e) => {
    console.log(e.target.name, " : ", e.target.value);
    const name = e.target.name
    let value = e.target.value

    setFormData({
      ...formData,
      [name]: value
    })
  };

  const updateUser = (e) => {
    e.preventDefault()
    const configObj = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
    }

    fetch(`/users/${currentUser.id}`, configObj)
      .then(r => {
        if (r.ok) {
          r.json().then(data => {
            setCurrentUser(data)
            setErrors([])
            history.push('/profile')
          })
        } else {
          r.json().then(err => setErrors(err.errors))
        }
      })
  }

  const renderErrors = errors.map(e => <Error key={e}>{e}</Error>)

  return (
    <>
      {renderErrors}
      <form onSubmit={updateUser}>
        Name
        <Input
          name="name"
          type="text"
          value={formData.name}
          placeholder={"Your name"}
          handleInput={handleInput}
        />
        <br />
        Credit Score
        <Input
          name="credit_score"
          type="credit_score"
          value={formData.credit_score}
          placeholder={"Your credit_score"}
          handleInput={handleInput}
        />
        <br />
        Age
        <Input
          name="age"
          type="text"
          value={formData.age}
          placeholder={"Your age"}
          handleInput={handleInput}
        />
        <br />
        Email
        <Input
          name="email"
          type="email"
          value={formData.email}
          placeholder={"Your email"}
          handleInput={handleInput}
        />
        <br />
        <Input type="submit" value="Update" />
      </form>
    </>
  )
}

export default EditProfile