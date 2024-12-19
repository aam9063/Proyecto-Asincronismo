/*
Una promesa tiene 3 estados: 
- Pending: No se ha cumplido ni rechazado (se está ejecutando)
- Resolved: Se cumplió la promesa
- Rejected: Se rechazó la promesa

Se crea con la palabra reservada Promise
Una promesa es una funcíón con dos funciones dentro de la misma función: resolve y reject
*/

const promise = new Promise(function(resolve, reject) {
    resolve('hola');
});

const cows = 15; // cantidad de vacas
const countCows = new Promise((resolve, reject) => {
    if (cows >= 10) {
        resolve(`We have ${cows} cows on the farm`);
    } else {
        reject('We do not have enough cows');
    }
})

.catch((error) => {
    console.log(error);
})

// Método final: cuando termina la promesa (indistintamente si se resuelve o se rechaza)
.finally(() => 
    console.log('Promise finished')
)

