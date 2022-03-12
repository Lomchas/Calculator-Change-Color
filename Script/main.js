let screenTab = document.querySelector('#resultado');
const btn = document.querySelectorAll('button');
let activarOp = false;

document.addEventListener('DOMContentLoaded', () => {
    calculadora();
})

const writeNum = (num1) => {
    activarOp = false;
    let numOne = num1.textContent;
    screenTab.value == 0 ? screenTab.value = numOne : screenTab.value += numOne;
}

const operador = (element, operador) => {
    activarOp = true;
    const num1 = Number(screenTab.value);
    const typeOperation = operador;
    screenTab.value = element.textContent;
    return { num1, typeOperation, operador }
}

const getResult = (num1, type) => {
    const num2 = Number(screenTab.value);
    switch (type) {
        case 'sumar':
            let total = num1 + num2;
            break;
        case 'resta':
            let total = num1 - num2;
        default:
            break;
    }
}

const result = (operation) => {
    operation === 'BORRAR' ? screenTab.value = '0' : getResult();
}

const calculadora = () => {
    btn.forEach(element => {
        element.addEventListener('click', (e) => {
            let t = e.target;
            let d = t.dataset;
            if (d.num) {
                writeNum(t);
            }
            if (d.operador) {
                operador(t, d.operador)
            }
            if (d.puntuacion) {

            }
            if (d.result) { }
        })
    })
}





