import "./eventbox.css"

interface Props {
    name:string,
    description:string
}

export default function ({name, description}:Props) {
    return (
        <div className="event-box">
            <h1>{name}</h1>
            <p>{description}</p>
            <button>Подробнее</button>
        </div>
    )
}