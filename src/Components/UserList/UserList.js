import React from "react"

const UserList = (props) => {
  return (
    <div>
      <div>{props.allUser[0].name}</div>
      <div>{props.allUser[0].age}</div>
    </div>
  )
}

export default UserList
