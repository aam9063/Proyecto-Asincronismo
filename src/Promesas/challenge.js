/*
Trabajar con la API con el uso cotidiano de un callback
Llamar al paquete que hemos instalado (npm i xmlhttprequest) para hacer peticiones a una API
*/

import fetch from "node-fetch";


// Llamar a la API. La variable que le vamos a pasar es en mayúsculas porque es una constante y no va a cambiar dentro de nuestros archivos

const API = "http://api.escuelajs.co/api/v1"; // referencia de la API que vamos a consumir

// Peticiones
// fetchData nos permite recibir la url de la API y devuelve una promesa
function fetchData(url_API) {
    return fetch(url_API)
    .then(response => {
        if(!response.ok) {
            throw new Error(`Error en la solicitud a ${url_API}: ${response.status} ${response.statusText}`);
        }
        return response.json();
    });
}

// Consumir la API usando promesas
fetchData(`${API}/products`)
    .then(data1 => {
        console.log(data1[0]); // Mostrar el primer producto
        return fetchData(`${API}/products/${data1[0].id}`);
    })
    .then(data2 => {
        console.log(data2.title); // Mostrar el título del primer producto
        return fetchData(`${API}/categories/${data2.category?.id}`);
    })
    .then(data3 => {
        console.log(data3.name); // Mostrar el nombre de la categoría del primer producto
    })
    .catch(error => {
        console.error(error);
    })
    .finally(() => {
        console.log('Proceso terminado');
    });