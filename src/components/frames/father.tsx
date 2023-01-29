import {useState} from "react"

import Home from "./home/index"
import Schedule from "./schedule/index"
import Profile from "./profile/index"

import "./father.css"

export default function () {
    const [frame, setframe] = useState("Home")
    window.setframe = setframe
    return (
        <div className="frame-father">
            {frame == "Home" && <Home />}
            {frame == "Schedule" && <Schedule />}
            {frame == "Profile" && <Profile />}
        </div>
    )
}