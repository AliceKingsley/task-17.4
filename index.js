const button = document.querySelector('.generate__button');
const divArray = document.querySelector('.result__array');
const divMin = document.querySelector('.result__min');
const divMax = document.querySelector('.result__max');
const divMedium = document.querySelector('.result__medium');
const divSum = document.querySelector('.result__sum');
const divMultiple = document.querySelector('.result__multiple');

button.addEventListener("click", createRandomNumbers);

function createRandomNumbers() {
    let arr = [];
    let str = '';
    let min = 0;
    let max = 0;
    let medium = 0;
    let sum = 0;
    let multiple = 1;

    clear();
    for (let i = 0; i < 10; i++) {
        arr[i] = Math.round(Math.random()*20 - 10);
    }

    for (const item of arr) {
        str += item + ' ';
    }

    divArray.textContent = `Сгенерировали: ${str}`;

    for (let i = 0; i < arr.length; i++) {
        
        if (arr[i] < min) {
            min = arr[i];
        }

        if (arr[i] > max) {
            max = arr[i];
        }

        sum += arr[i];
        multiple *= arr[i];
    }

    medium = sum / 10;

    divMin.textContent = `Минимальное: ${min}`;
    divMax.textContent = `Максимальное: ${max}`;
    divMedium.textContent = `Среднее арифметическое: ${medium}`;
    divSum.textContent = `Сумма чисел: ${sum}`;
    divMultiple.textContent = `Произведение чисел: ${multiple}`;
}

function clear() {
    divArray.textContent = '';
    divMin.textContent = '';
    divMax.textContent = '';
    divSum.textContent = '';
}