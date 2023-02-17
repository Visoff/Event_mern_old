import { useState } from "react"

import style from "./index.module.css"

export default function Registration() {
    const [mode, setmode] = useState("Registration")
    if (mode == "Registration") {
        return (
            <div className={style.calendar}>
                123
            </div>
        )
    }
}