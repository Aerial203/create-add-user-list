import React from "react"
import style from "./UserForm.module.css"

const UserForm = () => {
  return (
    <form>
      <div className="form-group">
        <label className={style.name}>Name</label>
        <input type="text" />
        <label className={style.age}>Age (Years)</label>
        <input type="number" />
      </div>
      <div>
        <button className={style.button}>Add User</button>
      </div>
    </form>
  )
}

export default UserForm
