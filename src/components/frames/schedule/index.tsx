import { useState } from "react"
import Calendar from "./calendar"

import style from "./index.module.css"

export default function ScheduleFrame() {
    const [selectedDate, setSelectedDate] = useState(new Date())
    return (
        <div className={style.main}>
            <Calendar date={[selectedDate, setSelectedDate]} />
        </div>
    )
}