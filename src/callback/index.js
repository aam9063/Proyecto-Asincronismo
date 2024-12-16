// Callback es una función que se pasa como argumento a otra función y se ejecuta después de un evento o proceso.

// Reto: sumar dos elementos
function sum(num1, num2) {
    return num1 + num2;
}

// Le pasamos la función callback como argumento
// function calc(num1, num2, callback) {
//     return callback(num1, num2);
// };
function calc(num1, num2, sumNumbers) {
    return sumNumbers(num1, num2);
}
console.log(calc(2, 2, sum)); // No agregamos los paréntesis ni los argumentos que vas a recibir, sino se lo pasaríamos inmediatamente para que no se ejecute la función


// Reto 2: con setTimeout 
// Recibe una función con argumentos pasasdo un tiempo determinado
setTimeout(function() {
    console.log('Hola JS');
}, 5000);

// Función anónima de saludo
function greeting(name) {
    console.log(`Hola ${name}`);
}
setTimeout(greeting, 2000, 'Albert'); // Pasamos la función y el tiempo en milisegundos