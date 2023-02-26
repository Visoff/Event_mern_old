import axios from "axios"
import { useEffect, useState } from "react"
import Calendar from "./calendar"

import style from "./index.module.css"

export default function ScheduleFrame() {
    const [selectedDate, setSelectedDate] = useState(new Date())
    const [events, setEvents] = useState([])
    useEffect(() => {
        axios.post("https://visoff.ru/api/db/user/find/events", {id:window.user.data._id}).then(data => {
            axios.post("https://visoff.ru/api/db/event/schedule", 
                {$in:data.data.map((el:any) => {return el._id})}
            ).then(data => {
                console.log(data)
            })
        })
    }, [events])
    return (
        <div className={style.main}>
            <Calendar events={events} date={[selectedDate, setSelectedDate]} />
        </div>
    )
}