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
      },
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

window.user = {data:{id:-1, name:"", nickname:"", password:""}, teams:[], events:[]}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Window />
  </React.StrictMode>,
)