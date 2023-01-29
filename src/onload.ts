export default function() {
    document.querySelectorAll("a").forEach(el => {
        el.onclick = function(event) {
            event.preventDefault()
            console.log(123)
        }
    })
}