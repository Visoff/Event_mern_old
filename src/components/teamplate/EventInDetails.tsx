import axios from "axios"
import { useState } from "react"

import style from "./EventInDetails.module.css"

interface Props {
    _id:string,
    name:string,
    description:string,
    color?:string,
    date:string,
    tags:Array<string>,
    registered:boolean,
    registrationCount:number
}

export default function EventInDetails({_id, name, description, color, date, tags, registered, registrationCount}:Props) {
    var classgen = style["event-box"]
    if (color == "secondary") {
        classgen+=" "+style["secondary-color"]
    }
    const [registered_state, set_registration_state] = useState(registered)
    const [registrationCount_state, set_registrationCount] = useState(registrationCount)
    function register() {
        if (registered_state) {
            set_registration_state(false)
            //fetch
        } else {
            set_registration_state(true)
            axios.post("https://visoff.ru/api/db/user/addTo/event", {user:window.user.data._id, event:_id})
        }
    }
    return (
        <div className={classgen}>
            <h1>{name}</h1>
            <p>{description}</p>
            <div className={style.details}>
                <p><strong>Date:</strong> {date}</p>
                <p><strong>Tags:</strong> {tags.map(el => {return (<div className={style.tag}>{el}</div>)})}</p>
                <p><strong>Registrations:</strong> {registrationCount_state}</p>
            </div>
            <button className={registered_state?style.registered:style["not-registered"]} onClick={() => {register(); set_registrationCount(registrationCount_state+1)}}>
                {registered_state?"Иду":"Пойду"}
            </button>
        </div>
    )
}

EventInDetails.defaultProps = {
    registered:false,
    registrationCount:0
}