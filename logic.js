let from_input = document.querySelector("#from")
let to_input = document.querySelector("#to")
let out_input = document.querySelector("#output")

function random() {
    let max = from_input.value
    let min = to_input.value
    getRandomIntInclusive(min, max)
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let output = Math.floor(Math.random() * (max - min + 1) + min);
    out_input.innerText = output
}