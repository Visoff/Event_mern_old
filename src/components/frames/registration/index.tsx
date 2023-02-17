import { useState } from "react"

import style from "./index.module.css"

function register(regdata:Object) {
    setTimeout(() => {
        console.log(regdata)
    }, 100)
}

export default function Registration() {
    const [mode, setmode] = useState("Registration")
    const [regdata, setregdata] = useState({})
    const [stage, setstage] = useState(0)
    if (mode == "Registration") {
        return (
            <div className={style.main}>
                <div className={style.form+(stage == 0 ? " "+style.current : "")}>
                    <form onSubmit={(e) => {e.preventDefault(); setstage(1); setregdata({...regdata, email:e.target[0].value, password:e.target[1].value})}}>
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
                    <form onSubmit={(e) => {e.preventDefault(); setregdata({...regdata, name:e.target[0].value, lastname:e.target[1].value}); register(regdata)}}>
                        <h1>Регистрация</h1>
                        <p>Имя</p>
                        <input type="text" placeholder="Иван" />
                        <p>Фамилия</p>
                        <input type="text" placeholder="Иванович" />
                        <button type="submit">Дальше</button>
                    </form>
                </div>
                <button className={style.bottom} onClick={(e) => {setmode("Login")}}>Уже есть аккаунт? Авторизоваться</button>
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
                <button className={style.bottom} onClick={(e) => {setmode("Registration")}}>Ещё нет аккаунта? Зарегистрироваться</button>
            </div>
        )
    }
    return (<div>Technical issues</div>)
}