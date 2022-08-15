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
  return (
    <div>
      <NewUser onGetNewUser={handleNewUser} />
      <UserList allUsers={userList} />
    </div>
  )
}

export default App
