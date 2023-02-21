import style from "./Search.module.css"

export default function Search() {
    return (
        <div className={style.main}>
            <input type="text" placeholder="Искать"/>
            <button className={style.more}>...</button>
        </div>
    )
}