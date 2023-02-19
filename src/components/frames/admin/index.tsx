import style from "./index.module.css"

export default function AdminFrame() {
    return (
        <div className={style.main}>
            <button className={style.add}>Добавить</button>
        </div>
    )
}