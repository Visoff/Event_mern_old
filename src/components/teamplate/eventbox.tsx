import "./eventbox.css"

interface Props {
    name:string,
    description:string,
    color?:string
}

export default function EventBox({name, description, color}:Props) {
    var classgen = "event-box"
    if (color == "secondary") {
        classgen+=" secondary-color"
    }
    return (
        <div className={classgen}>
            <h1>{name}</h1>
            <p>{description}</p>
            <button>Подробнее</button>
        </div>
    )
}