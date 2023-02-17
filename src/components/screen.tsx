import { useEffect, useState } from "react"
import axios from "axios"

import NavBar from "./nav/bar"
import Frame from "./frames/father"
import Registration from "./frames/registration/index"

import "./screen.css"

export default function screen() {
  const [mode, setmode] = useState("normal")
    useEffect(() => {
        
var id = -1;
if ((id = parseInt(""+localStorage.getItem("user_id"))) != undefined) {
  console.log("fetching")
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
} else {
  setmode("registration")
}
    }, [])
    switch (mode) {
      case "normal":
        return(
          <div className="screen">
              <Frame />
              <NavBar />
          </div>
      )
      case "registration":
        return (
          <div className="screen">
              <Registration />
          </div>
        )
    }
    return (
      <div>Initial error</div>
    )
}