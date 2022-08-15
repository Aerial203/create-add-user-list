import React from "react"
import UserList from "./Components/UserList/UserList"
import NewUser from "./Components/UserInput/NewUser"
import "./App.css"

const userList = [
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
]

function App() {
  return (
    <div>
      <NewUser />
      <UserList allUsers={userList} />
    </div>
  )
}

export default App
