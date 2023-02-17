import Button from "./Button"

import "./bar.css"

export default function NavBar() {
    return (
        <nav>
            <Button href="Home" name="Главная" />
            <Button href="Schedule" name="Календарь" />
            <Button href="Profile" name="Профиль" />
            <Button href="Profile" name="Твои" />
        </nav>
    )
}