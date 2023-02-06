import EventInDetails from "../../teamplate/EventInDetails"

export default function HomeFrame() {
    return (
        <div className="event-box-parent">
            <EventInDetails name="CityHeroes" description="yooo it works" date="12-12-12" tags={["12", "13", "14"]} />
            <EventInDetails name="CityHeroes" description="yooo it works" date="12-12-12" tags={["12", "13", "14"]} />
            <EventInDetails name="CityHeroes" description="yooo it works" date="12-12-12" tags={["12", "13", "14"]} />
        </div>
    )
}