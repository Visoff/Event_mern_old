import { useEffect, useState } from "react"
import axios from "axios"

import NavBar from "./nav/bar"
import Frame from "./frames/father"
import Registration from "./frames/registration/index"

import "./screen.css"

function requestPush() {
  if (Notification.permission != "granted") {Notification.requestPermission()}
  
  const subscription = await navigator.serviceWorker.ready.then(registration =>
  registration.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: 'your-public-key'
  })
}

export default function screen() {
  const [mode, setmode] = useState("normal")
    useEffect(() => {
        requestPush()
var id = "";
if ((id = ""+localStorage.getItem("user_id")) != "null") {
    axios.get("https://api.visoff.ru/db/user/id/"+id).then(
      response => {
        window.user.data = response.data
      }
    )
    axios.get(`https://api.visoff.ru/db/user/teams/${id}`).then(
      response => {
        window.user.teams = response.data
      }
    )
    axios.get(`https://api.visoff.ru/db/user/events/${id}`).then(
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