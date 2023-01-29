export default function() {
    document.querySelectorAll("a").forEach(el => {
        el.onclick = function(event) {
            event.preventDefault()

            window.currentFrame = this.href
        }
    })
}