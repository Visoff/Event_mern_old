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
    const [reg, register] = useState(false)
    return (
        <div className={classgen}>
            <h1>{name}</h1>
            <p>{description}</p>
            <div className="details">
                <p><strong>Date:</strong> {date}</p>
                <p><strong>Tags:</strong> {tags.join(", ")}</p>
                <p><strong>Registrations:</strong> {registrationCount}</p>
            </div>
            <button className={reg?"registered":"not-registered"} onClick={() => {register(!reg)}}>
                {reg?"Зарегистрировано":"Зарегистрироваться"}
            </button>
        </div>
    )
}