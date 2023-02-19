import { useEffect, useState } from "react"
import axios from "axios"

import style from "./index.module.css"

function update(setEvents:Function) {
    axios.post("https://visoff.ru/api/db/event/getBy/admin", {id:window.user.data._id}).then(data => {
        setEvents(data.data)
        console.log(data.data)
    })
}

function updateEvent(eventEl:HTMLElement) {
    var name = eventEl.querySelector("h1."+style.name)?.innerText
    var form = eventEl.querySelector("form") as HTMLFormElement
    var description = (form[0] as HTMLInputElement).value
    console.log({name, description})
}

function event(el:{name?:string}) {
    return (
        <div className={style.event} onClick={(e) => {(e.target as HTMLElement).classList.add(style.active)}}>
            <h1 className={style.name} contentEditable="true">{el.name??"Название"}</h1>
            <form onSubmit={e => {e.preventDefault(); updateEvent(((e.target as HTMLElement).parentElement as HTMLElement))}}>
                <p>Описание: <input type="text" onLoad={this.value = el.description??""}/></p>
                <button className={style.confirm}>Сохранить</button>
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