import { useState } from "react"

import style from "./index.module.css"

export default function Registration() {
    const [mode, setmode] = useState("Registration")
    const [stage, setstage] = useState(0)
    if (mode == "Registration") {
        return (
            <div className={style.main}>
                <div className={style.form+(stage == 0 ? " "+style.current : "")}>
                    <form onSubmit={(e) => {e.preventDefault()}}>
                        <h1>Регистрация</h1>
                        <p>Почта</p>
                        <input type="text" />
                        <p>Пароль</p>
                        <input type="text" />
                        <p>Подтверждение пароля</p>
                        <input type="text" />
                        <button type="submit">Подтвердить</button>
                    </form>
                </div>
                <div className={style.form+(stage == 1 ? " "+style.current : "")}>
                    o/
                </div>
            </div>
        )
    }
}