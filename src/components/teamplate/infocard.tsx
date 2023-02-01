import "./infocard.css"

interface Props {
    header:string,
    content:string
}

export default function InfoCard({header, content}:Props) {
    return (
        <div className="info-card">
            <h1>{header}</h1>
            <p>{content}</p>
        </div>
    )
}