import Button from "./Button"

import "./bar.css"

export default function () {
    return (
        <nav>
            <Button href="home" name="Главная" />
            <Button href="schedule" name="Календарь" />
            <Button href="profile" name="Профиль" />
        </nav>
    )
}