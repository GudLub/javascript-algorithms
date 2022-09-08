/*
 * Задача 10: «Факториал»
 *
 * Напишите функцию factorial(n), возвращающую факториал неотрицательного
 * целого числа. Факториал — это произведение всех натуральных чисел
 * от 1 до n включительно. Факториал 0 равен 1.
 * 
*/

function factorial (n) {
    let result = 1;
    if (n < 0) {
        return false;
    } if (n === 1 || n === 0) {
        return result;
    } if (n % n === 0 && n > 1) {
    for(let i = 2; i <= n; i++) {
       result = result * i;
    }
    return result;
    } else {
    return false;
    }
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(6)); // 720
