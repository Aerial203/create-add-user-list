import React, { useState } from "react"
import AddUser from "./components/Users/AddUser"
import UserList from "./components/Users/UserList"

function App() {
  const [usersList, setUsersList] = useState([])
  const addUserHandler = (uName, uAge) => {
    setUsersList((prevList) => [
      ...prevList,
      { name: uName, age: uAge, id: new Date().getTime().toString() },
    ])
  }
  return (
    <React.Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={usersList} />
    </React.Fragment>
  )
}

export default App
