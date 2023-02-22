import axios from "axios"
import { useEffect, useState } from "react"
import EventInDetails from "../../teamplate/EventInDetails"
import Search from "./Search"

import style from "./index.module.css"

export default function HomeFrame() {
    const [events, setEvents] = useState([])
    const [Query, setQuery] = useState({})
    useEffect(() => {
        const inter = setInterval(() => {
            axios.post("https://visoff.ru/api/db/event/find", Query).then(data => {
                setEvents(data.data)
                window.events = data.data
            })
        }, 500)
        return () => {clearInterval(inter)}
    }, [events])
    return (
        <div className={style.main}>
            <Search setQuery={setQuery} />
            <div className="event-box-parent">
                {events.map((el:{_id:string, name:string, description:string, date:string, tags:string[], members:string[]}) => {return <EventInDetails key={el._id} _id={el._id} name={el.name??"Название"} description={el.description??"Описание"} date={el.date??"12.12.22"} tags={el.tags??[]} registered={el.members != undefined && window.user.data._id in el.members} />})}
            </div>
        </div>
    )
}