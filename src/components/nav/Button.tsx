import "./Button.css"
import handleClick from "./handleClick"

interface Props{
    href:string,
    name:string
}

export default function NavButton({href, name}:Props) {
    return (
        <a href={`#${href}`} onClick={handleClick}>{name}</a>
    )
}