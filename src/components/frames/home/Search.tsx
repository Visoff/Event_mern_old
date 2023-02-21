import style from "./Search.module.css"

function change(e) {
    if (timeout != undefined) {clearTimeout(timeout)}
    timeout = setTimeout(() => {
        console.log(123)
    }, 1000)
}

export default function Search() {
    return (
        <div className={style.main}>
            <input type="text" placeholder="Искать" onChange={change}/>
            <button className={style.more}>...</button>
        </div>
    )
}