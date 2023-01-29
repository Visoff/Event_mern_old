export default function (event:any) {
    event.preventDefault()
    const {frame, setframe} = useContext(currentFrame)
    setframe(event.target.getAttribute("href").split("#")[1])
}