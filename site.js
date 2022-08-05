function start(length){
    container.style.gridTemplateColumns = 'repeat(' + Math.sqrt(length) + ', auto)';
    for(let i = 0; i < length; i++){
        let divs = document.createElement('div');
        divs.classList.add('grid-item');
        divs.classList.add('pixel');
        container.appendChild(divs);

        divs.addEventListener('mouseover', () => {
            divs.style.backgroundColor = color;
            divs.style.border = 'none';
        })

    }

    const colorPicker = document.getElementById('colorSelector');

    let color = '#000000';
    colorPicker.addEventListener("change", () => {
        color = event.target.value;
        
    }, false);
}

const container = document.querySelector('.grid-container');
const length = document.querySelector('#size');
let lengthSelected = size.value * size.value;
start(lengthSelected);

function restartFunction() {
    console.log(lengthSelected);
    container.textContent = '';
    start(lengthSelected);
}

function updateSizePicker(val) {
    document.getElementById('number').textContent=val + " x " + val; 
    lengthSelected = val * val;
    restartFunction();
  }