import React, { useState } from "react"
import OverLay from "../OverLay/OverLay"
import style from "./UserForm.module.css"

const UserForm = (props) => {
  const [input, setInput] = useState({
    name: "",
    age: "",
  })
  const handleName = (e) => {
    setInput((prevInput) => {
      return { ...prevInput, name: e.target.value }
    })
  }

  const handleAge = (e) => {
    setInput((prevInput) => {
      return { ...prevInput, age: e.target.value }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!input.name || !input.age) {
      const checkUserInput = {
        isNameEmpty: input.name === "",
        isAgeEmpty: input.age === "",
      }
      console.log(checkUserInput)
      return
    }

    const newUser = { ...input, id: new Date().getTime().toString() }
    props.onGetUser(newUser)
    setInput({
      name: "",
      age: "",
    })
  }

  return (
    <div className={style.container}>
      <OverLay text="Enter name and age" />
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className={style.name}>Name</label>
          <input type="text" value={input.name} onChange={handleName} />
          <label className={style.age}>Age (Years)</label>
          <input type="text" value={input.age} onChange={handleAge} />
        </div>
        <div>
          <button type="submit" className={style.button}>
            Add User
          </button>
        </div>
      </form>
    </div>
  )
}

export default UserForm
