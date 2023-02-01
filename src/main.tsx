import React, {useState} from 'react'
import ReactDOM from 'react-dom/client'
import axios from "axios"

import Window from './components/screen'
import './index.css'

declare global {
  interface Window {
    setframe:Function,
    user:Object
  }
}

var id;
if ((id = localStorage.getItem("user_id")) != undefined) {
    axios.post("https://visoff.ru/api/db/user/getBy/id", {
      id
    }).then(
      response => {
        window.user = response.data
      }
    )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Window />
  </React.StrictMode>,
)