const resultDisplay = document.getElementById('result')
const button = document.getElementById('random')
const rateup = document.getElementById('rateup')
const rateup2 = document.getElementById('rateup2')

let t = 0
let kmode = true
let rateups = []

rateup.addEventListener('click', (e) => {
    if (e.target.checked) {
        rateups.push(15)
    } else {
        rateups = rateups.filter(each => each!=15)
    }
})

rateup2.addEventListener('click', (e) => {
    if (e.target.checked) {
        rateups.push(17)
    } else {
        rateups = rateups.filter(each => each!=17)
    }
})

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
    } else if (e.key === 'f') {
        t = 21
    } else {
        t = 0
    }
})

const pool = []

for (let i = 1; i <= 24; i++) {
    pool.push(i)
}

function choose(a) {
    return a[Math.floor(Math.random() * a.length) % a.length]
}

function easeOutExpo(x) {
    return 1 - Math.sqrt(1 - Math.pow(x, 2));
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function magic() {
    for (let i = 0; i / 30 <= 1; i++) {
        const wait = easeOutExpo(i / 30) ** 1.5 * 500;
        // console.log(i / 20, wait);
        await sleep(wait);
        resultDisplay.innerText = choose(pool)
    }
}

async function doRandom() {
    await magic()
    if (t) {
        if (kmode) {
            resultDisplay.innerText = t
            await sleep(800)
            resultDisplay.innerText = choose(pool)
            await sleep(500)
        }
        resultDisplay.innerText = t
        // t = 0
    } else {
        if (rateups.length !== 0) {
            console.log('Rate up enebled')
            if (Math.random() > 0.45) { // if rateup then randomly choose between those
                console.log('Choosing rate up value')
                if (kmode) {
                    resultDisplay.innerText = choose(rateups)
                    await sleep(800)
                    resultDisplay.innerText = choose(pool)
                    await sleep(500)
                }
                resultDisplay.innerText = choose(rateups)
            } else {
                console.log('Failed to get rate up value')
                resultDisplay.innerText = choose(pool)
            }
        } else {
            console.log('Rate up disabled')
            resultDisplay.innerText = choose(pool)
        }
    }
}