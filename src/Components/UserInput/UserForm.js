import React, { useState } from "react"
import OverLay from "../OverLay/OverLay"
import style from "./UserForm.module.css"

let errorText = ""

const UserForm = (props) => {
  const [input, setInput] = useState({
    name: "",
    age: "",
  })

  const [isValid, setIsValid] = useState({
    isNameEmpty: false,
    isAgeEmpty: false,
    isAgeLess: false,
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
    if (!input.name || !input.age || input.age < 0) {
      if (!input.name && !input.age) {
        errorText = "Please enter a valid name and age (non-empty value)"
      } else if (!input.name) {
        errorText = "Please enter a valid name (non-empty value)"
      } else if (input.age && input.age < 0) {
        errorText = "Please enter a valid age > 0"
      } else if (!input.age) {
        errorText = "Please enter a valid age (non-empty value)"
      }
      setIsValid((prevInp) => {
        return {
          isNameEmpty: input.name === "",
          isAgeEmpty: input.age === "",
          isAgeLess: input.age < 0,
        }
      })
      setInput({
        name: "",
        age: "",
      })
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
      {isValid.isNameEmpty && (
        <OverLay text={errorText} onClickOk={setIsValid} />
      )}
      {isValid.isAgeEmpty && (
        <OverLay text={errorText} onClickOk={setIsValid} />
      )}

      {isValid.isAgeLess && <OverLay text={errorText} onClickOk={setIsValid} />}

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
