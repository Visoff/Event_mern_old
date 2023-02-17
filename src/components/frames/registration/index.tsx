import { useState } from "react"

import style from "./index.module.css"

export default function Registration() {
    const [mode, setmode] = useState("Registration")
    const [stage, setstage] = useState(0)
    if (mode == "Registration") {
        return (
            <div className={style.main}>
                <div className={style.form+(stage == 0 ? " "+style.current : "")}>
                    hello
                </div>
                <div className={style.form+(stage == 1 ? " "+style.current : "")}>
                    o/
                </div>
            </div>
        )
    }
}