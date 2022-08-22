import React, { useState } from "react"
import UserList from "./Components/UserList/UserList"
import NewUser from "./Components/UserInput/NewUser"
import OverLay from "./Components/OverLay/OverLay"
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
  let overlayContent = ""
  const userInputInfo = (input) => {
    const enterNameAndAge =
      "Please Enter a valid name and age (non value input)"
    const enterName = "Please enter a name"
    const enterAge = "Please enter a age"
    if (input.isNameEmpty && input.isAgeEmpty) {
      overlayContent = <OverLay text={enterNameAndAge} />
    } else if (input.isNameEmpty) {
      overlayContent = <OverLay text={enterName} />
    } else if (input.isAgeEmpty) {
      overlayContent = <OverLay text={enterAge} />
    }
  }

  return (
    <div>
      {overlayContent}
      <NewUser onGetNewUser={handleNewUser} onGetInputInfo={userInputInfo} />
      {content}
    </div>
  )
}

export default App
