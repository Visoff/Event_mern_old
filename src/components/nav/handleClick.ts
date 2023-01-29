export default function (event:any) {
    event.preventDefault()
    alert(event.target.getAttribute("href"))
}