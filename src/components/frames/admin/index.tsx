import { useEffect, useState } from "react"
import axios from "axios"

import style from "./index.module.css"

function update(setEvents:Function) {
    axios.post("https://visoff.ru/api/db/event/getBy/admin", {id:window.user.data._id}).then(data => {
        setEvents(data.data)
        console.log(data.data)
    })
}

export default function AdminFrame() {
    const [events, setEvents] = useState([])
    if (events == []) {update(setEvents)}
    return (
        <div className={style.main}>
            {events.map(el => {return <div>{el.name??"Название"}</div>})}
            <button className={style.add} onClick={(e) => {
                axios.post("https://visoff.ru/api/db/event/create", {admins:[window.user.data._id]})
            }}>Добавить</button>
        </div>
    )
}