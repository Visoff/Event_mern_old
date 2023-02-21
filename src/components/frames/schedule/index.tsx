import Calendar from "./calendar"

import style from "./index.module.css"

export default function ScheduleFrame() {
    return (
        <div className={style.main}>
            <Calendar />
        </div>
    )
}