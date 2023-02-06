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
        /*
        <div className={classgen}>
            <h1>{name}</h1>
            <p>{description}</p>
            <button>Подробнее</button>
        </div>*/
        
        <div className={classgen}>
            <h1>{name}</h1>
            <p>{description}</p>
            <div className="event-info">
                <div className="event-info-item">
                    <p className="event-info-label">Date:</p>
                    <p className="event-info-value">{date}</p>
                </div>
                <div className="event-info-item">
                    <p className="event-info-label">Tags:</p>
                    <div className="event-info-value event-tags">
                        {tags.map((tag, index) => <span key={index}>{tag}</span>)}
                    </div>
                </div>
                <div className="event-info-item">
                    <p className="event-info-label">Registrations:</p>
                    <p className="event-info-value">50</p>
                </div>
            </div>
            <button>Зарегистрироваться</button>
        </div>
    )
}