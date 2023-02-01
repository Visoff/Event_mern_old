import { useState } from "react"
import axios from "axios"

import NavBar from "./nav/bar"
import Frame from "./frames/father"

import "./screen.css"

export default function screen() {
    return (
        <div className="screen">
            <Frame />
            <NavBar />
        </div>
    )
}