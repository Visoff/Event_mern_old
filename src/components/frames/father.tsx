import {useState} from "react"

import Home from "./home/index"

import "./father.css"

export default function () {
    const [frame, setframe] = useState("Home")
    window.setframe = setframe
    return (
        <div className="frame-father">
            {frame == "Home" && <Home />}
        </div>
    )
}