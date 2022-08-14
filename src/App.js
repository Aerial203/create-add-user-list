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
]

function App() {
  return (
    <div>
      <UserList allUser={userList} />
    </div>
  )
}

export default App
