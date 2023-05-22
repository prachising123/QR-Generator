const form = document.querySelector("form");
const input = document.querySelector("input");
const img = document.querySelector("img");
const select = document.querySelector("#size");

async function getData(e) {
    e.preventDefault()
    let response = await fetch(`http://api.qrserver.com/v1/create-qr-code/?size=${size.value}&data=${input.value}`)
     img.setAttribute('src', response.url)
     form.reset()
     
}

form.addEventListener('submit', getData)