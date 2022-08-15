import React from "react"
import List from "./List"
import Card from "../UI/Card"
import style from "./UserList.module.css"

const UserList = (props) => {
  return (
    <Card className={style.list}>
      {props.allUsers.map((user) => {
        return <List key={user.id} name={user.name} age={user.age} />
      })}
    </Card>
  )
}

export default UserList
