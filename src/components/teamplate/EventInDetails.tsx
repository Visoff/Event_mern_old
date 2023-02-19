import { useState } from "react"
import style from "./EventInDetails.module.css"

interface Props {
    name:string,
    description:string,
    color?:string,
    date:string,
    tags:Array<string>,
    registered:boolean,
    registrationCount:number
}

export default function EventInDetails({name, description, color, date, tags, registered, registrationCount}:Props) {
    var classgen = style["event-box"]
    if (color == "secondary") {
        classgen+=" "+style["secondary-color"]
    }
    const [registered_state, register] = useState(registered)
    const [registrationCount_state, set_registrationCount] = useState(registrationCount)
    return (
        <div className={classgen}>
            <h1>{name}</h1>
            <p>{description}</p>
            <div className={style.details}>
                <p><strong>Date:</strong> {date}</p>
                <p><strong>Tags:</strong> {tags.map(el => {return (<div className={style.tag}>{el}</div>)})}</p>
                <p><strong>Registrations:</strong> {registrationCount_state}</p>
            </div>
            <button className={registered_state?style.registered:style["not-registered"]} onClick={() => {register(!registered_state); set_registrationCount(registrationCount_state+1)}}>
                {registered_state?"Иду":"Пойду"}
            </button>
        </div>
    )
}

EventInDetails.defaultProps = {
    registered:false,
    registrationCount:0
}