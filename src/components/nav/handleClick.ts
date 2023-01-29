export default function (event:any) {
    event.preventDefault()
    window.currentFrame = event.target.getAttribute("href")
}