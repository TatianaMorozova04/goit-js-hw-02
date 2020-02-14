let input;
const numbers = [];
let total = 0;
const calcNumbers = function () {
    while (true) {
        input = prompt('Введи число');
        const value = Number(input);
        isNaN(value)
            ? alert('Было введено не число, попробуйте еще раз')
            : numbers.push(value);

        if (input === null) {
            for (const number of numbers) {
                total += number;
            }
            alert(`Общая сумма чисел равна ${total}`);
            break;
        }
    }
};
calcNumbers ();