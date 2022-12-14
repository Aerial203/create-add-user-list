import style from "./OverLay.module.css"

const OverLay = (props) => {
  const handleClick = () => {
    props.onClickOk((prevInput) => {
      return {
        isNameEmpty: false,
        isAgeEmpty: false,
        isAgeLess: false,
      }
    })
  }
  return (
    <div className={style["overlay__outer-layer"]}>
      <div className={style.overlay__container}>
        <div className={style.overLay__header}>
          <h1 className={style.overlay__heading}>Invalid Input</h1>
        </div>
        <div className={style.overlay__body}>
          <p className={style.overlay__subheading}>{props.text}</p>
          <button className={style.overlay__button} onClick={handleClick}>
            okay
          </button>
        </div>
      </div>
    </div>
  )
}

export default OverLay
