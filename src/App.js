import React, { useState } from "react"
import UserList from "./Components/UserList/UserList"
import NewUser from "./Components/UserInput/NewUser"
import "./App.css"

function App() {
  const [userList, setUserList] = useState([
    {
      id: 1,
      name: "Radhe",
      age: 16,
    },
    {
      id: 2,
      name: "Krishna",
      age: 18,
    },
  ])

  const handleNewUser = (newUser) => {
    setUserList((prevList) => {
      return [...prevList, newUser]
    })
  }
  const getUserId = (userId) => {
    const newUserList = userList.filter((list) => list.id !== userId)
    setUserList((prevList) => [...newUserList])
  }

  let content = <p>User List is empty may be add one.</p>

  if (userList.length) {
    content = <UserList allUsers={userList} onGetId={getUserId} />
  }

  return (
    <div>
      <NewUser onGetNewUser={handleNewUser} />
      {content}
    </div>
  )
}

export default App
