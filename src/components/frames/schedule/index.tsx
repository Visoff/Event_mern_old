import axios from "axios"
import { useEffect, useState } from "react"
import Calendar from "./calendar"

import style from "./index.module.css"

export default function ScheduleFrame() {
    const [selectedDate, setSelectedDate] = useState(new Date())
    const [schedule, setSchedule] = useState([])
    useEffect(() => {
        axios.post("https://visoff.ru/api/db/user/find/schedule", {id:window.user.data._id}).then(data => {
            setSchedule(data.data)
            window.schedule = data.data
        })
    }, [schedule])
    return (
        <div className={style.main}>
            <Calendar events={schedule} date={[selectedDate, setSelectedDate]} />
        </div>
    )
}