
//OBTENER ELEMENTO SEGUN ID

let a = document.getElementById("titulo");
let div = document.getElementById("container");

console.log(a.innerText);
console.log(div.innerText);

//cambio el contenido del elemento

titulo.innerText = "Este es mi proyecto"
console.log(a.innerText)

//GENERAR NUEVO NODO CON CONTENIDO DENTRO DEL ELEMENTO SELECCIONADO 
div.innerHTML = "<h2>Hola Juan!</h2><p>Aprobame :)</p>"

//LISTA DE PRODUCTOS EN EL CARRITO Y AGREGA PRODUCTO MEDIANTE PROMPT
let agregar = prompt("ingrese el producto que desea agregar")
console.log(agregar)
let p = document.getElementById("parrafo");
let producto = document.getElementById("card");
let listas = ["Pollera Sofia", "Remera Umma", "Pantalón Berlin", "Short Melina"];

for (const lista of listas) {
  let li = document.createElement("li");
    li.innerHTML = lista
    producto.appendChild(li);
    parrafo.innerText = agregar
}
