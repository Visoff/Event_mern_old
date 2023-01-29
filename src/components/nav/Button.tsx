import "./Button.css"

export default function({href, name}) {
    return (
        <a href={`#${href}`}>{name}</a>
    )
}