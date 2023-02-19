import axios from "axios"
import { useRef, useState } from "react"

import style from "./index.module.css"

function update(event) {
    axios.post("https://visoff.ru/api/db/event/updateOne", event).then((data) => {
        if (data.data == "ok") {console.log("updated")} else {console.log("moron")}
    })
}

export default function event({el}:{el:{}}) {
    const [active, setActive] = useState(false)
    const [event, setEvent] = useState(el)
    const ref = useRef(event.name)
    return (
        <div className={style.event+" "+(active ? style.active : "")} onClick={(e) => {setActive(true)}}>
            <h1 className={style.name} contentEditable={true} inputMode="text" onInput={(e) => {setEvent({...event, name:(e.target as HTMLElement).textContent})}}>{ref.current??"Название"}</h1>
            <form onSubmit={e => {e.preventDefault(); setActive(false); update(event)}}>
                <p>Описание: <input type="text" onChange={e => {setEvent({...event, description:e.target.value})}} value={event.description} /></p>
                <button className={style.confirm}>Сохранить</button>
            </form>
        </div>
        )
}