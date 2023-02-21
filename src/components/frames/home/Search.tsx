import { useState } from "react"
import style from "./Search.module.css"


export default function Search() {
    const [timer, settimer] = useState(null)

    function change(e) {
        clearTimeout(timer)
        var timeout = setTimeout(() => {
            console.log(123)
        }, 1000)
        settimer(timeout)
    }
    return (
        <div className={style.main}>
            <input type="text" placeholder="Искать" onChange={change}/>
            <button className={style.more}>...</button>
        </div>
    )
}