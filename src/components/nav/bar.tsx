import Button from "./Button"

import "./bar.css"

export default function () {
    return (
        <nav>
            <Button href="Home" name="Главная" />
            <Button href="Schedule" name="Календарь" />
            <Button href="Profile" name="Профиль" />
        </nav>
    )
}