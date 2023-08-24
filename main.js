const carrito = [
 { id: 1, nombre: "camisa", precio: 1000 },
     { id: 2, nombre: "gorra", precio: 700 },
      { id: 3, nombre: "zapato", precio: 230 },
  { id: 4, nombre: "media", precio: 175 },
    ];
    
 localStorage.setItem("carrito1", JSON.stringify(carrito));
    




let eliminar = document.getElementById("eliminar");
let carritos = [];
let carritoStorage = localStorage.getItem("carrito");

if (carritoStorage) {
  carritos = JSON.parse(carritoStorage);
} else {
  let div = document.createElement("div");
  div.innerHTML = "No hay productos en el carrito";
  document.body.append(div);
}

carrito.forEach((producto) => {
  let div = document.createElement("div");
  div.innerHTML = `
    <h2>Id: ${producto.id}</h2>
    <p>Nombre: ${producto.nombre}</p>
    <b>$${producto.precio}</b>
  `;
  document.body.append(div);
});

eliminar.addEventListener("click", () => {
  localStorage.clear();
  location.reload();
  alert("carrito borrado");
});