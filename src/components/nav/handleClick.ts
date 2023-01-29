export default function (event:any) {
    event.preventDefault()
    alert(this.getAttribute("href"))
}