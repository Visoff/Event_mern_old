import "./Button.css"

export default function({href:string, name:string}) {
    return (
        <a href={`#${href}`}>{name}</a>
    )
}