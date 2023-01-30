import EventBox from "./../../teamplate/eventbox"

export default function HomeFrame() {
    return (
        <div className="event-box-parent">
            <EventBox name="CityHeroes" description="yooo it works" />
            <EventBox name="CityHeroes" description="description" />
            <EventBox name="CityHeroes" description="description" />
        </div>
    )
}