import React from "react"
import UserForm from "./UserForm"
import style from "./NewUser.module.css"

const NewUser = (props) => {
  const getNewUser = (newUser) => {
    props.onGetNewUser(newUser)
  }
  return (
    <div className={style["new-user"]}>
      <UserForm onGetUser={getNewUser} />
    </div>
  )
}

export default NewUser
