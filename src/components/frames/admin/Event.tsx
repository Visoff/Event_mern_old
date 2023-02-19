import { useState } from "react"

import style from "./index.module.css"

export default function event(el:{_id:string, name?:string, description?:string}) {
    const [active, setActive] = useState(false)
    const [event, setEvent] = useState(el)
    return (
        <div className={style.event+" "+(active ? style.active : "")} onClick={(e) => {setActive(true)}}>
            <h1 className={style.name} contentEditable="true" onChange={(e) => {setEvent({...event, name:(e.target as HTMLElement).innerText})}}>{event.name??"Название"}</h1>
            <form onSubmit={e => {e.preventDefault(); setActive(false);}}>
                <p>Описание: <input type="text" onChange={e => {setEvent({...event, description:e.target.value})}} value={event.description} /></p>
                <button className={style.confirm}>Сохранить</button>
            </form>
        </div>
        )
}