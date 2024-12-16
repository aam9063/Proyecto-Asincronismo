/*
Tienes la función exeCallback que recibirá un callback, es decir, una función como parámetro.
Tu reto es ejecutar esa función con un tiemnpo de demora de 2 segundos.
Para hacer que la función se demore dos segundos debes de usar la función setTimeout,
pero para ejecutarla debes de llamarla mediante el namespace windows para poder 
monitorear su uso en la ejecución de pruebas.
*/

export function exeCallback(callback) {
    // Tu código aquí:
    window.setTimeout(callback, 2000);
}