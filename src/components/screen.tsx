import { useState } from "react"
import axios from "axios"

import NavBar from "./nav/bar"
import Frame from "./frames/father"

import "./screen.css"

export default function screen() {
    {
        const [data, setData] = useState({id:-1})
        window.user = {data, setData}
        var id;
        if ((id = localStorage.getItem("user_id")) != undefined) {
          (async (id) => {
            var data = await axios.post("https://visoff.ru/api/db/user/getBy/id", {
              data:{id}
            })
            window.user.setData(data.data)
          })(id)
        }
    }
    return (
        <div className="screen">
            <Frame />
            <NavBar />
        </div>
    )
}