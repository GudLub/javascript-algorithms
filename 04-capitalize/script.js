/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
*/

function capitalize (str) {
    const arr = str.trim().split(' ');
    const result = [];
    for (i = 0; i < arr.length; i++)
    if (arr[i] !== '') {
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
    result.push(arr[i]);
    } else {
        return str;
    }
    return result.join(' ');
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(capitalize('молодость всё простит')); // "Молодость Всё Простит"
