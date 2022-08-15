import React from "react"
import style from "./List.module.css"

const List = (props) => {
  return (
    <div className={style["user-lists__items"]}>
      <div className={style["user-lists__item"]}>
        {props.name} ({props.age} years old)
      </div>
    </div>
  )
}

export default List
