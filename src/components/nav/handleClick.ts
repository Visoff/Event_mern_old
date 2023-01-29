export default function (event:any) {
    event.preventDefault()
    var {frame, setframe} = React.useContext(currentFrame)
    setframe(event.target.getAttribute("href").split("#")[1])
}