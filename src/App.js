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

  return (
    <div>
      <NewUser onGetNewUser={handleNewUser} />
      <UserList allUsers={userList} onGetId={getUserId} />
    </div>
  )
}

export default App
