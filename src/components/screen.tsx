import { useState } from "react"
import axios from "axios"

import NavBar from "./nav/bar"
import Frame from "./frames/father"

import "./screen.css"

export default function screen() {
    {
        window.user = useState({id:-1})
        var id;
        if ((id = localStorage.getItem("user_id")) != undefined) {
          (async (id) => {
            var response = await axios.post("https://visoff.ru/api/db/user/getBy/id", {
              id
            })
            window.user[1](response.data)
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