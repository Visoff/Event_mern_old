import { useEffect, useState } from "react"
import axios from "axios"

import Event from "./Event"

import style from "./index.module.css"

function update(setEvents:Function) {
    axios.post("https://visoff.ru/api/db/event/getBy/admin", {id:window.user.data._id}).then(data => {
        setEvents(data.data)
        console.log(data.data)
    })
}

function updateEvent(eventEl:HTMLElement) {
    var name = eventEl.querySelector("h1."+style.name)?.textContent
    var form = eventEl.querySelector("form") as HTMLFormElement
    var description = (form[0] as HTMLInputElement).value
    console.log({name, description})
}

export default function AdminFrame() {
    const [events, setEvents] = useState([])
    useEffect(() => {
        if (events.length == 0) {update(setEvents)}
    }, [])
    return (
        <div className={style.main}>
            {events.map((el:{_id:string, name:string|null, description:string, date:Date}) => {return (<Event el={el} key={el._id} />)})}
            <button className={style.add} onClick={(e) => {
                axios.post("https://visoff.ru/api/db/event/create", {admins:[window.user.data._id]})
            }}>Добавить</button>
        </div>
    )
}