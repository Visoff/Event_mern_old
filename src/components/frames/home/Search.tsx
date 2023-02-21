import { useState } from "react"
import style from "./Search.module.css"


export default function Search() {
    const [timer, settimer] = useState<number>(NaN)

    function change(e: React.ChangeEvent<HTMLInputElement>) {
        clearTimeout(timer)
        var timeout = setTimeout(() => {
            console.log(123)
        }, 1000)
        settimer(timeout as any)
    }
    return (
        <div className={style.main}>
            <input type="text" placeholder="Искать" onChange={change}/>
            <button className={style.more}>...</button>
        </div>
    )
}