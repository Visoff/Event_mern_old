import axios from "axios"
import { useRef, useState } from "react"

import style from "./index.module.css"

function update(event:Object) {
    axios.post("https://visoff.ru/api/db/event/updateOne", event).then((data) => {
        if (data.data == "ok") {console.log("updated")} else {console.log("moron")}
    })
}

function schedule(el:any) {
    return [1, 2, 3]
}

export default function event({el}:{el:{name:string|null, description:string}}) {
    const [active, setActive] = useState(false)
    const [event, setEvent] = useState(el)
    const ref = useRef(event.name)
    return (
        <div className={style.event+" "+(active ? style.active : "")} onClick={(e) => {setActive(true)}}>
            <h1 className={style.name} contentEditable={true} inputMode="text" onInput={(e) => {setEvent({...event, name:(e.target as HTMLElement).textContent})}} dangerouslySetInnerHTML={{__html:(ref.current??"Название")}} />
            <form onSubmit={e => {e.preventDefault(); setActive(false); update(event)}}>
                <p>Описание: <input type="text" onChange={e => {setEvent({...event, description:e.target.value})}} value={event.description} /></p>
                <div className={style.subdir}>
                    <p>Расписание</p>
                    <div>
                        {schedule(el).map(el => {return <p>{el}</p>})}
                    </div>
                </div>
                <button className={style.confirm}>Сохранить</button>
            </form>
        </div>
        )
}