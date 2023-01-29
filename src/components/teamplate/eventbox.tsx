import "./eventbox.css"

interface Props {
    name:string,
    description:string
}

export default function ({name, description}:Props) {
    return (
        <div className="event-box">
            <span>{name}</span>
            <span>{description}</span>
            <button>Подробнее</button>
        </div>
    )
}