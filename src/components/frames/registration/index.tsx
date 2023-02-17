import { useState } from "react"

import style from "./index.module.css"

export default function Registration() {
    const [mode, setmode] = useState("Registration")
    const [stage, setstage] = useState(0)
    if (mode == "Registration") {
        return (
            <div className={style.main}>
                <div className={style.form+(stage == 0 ? " "+style.current : "")}>
                    <form onSubmit={(e) => {e.preventDefault(); setstage(1)}}>
                        <h1>Регистрация</h1>
                        <p>Почта</p>
                        <input type="email" placeholder="example@mail.ru" />
                        <p>Пароль</p>
                        <input type="password" placeholder="***********" />
                        <p>Подтверждение пароля</p>
                        <input type="password" placeholder="***********" />
                        <button type="submit">Подтвердить</button>
                    </form>
                </div>
                <div className={style.form+(stage == 1 ? " "+style.current : "")}>
                    <form onSubmit={(e) => {e.preventDefault(); setstage(2)}}>
                        <h1>Регистрация</h1>
                        <p>Имя</p>
                        <input type="text" placeholder="Иван" />
                        <p>Фамилия</p>
                        <input type="text" placeholder="Иванович" />
                        <button type="submit">Дальше</button>
                    </form>
                </div>
                <button className={style.bottom}>Уже есть аккаунт? Авторизоваться</button>
            </div>
        )
    } else if (mode == "Login") {
        return (
            <div className={style.main}>
                <div className={style.form+" "+style.current}>
                    <form onSubmit={(e) => {e.preventDefault(); setstage(1)}}>
                        <h1>Авторизация</h1>
                        <p>Почта</p>
                        <input type="email" placeholder="example@mail.ru" />
                        <p>Пароль</p>
                        <input type="password" placeholder="***********" />
                        <button type="submit">Войти</button>
                    </form>
                </div>
                <button className={style.bottom}>Ещё нет аккаунта? Зарегистрироваться</button>
            </div>
        )
    }
    return (<div>Technical issues</div>)
}