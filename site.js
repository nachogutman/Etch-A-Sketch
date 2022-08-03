function start(length){
    const container = document.querySelector('.grid-container');
    container.classList.add('test');
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

const defaultLength = 256;
start(defaultLength);