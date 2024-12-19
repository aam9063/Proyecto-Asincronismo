/*
Trabajar con la API con el uso cotidiano de un callback
Llamar al paquete que hemos instalado (npm i xmlhttprequest) para hacer peticiones a una API
*/

const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

// Llamar a la API. La variable que le vamos a pasar es en mayúsculas porque es una constante y no va a cambiar dentro de nuestros archivos

const API = "http://api.escuelajs.co/api/v1"; // referencia de la API que vamos a consumir

// Peticiones
// fecthData nos permite recibir la url de la API y un callback (función anónima) para recibir la solicitud de la API. Tendrá 2 argumentos

function fecthData(url_API, callback) {
  let xhttp = new XMLHttpRequest(); // Instancia de la petición
  xhttp.open("GET", url_API, true); // Abrimos la petición
  xhttp.onreadystatechange = function (event) {
    // Escuchamos lo que va a hacer la petición
    if (xhttp.readyState === 4) {
      // Validamos si la petición se completó
      if (xhttp.status === 200) {
        // Validamos si la petición fue exitosa
        callback(null, JSON.parse(xhttp.responseText)); // Si la petición fue exitosa, ejecutamos el callback con el resultado de la petición
      } else {
        const error = new Error("Error" + url_API); // Si la petición no fue exitosa, ejecutamos el callback con un error
        return callback(error, null); // Es null porque no se devuelve ningún error
      }
    }
  };
  xhttp.send(); // Enviamos la petición
}

// Consumir la API
// Llamamos a esas solicitudes con los argumentos de una url_API y un callback
// Ir a la petición de products con una función anónima que recibe un error o data

fecthData(`${API}/products`, function (error1, data1) {
  // 1a petición
  if (error1) return console.error(error1); // Si hay un error lo mostramos
  fecthData(`${API}/products/${data1[0].id}`, function (error2, data2) {
    // 2da petición
    if (error2) return console.error(error2); // Si hay un error lo mostramos
    // Acceso a datos de data2.category.id (le ponemos el '?' para validar si existe la categoría y no cause un error de nombres en el acceso a datos)
    fecthData(
      `${API}/categories/${data2.category?.id}`, function (error3, data3) { // 3ra petición. La '?' es para validar si existe la categoría
        if (error3) return console.error(error3); // Si hay un error lo mostramos
        console.log(data1[0]); // Mostramos el primer producto
        console.log(data2.title); // Mostramos el título del producto en partiuclar
        console.log(data3.name); // Mostramos el nombre de la categoría del producto
      }
    );
  });
});

/*



*/
