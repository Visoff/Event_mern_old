import style from "./index.module.css"

export default function AdminFrame() {
    return (
        <div className={style.main}>
            <button className={style.add} onClick={(e) => {console.log(123)}}>Добавить</button>
        </div>
    )
}