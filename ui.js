const infoButton = document.getElementById("infobutton")
const info = document.getElementById("info")
const overlay = document.getElementById("overlay")

infoButton.onclick = event => {
    info.classList.toggle('fhide')
    overlay.classList.toggle('hide')
}

overlay.onclick = event => {
    overlay.classList.toggle('hide')
    info.classList.toggle('fhide')
}