import "./eventbox.css"

export default function ({name, description}) {
    return (
        <div className="event-box">
            <span>{name}</span>
            <span>{description}</span>
            <button>Подробнее</button>
        </div>
    )
}