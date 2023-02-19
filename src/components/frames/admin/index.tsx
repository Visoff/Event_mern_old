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

function event(el:{_id:string, name?:string, description?:string}) {
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