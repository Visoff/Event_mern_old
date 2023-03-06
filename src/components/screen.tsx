import { useEffect, useState } from "react"
import axios from "axios"

import NavBar from "./nav/bar"
import Frame from "./frames/father"
import Registration from "./frames/registration/index"

import "./screen.css"

async function requestPush() {
  if (Notification.permission != "granted") {Notification.requestPermission()}
  
  const subscription = await navigator.serviceWorker.ready.then(registration =>
    registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: "BCUCd8S6zMT0cj2DSi_Rik-ZBzHe6L9Nj_3wbExRX5Tu9c78npkv_rPsy50inG9IU13mIGhKusHz3oORMoQrbUA"
    })
  )

  axios.post("https://api.visoff.ru/notification/subscribe", {subscription, _id:window.user.data._id})
}

export default function screen() {
  const [mode, setmode] = useState("normal")
    useEffect(() => {
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
    const inter = setInterval(() => {
      if (window.user.data._id != "-1") {
        requestPush()
        clearInterval(inter)
      }
    }, 100)
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