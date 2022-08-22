import React from "react"
import UserForm from "./UserForm"
import style from "./NewUser.module.css"

const NewUser = (props) => {
  const getNewUser = (newUser) => {
    props.onGetNewUser(newUser)
  }
  const getInputUserInfo = (input) => {
    props.onGetInputInfo(input)
  }
  return (
    <div className={style["new-user"]}>
      <UserForm onGetUser={getNewUser} onUserInputInfo={getInputUserInfo} />
    </div>
  )
}

export default NewUser
