import { useState } from "react"
import "./EventInDetails.css"

interface Props {
    name:string,
    description:string,
    color?:string,
    date:string,
    tags:Array<string>,
    registered?:boolean,
    registrationCount?:number
}

export default function EventInDetails({name, description, color, date, tags, registered, registrationCount}:Props) {
    var classgen = "event-box"
    if (color == "secondary") {
        classgen+=" secondary-color"
    }
    const [registered_state, register] = useState(registered)
    const [registrationCount_state, set_registrationCount] = useState(registrationCount)
    if (registered_state == undefined) set_registrationCount(0)
    return (
        <div className={classgen}>
            <h1>{name}</h1>
            <p>{description}</p>
            <div className="details">
                <p><strong>Date:</strong> {date}</p>
                <p><strong>Tags:</strong> {tags.join(", ")}</p>
                <p><strong>Registrations:</strong> {registrationCount_state}</p>
            </div>
            <button className={registered_state?"registered":"not-registered"} onClick={() => {register(!registered_state); set_registrationCount(registrationCount_state+1)}}>
                {registered_state?"Зарегистрировано":"Зарегистрироваться"}
            </button>
        </div>
    )
}