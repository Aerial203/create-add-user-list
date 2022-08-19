import React from "react"
import style from "./List.module.css"

const List = (props) => {
  const handleClick = () => {
    props.onGetUserId(props.id)
  }
  return (
    <div className={style["user-lists__items"]} onClick={handleClick}>
      <div className={style["user-lists__item"]}>
        {props.name} ({props.age} years old)
      </div>
    </div>
  )
}

export default List
