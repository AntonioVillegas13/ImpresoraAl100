const VALOR_IVA = 12;
const producto = [
  {
    avatar_url:
      "https://modernaalimentos.com.ec/wp-content/uploads/2022/01/moderna-alimentos-productos-comercializados-bizcochox.jpg",
    producto: "Bizcochox",
    cantidadProducto: "5",
    cantidadConfirmada: "5",
    precio: "2.50",
    precioventa: "3.50",
    preciototal: "25",
  },
];

const carrito = [
  {
    producto: {
      nombre: "Aceite",
      precio: 20,
      stock: 120,
      iva: true,
      imagen:
        "https://modernaalimentos.com.ec/wp-content/uploads/2022/01/moderna-alimentos-harina-key-plus.jpg",
    },
    cantidad: 10,
  },
];
export const agregarproducto = (productonuevo) => {
  carrito.push(productonuevo);
  console.log("---------------------------------------------------------");
  console.log("El arreglo del producto es: ", carrito);
};
export const calcularFactura = () => {
  let iva = 0;
  let subtotal = 0;
  carrito.forEach((producto) => {
    if (producto.producto.iva) {
      iva += ((producto.producto.precio * VALOR_IVA) / 100) * producto.cantidad;
    }
    subtotal += producto.producto.precio * producto.cantidad;
  });
  return { iva, subtotal };
};
export const traerproductos = () => {
  return carrito;
};
