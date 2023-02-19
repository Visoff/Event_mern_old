import axios from "axios"
import { useEffect, useState } from "react"
import EventInDetails from "../../teamplate/EventInDetails"

export default function HomeFrame() {
    const [events, setEvents] = useState([])
    useEffect(() => {
        if (events.length == 0) {
            axios.post("https://visoff.ru/api/db/event/find", {}).then(data => {
                setEvents(data.data)
            })
        }
    }, [])
    return (
        <div className="event-box-parent">
            {events.map(el => {return <EventInDetails key={el._id} name={el.name??"Название"} description={el.description??"Описание"} date={el.date??"12.12.22"} tags={el.tags??[]} />})}
        </div>
    )
}