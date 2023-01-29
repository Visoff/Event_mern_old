import Home from "./home/index"

import "./father.css"

export default function () {
    return (
        <div className="frame-father">
            {window.currentFrame == "Home" && <Home />}
        </div>
    )
}