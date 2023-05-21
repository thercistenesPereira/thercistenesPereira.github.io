'use strict';
const subtituloCapa = document.querySelector('#subtituloCapa');

function typeWrite(element) {
    const textoArray = element.innerHTML.split('')
    element.innerHTML = ''
    textoArray.forEach((letra, index) => {
        setTimeout(() => {
            element.innerHTML += letra
        }, 75 * index)
    });
}


const engrenagem = document.querySelector('#engrenagem');
const bbox = engrenagem.getBBox();
const centerX = bbox.x + bbox.width / 2;
const centerY = bbox.y + bbox.height / 2;

function animateRotation() {
  rotation += 1;
    engrenagem.setAttribute('transform', `rotate(${rotation} ${centerX} ${centerY})`);
    engrenagem.matches(':hover') ? setTimeout(animateRotation, 1) : setTimeout(animateRotation, 30);  
}
let rotation = 0;
animateRotation();
