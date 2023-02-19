import { useEffect, useState } from "react"
import axios from "axios"

import style from "./index.module.css"

function update(setEvents:Function) {
    axios.post("https://visoff.ru/api/db/event/getBy/admin", {id:window.user.data._id}).then(data => {
        setEvents(data.data)
        console.log(data.data)
    })
}

function event(el:{name?:string}) {
    return (
        <div className={style.event} onClick={(e) => {(e.target as HTMLElement).classList.add(style.active)}}>
            <h1 className={style.name} contentEditable="true">{el.name??"Название"}</h1>
            <form onSubmit={e => {e.preventDefault()}}>

            </form>
        </div>
        )
}

export default function AdminFrame() {
    const [events, setEvents] = useState([])
    useEffect(() => {
        if (events.length == 0) {update(setEvents)}
    }, [])
    return (
        <div className={style.main}>
            {events.map(el => {return event(el)})}
            <button className={style.add} onClick={(e) => {
                axios.post("https://visoff.ru/api/db/event/create", {admins:[window.user.data._id]})
            }}>Добавить</button>
        </div>
    )
}