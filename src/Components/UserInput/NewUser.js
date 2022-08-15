import React from "react"
import UserForm from "./UserForm"
import style from "./NewUser.module.css"

const NewUser = () => {
  return (
    <div className={style["new-user"]}>
      <UserForm />
    </div>
  )
}

export default NewUser
