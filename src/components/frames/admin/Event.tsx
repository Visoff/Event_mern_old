import axios from "axios"
import { useEffect, useRef, useState } from "react"

import style from "./index.module.css"

function update(event:Object) {
    axios.post("https://visoff.ru/api/db/event/updateOne", event).then((data) => {
        if (data.data == "ok") {console.log("updated")} else {console.log("moron")}
    })
}

export default function event({el}:{el:{name:string|null, description:string, date:string}}) {
    const [active, setActive] = useState(false)
    const [event, setEvent] = useState({...el, date:new Date().toLocaleDateString()})
    const [schedule, setSchedule] = useState([])
    const ref = useRef(event.name)

    useEffect(() => {
        const inter = setInterval(() => {
            axios.post("https://visoff.ru/api/db/event/schedule/", {id:(el as any)._id}).then(data => {
                setSchedule(data.data)
            })
        }, 1000)
        return () => {clearInterval(inter)}
    }, [schedule])

    return (
        <div className={style.event+" "+(active ? style.active : "")} onClick={(e) => {setActive(true)}}>
            <h1 className={style.name} contentEditable={true} inputMode="text" onInput={(e) => {setEvent({...event, name:(e.target as HTMLElement).textContent})}} dangerouslySetInnerHTML={{__html:(ref.current??"Название")}} />
            <form onSubmit={e => {e.preventDefault(); setActive(false); update(event)}}>
                <p>Описание: <input type="text" onChange={e => {setEvent({...event, description:e.target.value})}} value={event.description} /></p>
                <p>Описание: <input type="date" onChange={e => {setEvent({...event, date:new Date(e.target.value).toLocaleDateString()})}} value={new Date(event.date??"").toISOString().substring(0, 10)} /></p>
                <div className={style.subdir}>
                    <p>Расписание</p>
                    <div>
                        {schedule.map(el => {return <p>{JSON.stringify(el)}</p>})}
                    </div>
                </div>
                <button className={style.confirm}>Сохранить</button>
            </form>
        </div>
        )
}