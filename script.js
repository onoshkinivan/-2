
// Дан инпут и абзац. При клике на кнопку запишите значение инпута в конец текста абзаца.
let input = document.querySelector('.input');
let block = document.querySelector('.block');
let btn = document.querySelector('#btn');

btn.addEventListener('click', (event) => {
    event.preventDefault();
    let str = input.value;
    str = str.split("");
    block.append(input.value);
})

// Дан инпут. В него вводится число. При клике на кнопку найдите сумму цифр этого числа.
let btnq = document.querySelector('#btnq');
let block1 = document.querySelector('#sumOutput');
btnq.addEventListener('click', (event) => {
    event.preventDefault();
    let str = input.value;
    str = str.split("");
    let numbers = [];
    str.forEach(function (element) {
        numbers.push(+element);
    })
    let sum = 0;
    for (let i of numbers) {
        sum = sum + i;
    }
    block1.append(sum);
})

// В инпут вводится ФИО через пробел. При клике на кнопку запишите фамилию, имя и отчество в анкету.


// Дан инпут. В него вводится текст. При клике на кнопку узнайте количество слов в этом тексте.



