import React, {useState} from 'react'
import ReactDOM from 'react-dom/client'
import axios from "axios"

import Window from './components/screen'
import './index.css'

declare global {
  interface Window {
    setframe:Function,
    user:{
      data:Object,
      setData:Function
    }
  }
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Window />
  </React.StrictMode>,
)