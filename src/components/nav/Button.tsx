import "./Button.css"
import handleClick from "./handleClick.ts"

export default function NavButton({href, name}) {
    return (
        <a href={`#${href}`} onClick={handleClick}>{name}</a>
    )
}