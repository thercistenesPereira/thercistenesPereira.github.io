'use strict'
const subtituloCapa = document.querySelector('#subtituloCapa')

function typeWrite(element) {
    const textoArray = element.innerHTML.split('')
    element.innerHTML = ''
    textoArray.forEach((letra, index) => {
        setTimeout(() => {
            element.innerHTML += letra
        }, 75 * index)
    });
}

typeWrite(subtituloCapa)