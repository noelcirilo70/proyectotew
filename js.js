let total = 0;

function agregarAlCarrito(precio) {
  total += precio;
  document.getElementById("total").innerHTML = "Total: Bs " + total;

  const carrito = document.getElementById("carrito");
  const nuevoItem = document.createElement("li");
  nuevoItem.innerText = "Producto: Bs " + precio;
  carrito.appendChild(nuevoItem);
}