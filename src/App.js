import React from "react"
import UserList from "./Components/UserList/UserList"
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
    name: "Laxman",
    age: 16,
  },
  {
    id: 4,
    name: "Shiva",
    age: 32,
  },
]

function App() {
  return (
    <div>
      <UserList allUsers={userList} />
    </div>
  )
}

export default App
