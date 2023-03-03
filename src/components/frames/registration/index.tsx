import axios from "axios"
import { useState } from "react"

import style from "./index.module.css"

interface RegData {
    email:string,
    password:string,
    name:string,
    lastname:string
}
interface LogData {
    email:string,
    password:string
}

function register(regdata:RegData) {
    axios.post("https://api.visoff.ru/db/user/find", {email:(regdata.email)}).then(data => {if (data.data.length == 0) {
            axios.post("https://api.visoff.ru/db/user/register", regdata).then(() => {console.log("Done")})
        } else {
            console.log("Already exists")
        }
    })
}
function login(regdata:LogData) {
    axios.post("https://api.visoff.ru/db/user/getBy/emailPass", {email:(regdata.email), password:(regdata.password)}).then(data => {
        if (data.data._id != undefined) {
            localStorage.setItem("user_id", data.data._id)
            location.reload()
        }
    })
}

export default function Registration() {
    const [mode, setmode] = useState("Registration")
    var [regdata, setregdata] = useState({email:"", password:"", name:"", lastname:""})
    const [stage, setstage] = useState(0)
    if (mode == "Registration") {
        return (
            <div className={style.main}>
                <div className={style.form+(stage == 0 ? " "+style.current : "")}>
                    <form onSubmit={(e) => {e.preventDefault(); if (((e.target as HTMLFormElement)[1] as HTMLInputElement).value != ((e.target as HTMLFormElement)[2] as HTMLInputElement).value) {return}; setstage(1); setregdata({...regdata, email:((e.target as HTMLFormElement)[0] as HTMLInputElement).value, password:((e.target as HTMLFormElement)[1] as HTMLInputElement).value})}}>
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
                    <form onSubmit={(e) => {e.preventDefault(); setregdata(regdata = {...regdata, name:((e.target as HTMLFormElement)[0] as HTMLInputElement).value, lastname:((e.target as HTMLFormElement)[1] as HTMLInputElement).value}); register(regdata)}}>
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
                    <form onSubmit={(e) => {e.preventDefault(); login({email:(((e.target as HTMLFormElement)[0] as HTMLInputElement).value), password:(((e.target as HTMLFormElement)[1] as HTMLInputElement).value)})}}>
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