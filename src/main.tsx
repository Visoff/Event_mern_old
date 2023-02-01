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

{
  const [data, setData] = useState({id:-1})
  window.user = {data, setData}
  var id;
  if ((id = localStorage.getItem("user_id")) != undefined) {
    (async (id) => {
      var data = await axios.post("https://visoff.ru/api/db/user/getBy/id", {
        data:{id}
      })
      console.log(data)
    })(id)
  }
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Window />
  </React.StrictMode>,
)