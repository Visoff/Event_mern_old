import {useEffect, useState} from "react"

import Home from "./home/index"
import Schedule from "./schedule/index"
import Profile from "./profile/index"
import AdminFrame from "./admin/index"

import "./father.css"

export default function FrameFather() {
    const [frame, setframe] = useState("Home")
    window.setframe = setframe
    useEffect(() => {
        window.setframe(location.href.split("#")[1])
    }, [])
    return (
        <div className="frame-father">
            {frame == "Home" && <Home />}
            {frame == "Schedule" && <Schedule />}
            {frame == "Profile" && <Profile />}
            {frame == "Admin" && <AdminFrame />}
        </div>
    )
}