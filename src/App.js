import React, { useState } from "react"
import UserList from "./Components/UserList/UserList"
import NewUser from "./Components/UserInput/NewUser"
import "./App.css"

function App() {
  const [userList, setUserList] = useState([
    {
      id: 1,
      name: "Ram",
      age: 19,
    },
    {
      id: 2,
      name: "Sita",
      age: 18,
    },
    {
      id: 3,
      name: "Shiva",
      age: 32,
    },
  ])
  const handleNewUser = (newUser) => {
    setUserList((prevList) => {
      return [...prevList, newUser]
    })
  }
  return (
    <div>
      <NewUser onGetNewUser={handleNewUser} />
      <UserList allUsers={userList} />
    </div>
  )
}

export default App
