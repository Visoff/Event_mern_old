import React, {useState} from 'react'
import ReactDOM from 'react-dom/client'
import axios from "axios"

import Window from './components/screen'
import './index.css'

declare global {
  interface Window {
    setframe:Function,
    user:{
      data:{
        id:Number,
        name:string,
        nickname:string,
        password:string
      }|{},
      teams:[{
        _id:string,
        id:Number,
        name:string
      }]|[],
      events:[{
        _id:string,
        id:Number,
        name:string,
        data:string
      }]|[]
    }
  }
}

var id;
if ((id = localStorage.getItem("user_id")) != undefined) {
  id = parseInt(id)
  window.user = {data:{}, teams:[], events:[]}
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

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Window />
  </React.StrictMode>,
)