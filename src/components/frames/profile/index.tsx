import EventBox from "../../teamplate/eventbox"
import "./index.css"

export default function ProfileFrame() {
    return (
        <div className="profile-frame">
            <div className="row">
                <div className="icon"></div>
                <div className="name-parent">
                    <div className="name">Ilya</div>
                    <div className="description">I suck and please help me (nvm i have chat gpt)</div>
                </div>
            </div>
            <div className="horizontal-list event-list">
                <EventBox name="CityHeroes" description="came first" />
                <EventBox color="secondary" name="CityHeroes" description="came first" />
                <EventBox name="CityHeroes" description="came first" />
                <EventBox color="secondary" name="CityHeroes" description="came first" />
            </div>
        </div>
    )
}