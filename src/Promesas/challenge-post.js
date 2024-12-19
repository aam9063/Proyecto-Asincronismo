// Guardar elementos en la API
import fetch from "node-fetch";

const API = "http://api.escuelajs.co/api/v1"; // referencia de la API que vamos a consumir

function postData(url_API, data) {
    const response = fetch(url_API, {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    return response;
}

// Crear el nuevo producto
const data = {
    "title": "212",
    "price": 212,
    "description": "A description",
    "categoryId": 1,
    "images": [
        "https://placeimg.com/640/480/any"
    ]
}

postData(`${API}/products`, data)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));