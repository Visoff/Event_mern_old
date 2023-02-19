import { useEffect, useState } from "react"
import axios from "axios"

import style from "./index.module.css"

function update() {
    axios.post("https://visoff.ru/api/db/event/getBy/admin", {id:window.user.data._id})
}

export default function AdminFrame() {
    const [events, setEvents] = useState([])
    useEffect(update)
    return (
        <div className={style.main}>
            {events.map(el => {return <div>{el.name??"Название"}</div>})}
            <button className={style.add} onClick={(e) => {
                axios.post("https://visoff.ru/api/db/event/create", {admins:[window.user.data._id]})
            }}>Добавить</button>
        </div>
    )
}