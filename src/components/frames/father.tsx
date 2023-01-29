import Home from "./home/index.tsx"

import "./father.css"

export default function () {
    return (
        <div className="frame-father">
            {window.currentFrame == "Home" && <Home />}
        </div>
    )
}