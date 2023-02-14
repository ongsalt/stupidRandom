const sourceElement = document.getElementById('source')
const resultElement = document.getElementById('result')

const sourcelangElement = document.getElementById('sourcelang')
const targetlangElement = document.getElementById('targetlang')


const dictionary = {
    'ธีร์': 'เกย์ไทย',
    'นคร': 'ขี้โม้',
    'นัต': 'น้ำกู',    
}

let previousSource;

function generateRegExp(dictionary) {
    const reg = new RegExp(Object.keys(dictionary).join("|"), "g");
    return reg
}

const reg = generateRegExp(dictionary)

function translate(source) {
    const formatted = source.split(reg).map(text => ({ text, isReplaced: false }))
    let index = 1;
    const noMetadata = source.replace(reg, (matched) => {
        formatted.splice(index, 0, {
            text: dictionary[matched],
            isReplaced: true
        })
        index += 2;
        return dictionary[matched]
    });

    console.log(formatted)

    return formatted
}

sourceElement.onkeyup = event => {
    if (previousSource === sourceElement.value) {
        return
    }
    const source = event.target.value
    console.log(source);
    const translated = translate(source);

    // Compare translated -> Fuck this is React useState reimplement

    resultElement.innerHTML = ''; // clear all node
    translated.forEach((each, index) => {  // insert new 
        const newElement = document.createElement('span')
        newElement.innerText = each.text
        // blink only if
        if (each.isReplaced && translated.at(-1).text === '' && index === translated.length - 2) {
            newElement.classList.add('replaced')
        }
        resultElement.appendChild(newElement)
    })

    previousSource = sourceElement.value
}