import NavBar from "./nav/bar"
import Frame from "./frames/father"

import "./screen.css"

export default function() {
    return (
        <div className="screen">
            <Frame />
            <NavBar />
        </div>
    )
}