const container = document.querySelector('.grid-container');

const length = document.querySelector('#size');
let lengthSelected = size.value * size.value;

const mode = document.getElementById('modeSelector');

start(lengthSelected);

function start(length){

    container.style.gridTemplateColumns = 'repeat(' + Math.sqrt(length) + ', auto)';
    
    for(let i = 0; i < length; i++){

        let divs = document.createElement('div');
        divs.classList.add('grid-item');
        
        divs.addEventListener('mousemove', (e) => {
            if(e.buttons == 1){
                changeColor(e);
                unFocus();
            }
        })

        container.appendChild(divs);

    }
}

function changeColor(e){

    const colorPicker = document.getElementById('colorSelector');

    let color = colorPicker.value;
    if(mode.value == 0){
        colorPicker.addEventListener("change", () => {
            color = event.target.value;
        });
        e.target.style.border = 'none';
    }
    if(mode.value == 1){
        color = '#64747c';
        e.target.style.border = '.5px solid rgba(0, 0, 0, .05)';
    }
    if(mode.value == 2){
        getRandomRgb();
        color = `rgb(${r},${g},${b})`;  
    }

    e.target.style.backgroundColor = color;
}

function restartFunction() {
    container.innerHTML = '';
    start(lengthSelected);
}

function updateSizePicker(val) {
    document.getElementById('number').textContent=val + " x " + val; 
    lengthSelected = val * val;
    restartFunction();
}

var unFocus = function () {
    if (document.selection) {
      document.selection.empty()
    } else {
      window.getSelection().removeAllRanges()
    }
}

let r, g, b;

function getRandomRgb(){
    const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
    r = randomBetween(0, 255);
    g = randomBetween(0, 255);
    b = randomBetween(0, 255);
}