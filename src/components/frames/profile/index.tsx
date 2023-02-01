import EventBox from "../../teamplate/eventbox"
import InfoCard from "../../teamplate/infocard"
import "./index.css"

export default function ProfileFrame() {
    return (
        <div className="profile-frame">
            <div className="row">
                <div className="icon"></div>
                <div className="name-parent">
                    <div className="name">{window.user.data.name}</div>
                    <div className="description">I suck and please help me (nvm i have chat gpt)</div>
                </div>
            </div>
            <div className="horizontal-list event-list">
                {   
                    window.user.teams.map(el => {
                        return <EventBox color="secondary" name={el.name} description="descr" />
                    })
                }
            </div>
            <div className="horizontal-list team-list">
                <EventBox name="Организаторы" description="кто" />
                <EventBox name="CityHeroes" description="came first" />
                <EventBox name="CityHeroes" description="came first" />
                <EventBox name="CityHeroes" description="came first" />
            </div>
            <div className="info">
                <InfoCard header="Телефон" content="8-(913)-627-54-12" />
                <InfoCard header="Телега" content="@VisoffOwner" />
                <InfoCard header="Почта" content="ikalinin01@mail.ru
                ikalinin667@gmail.com" />
            </div>
        </div>
    )
}