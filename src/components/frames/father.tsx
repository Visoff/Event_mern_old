import Home from "./home/index"

import "./father.css"

export default function () {
    console.log(React.useContext(currentFrame))
    return (
        <div className="frame-father">
            {window.currentFrame == "Home" && <Home />}
        </div>
    )
}