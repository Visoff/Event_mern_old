export default function (event:any) {
    event.preventDefault()
    window.setframe(event.target.getAttribute("href").split("#")[1])
}