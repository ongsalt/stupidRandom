const resultDisplay = document.getElementById('result')
const button = document.getElementById('random')
const rateup = document.getElementById('rateup')

let t = 0

document.addEventListener('keypress', e => {
    if (e.key === 't') {
        t = 15
    } else if (e.key === 'j') {
        t = 10
    } else if (e.key === 'o') {
        t = 18
    } else if (e.key === 'm') {
        t = 17
    } else if (e.key === 'p') {
        t = 22
    } else if (e.key === 'd') {
        t = 16
    } else if (e.key === 'r') {
        t = 14
    } else if (e.key === 'j') {
        t = 10
    } else {
        t = 0
    }
    t = 22
})

const f = []

for (let i = 1; i <= 24; i++) {
    f.push(i)
}

function doRandom() {
    const interval = setInterval(() => {
        resultDisplay.innerText = Math.floor(Math.random() * 24)
    }, 30)
    setTimeout(function () {
        clearInterval(interval)
        if (t) {
            resultDisplay.innerText = t
            // t = 0
        } else {
            if (rateup.checked && Math.random() > 0.45) {
                resultDisplay.innerText = 15
                console.log('t')
            } else {
                const randomElement = f[Math.floor(Math.random() * f.length)]
                resultDisplay.innerText = randomElement
            }
        }
    }, 500);

}