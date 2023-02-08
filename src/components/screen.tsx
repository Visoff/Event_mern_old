import { useEffect, useState } from "react"
import axios from "axios"

import NavBar from "./nav/bar"
import Frame from "./frames/father"

import "./screen.css"

export default function screen() {
    useEffect(() => {
        
var id = 1;
if (true || (id = parseInt(""+localStorage.getItem("user_id"))) != undefined) {
    axios.post("https://visoff.ru/api/db/user/getBy/id", {
      id
    }).then(
      response => {
        window.user.data = response.data
      }
    )
    axios.post("https://visoff.ru/api/db/user/get/teams", {
      id
    }).then(
      response => {
        window.user.teams = response.data
      }
    )
    axios.post("https://visoff.ru/api/db/user/get/events", {
      id
    }).then(
      response => {
        window.user.events = response.data
      }
    )
}
    }, [])
    return (
        <div className="screen">
            <Frame />
            <NavBar />
        </div>
    )
}