// PRODUCTOS
const productos = {
 papeleria: [
  { 
    id: 1, 
    nombre: "Cuaderno 50 hojas 1/2 oficio cuadricula normal LIDER", 
    precio: 0,
    imagen: "img/cuaderno-50h-medio-oficio-lider.jpg"
  },

  {
   id: 2,
   nombre: "Cuaderno espiral 1/2 oficio 80 hojas ARTESANAL",
   precio: 0,
   imagen: "img/cuaderno-espiral-80h-artesanal.jpg"
  },

  {
   id: 3,
   nombre: "Cuaderno espiral 1/2 oficio 100 hojas ARTESANAL",
   precio: 0,
   imagen: "img/cuaderno-espiral-100h-artesanal.jpg"
  },

  { 
    id: 4, 
    nombre: "Cuaderno espiral 1/2 oficio 100 hojas WINNER", 
    precio: 0,
    imagen: "img/cuaderno-espiral-100h-winner.jpg"
  },

  { 
    id: 5, 
    nombre: "Cuaderno espiral 1/2 oficio 200 hojas ARTESANAL", 
    precio: 0,
    imagen: "img/cuaderno-espiral-200h-artesanal.jpg"
  },

  { 
    id: 6, 
    nombre: "Cuaderno espiral 1/2 oficio 100 hojas cuadricula elva ARTESANAL", 
    precio: 0,
    imagen: "img/cuaderno-espiral-100h-cuadricula-elva-medio-oficio-artesanal.jpg" 
  },

  { 
    id: 7, 
    nombre: "Cuaderno empastado 1/2 oficio 100 hojas ONE", 
    precio: 0,
    imagen: "img/cuaderno-empastado-100h-medio-oficio-one.jpg"
  },

  { 
    id: 8, 
    nombre: "Cuaderno espiral 1/2 oficio 100 hojas rayado horizontal ARTESANAL", 
    precio: 0,
    imagen: "img/cuaderno-espiral-100h-rayado-horizontal-medio-oficio-artesanal.jpg"
  },

  { 
    id: 9, 
    nombre: "Cuaderno espiral tam carta 80 hojas ARTESANAL", 
    precio: 0,
    imagen: "img/cuaderno-espiral-80h-carta-artesanal.jpg"
  },

  { 
    id: 10, 
    nombre: "Cuaderno espiral tam carta 100 hojas ARTESANAL", 
    precio: 0,
    imagen: "img/cuaderno-espiral-100h-carta-artesanal.jpg"
  },

  { 
    id: 11, 
    nombre: "Cuaderno espiral tam carta 200 hojas AI", 
    precio: 0,
    imagen: "img/cuaderno-espiral-200h-carta-ai.jpg"
  },

  { 
    id: 12, 
    nombre: "Cuaderno espiral tam carta 100 hojas LIDER", 
    precio: 0,
    imagen: "img/cuaderno-espiral-100h-carta-lider.jpg"
  },

  { 
    id: 13, 
    nombre: "Cuaderno espiral tam carta 100 hojas MOCHILERA", 
    precio: 0,
    imagen: "img/cuaderno-espiral-100h-carta-mochilera.jpg"
  },

  { 
    id: 14, 
    nombre: "Cuaderno espiral tam carta 100 hojas WINNER", 
    precio: 0,
    imagen: "img/cuaderno-espiral-100h-carta-winner.jpg"
  },

  { 
    id: 15, 
    nombre: "Cuaderno espiral tam carta 100 hojas cuadricula elva ARTESANAL", 
    precio: 0,
    imagen: "img/cuaderno-espiral-100h-cuadricula-elva-carta-artesanal.jpg"
  },

  { 
    id: 16, 
    nombre: "Cuaderno espiral tam oficio 100 hojas ARTESANAL", 
    precio: 0,
    imagen: "img/cuaderno-espiral-100h-oficio-artesanal.jpg"
  },

  { 
    id: 17, 
    nombre: "Cuaderno espiral tam oficio 100 hojas ONE", 
    precio: 0,
    imagen: "img/cuaderno-espiral-100h-oficio-one.jpg"
  },

  { 
    id: 18, 
    nombre: "Cuaderno espiral tam oficio 100 hojas ABC", 
    precio: 0,
    imagen: "img/cuaderno-espiral-100h-oficio-abc.jpg"
  },

  { 
    id: 19, 
    nombre: "Hojas bond tam carta BRIO", 
    precio: 0,
    imagen: "img/hojas-bond-carta-brio.jpg"
  },

  { 
    id: 20, 
    nombre: "Hojas bond tam oficio BRIO", 
    precio: 0,
    imagen: "img/hojas-bond-oficio-brio.jpg"
  },

  { 
    id: 21, 
    nombre: "Hojas bond tam carta CHAMEX", 
    precio: 0,
    imagen: "img/hojas-bond-carta-chamex.jpg"
  },

  { 
    id: 22,
    nombre: "Hojas bond tam oficio CHAMEX", 
    precio: 0,
    imagen: "img/hojas-bond-oficio-chamex.jpg"
  },

  { 
    id: 23, 
    nombre: "Hojas bond tam doble carta", 
    precio: 0,
    imagen: "img/hojas-bond-doble-carta.jpg"
  },

  { 
    id: 24, 
    nombre: "Hojas bond tam doble oficio", 
    precio: 0,
    imagen: "img/hojas-bond-doble-oficio.jpg"
  },

  { 
    id: 25, 
    nombre: "Hojas trapper tam carta 5 orificios cuadricula normal ABC", 
    precio: 0,
    imagen: "img/hojas-trapper-5-orificios-cuadricula-normal-carta-abc.jpg" 
  },

  { 
    id: 26, 
    nombre: "Hojas trapper tam carta 3 perforaciones rayado ABC", 
    precio: 0,
    imagen: "img/hojas-trapper-3-perforaciones-rayado-carta-abc.jpg"
  },

  { 
    id: 27, 
    nombre: "Hojas trapper punteadas tam carta 5 perforaciones ABC", 
    precio: 0,
    imagen: "img/hojas-trapper-punteadas-5-perforaciones-carta-abc.jpg"
  },

  { 
    id: 28, 
    nombre: "Hojas de carpeta cuadricula normal LIDER", 
    precio: 0,
    imagen: "img/hojas-carpeta-cuadricula-normal-lider.jpg"
  },

  { 
    id: 29, 
    nombre: "Hojas de carpeta cuadricula elva LIDER", 
    precio: 0,
    imagen: "img/hojas-carpeta-cuadricula-elva-lider.jpg"
  },

  { 
    id: 30, 
    nombre: "Hojas de carpeta cuadricula normal MOCHILERA", 
    precio: 0,
    imagen: "img/hojas-carpeta-cuadricula-normal-mochilera.jpg"
  },

  { 
    id: 31, 
    nombre: "Hojas de carpeta cuadricula elva MOCHILERA", 
    precio: 0,
    imagen: "img/hojas-carpeta-cuadricula-elva-mochilera.jpg"
  },

  { 
    id: 32, 
    nombre: "Hojas de carpeta blancas LIDER", 
    precio: 0,
    imagen: "img/hojas-carpeta-blancas-lider.jpg"
  },

  { 
    id: 33, 
    nombre: "Hojas cuadernillo tam carta ARTESANAL", 
    precio: 0,
    imagen: "img/hojas-cuadernillo-carta-artesanal.jpg"
  },

  { 
    id: 34, 
    nombre: "Hojas cuadernillo tam oficio ARTESANAL", 
    precio: 0,
    imagen: "img/hojas-cuadernillo-oficio-artesanal.jpg"
  },

  { 
    id: 35, 
    nombre: "Hojas de colores tam oficio MADEPA", 
    precio: 0,
    imagen: "img/hojas-colores-oficio-madepa.jpg"
  },

  { 
    id: 36, 
    nombre: "Hojas de colores tam carta MADEPA", 
    precio: 0,
    imagen: "img/hojas-colores-carta-madepa.jpg"
  },

  { 
    id: 37, 
    nombre: "Hojas de cartulina blanco tam carta", 
    precio: 0,
    imagen: "img/hojas-cartulina-blanco-carta.jpg"
  },

  { 
    id: 38, 
    nombre: "Hojas de cartulina negro tam carta", 
    precio: 0,
    imagen: "img/hojas-cartulina-negro-carta.jpg"
  },

  { 
    id: 39, 
    nombre: "Hojas de cartulina colores pasteles tam carta", 
    precio: 0,
    imagen: "img/hojas-cartulina-colores-pasteles-carta.jpg"
  },

  { 
    id: 40, 
    nombre: "Hojas de cartulina colores fuertes tam carta", 
    precio: 0,
    imagen: "img/hojas-cartulina-colores-fuertes-carta.jpg"
  },

  { 
    id: 41, 
    nombre: "Hojas de cartulina blanco tam oficio", 
    precio: 0,
    imagen: "img/hojas-cartulina-blanco-oficio.jpg"
  },

  { 
    id: 42, 
    nombre: "Hojas de cartulina negro tam oficio", 
    precio: 0,
    imagen: "img/hojas-cartulina-negro-oficio.jpg"
  },

  { 
    id: 43, 
    nombre: "Hojas de cartulina colores pasteles tam oficio", 
    precio: 0,
    imagen: "img/hojas-cartulina-colores-pasteles-oficio.jpg"
  },

  { 
    id: 44, 
    nombre: "Hojas de cartulina colores fuertes tam oficio", 
    precio: 0,
    imagen: "img/hojas-cartulina-colores-fuertes-oficio.jpg"
  },

  { 
    id: 45, 
    nombre: "Hojas cartulina hilada tam oficio", 
    precio: 0,
    imagen: "img/hojas-cartulina-hilada-oficio.jpg"
  },

  { 
    id: 46, 
    nombre: "Papel cebolla tam oficio", 
    precio: 0,
    imagen: "img/papel-cebolla-oficio.jpg"
  },

  { 
    id: 47, 
    nombre: "Papel mantequilla tam oficio", 
    precio: 0,
    imagen: "img/papel-mantequilla-oficio.jpg"
  },

  { 
    id: 48, 
    nombre: "Papel marquilla tam oficio", 
    precio: 0,
    imagen: "img/papel-marquilla-oficio.jpg"
  },

  { 
    id: 49, 
    nombre: "Papel fotografico tam A4", 
    precio: 0,
    imagen: "img/papel-fotografico-a4.jpg"
  },

  { 
    id: 50, 
    nombre: "Papel sabana tam oficio", 
    precio: 0,
    imagen: "img/papel-sabana-oficio.jpg"
  },

  { 
    id: 51, 
    nombre: "Papel craft tam oficio", 
    precio: 0,
    imagen: "img/papel-craft-oficio.jpg"
  },

  { 
    id: 52, 
    nombre: "Papel milimetrado tam carta", 
    precio: 0,
    imagen: "img/papel-milimetrado-carta.jpg"
  },

  { 
    id: 53, 
    nombre: "Papel milimetrado tam oficio", 
    precio: 0,
    imagen: "img/papel-milimetrado-oficio.jpg"
  },

  { 
    id: 54, 
    nombre: "Papel carbonico tam oficio color negro ", 
    precio: 0,
    imagen: "img/papel-carbonico-oficio-negro.jpg"
  },

  { 
    id: 55, 
    nombre: "Papel carbonico tam oficio color azul", 
    precio: 0,
    imagen: "img/papel-carbonico-oficio-azul.jpg"
  },

  { 
    id: 56, 
    nombre: "Tapas de carpeta plastificadas", 
    precio: 0,
    imagen: "img/tapas-carpeta-plastificadas.jpg"
  },

  { 
    id: 57, 
    nombre: "Tapas de carpeta normal", 
    precio: 0,
    imagen: "img/tapas-carpeta-normal.jpg"
  },

  { 
    id: 58, 
    nombre: "Cartapacio tam carta 2 anillos", 
    precio: 0,
    imagen: "img/cartapacio-carta-2-anillos.jpg"
  },

  { 
    id: 59, 
    nombre: "Cartapacio tam carta 3 anillos", 
    precio: 0,
    imagen: "img/cartapacio-carta-3-anillos.jpg"
  },

  { 
    id: 60, 
    nombre: "Cartapacio tam oficio 2 anillos", 
    precio: 0,
    imagen: "img/cartapacio-oficio-2-anillos.jpg"
  },

  { 
    id: 61, 
    nombre: "Cartapacio tam oficio 3 anillos", 
    precio: 0,
    imagen: "img/cartapacio-oficio-3-anillos.jpg"
  },

  { 
    id: 62, 
    nombre: "Archivador rapido tam carta", 
    precio: 0,
    imagen: "img/archivador-rapido-carta.jpg"
  },

  { 
    id: 63, 
    nombre: "Archivador rapido tam oficio", 
    precio: 0,
    imagen: "img/archivador-rapido-oficio.jpg"
  },

  { 
    id: 64, 
    nombre: "Folder amarillo tam carta", 
    precio: 0,
    imagen: "img/folder-amarillo-carta.jpg"
  },

  { 
    id: 65, 
    nombre: "Folder amarillo tam oficio", 
    precio: 0,
    imagen: "img/folder-amarillo-oficio.jpg"
  },

  { 
    id: 66, 
    nombre: "Flip de colores tam carta", 
    precio: 0,
    imagen: "img/flip-colores-carta.jpg"
  },

  { 
    id: 67, 
    nombre: "Flip de colores tam oficio", 
    precio: 0,
    imagen: "img/flip-colores-oficio.jpg"
  }
],
  escritura: [],
  utiles: [],
  artes: [],
 papeles: [
  { id: 101, nombre: "Cartulina blanca pliego", precio: 0 },
  { id: 102, nombre: "Cartulina negra pliego", precio: 0 },
  { id: 103, nombre: "Cartulina colores pasteles pliego", precio: 0 },
  { id: 104, nombre: "Cartulina colores fuertes pliego", precio: 0 },
  { id: 105, nombre: "Papel madera pliego", precio: 0 },
  { id: 106, nombre: "Hoja resma pliego", precio: 0 },
  { id: 107, nombre: "Papel sabana pliego", precio: 0 },
  { id: 108, nombre: "Papel lustroso", precio: 0 },
  { id: 109, nombre: "Papel lustroso punteados", precio: 0 },
  { id: 110, nombre: "Papel lustroso aguayo", precio: 0 },
  { id: 111, nombre: "Papel tornasol", precio: 0 },
  { id: 112, nombre: "Papel 3D", precio: 0 },
  { id: 113, nombre: "Papel araña", precio: 0 },
  { id: 114, nombre: "Papel estañado", precio: 0 },
  { id: 115, nombre: "Papel crepe", precio: 0 },
  { id: 116, nombre: "Papel de regalo media hoja", precio: 0 },
  { id: 117, nombre: "Papel de regalo hoja entera", precio: 0 },
  { id: 118, nombre: "Celofan", precio: 0 },
  { id: 119, nombre: "Vinifan", precio: 0 }
],
  mochilas: [],
  instrumentos: [],
  libros: []
};

let carrito = [];

// MOSTRAR PRODUCTOS
function mostrarSeccion(seccion) {
  const catalogo = document.getElementById("catalogo");
  catalogo.innerHTML = "";

  productos[seccion].forEach(p => {
    const imagenHTML = p.imagen
      ? `<img src="${p.imagen}" alt="${p.nombre}" class="img-producto">`
      : "";

    catalogo.innerHTML += `
      <div class="producto">
        <div class="producto-flex">
          ${imagenHTML}
          <div class="info-producto">
            <h3>${p.nombre}</h3>
            <p>Precio: Bs ${p.precio}</p>
            <button onclick="agregarCarrito(${p.id})">Agregar</button>
          </div>
        </div>
      </div>
    `;
  });
}

// AGREGAR AL CARRITO
function agregarCarrito(id) {
  const producto = Object.values(productos).flat().find(p => p.id === id);
  const existe = carrito.find(p => p.id === id);

  if (existe) {
    existe.cantidad++;
  } else {
    carrito.push({ ...producto, cantidad: 1 });
  }

  alert("Producto agregado");
}

// VER CARRITO
function verCarrito() {
  const div = document.getElementById("carrito");
  div.innerHTML = "";

  if (carrito.length === 0) {
    div.innerHTML = "<p>El carrito está vacío</p>";
    return;
  }

  let total = 0;

  carrito.forEach(p => {
    const subtotal = p.precio * p.cantidad;
    total += subtotal;

    div.innerHTML += `
      <p>
        <strong>${p.nombre}</strong><br>
        Bs ${p.precio} x ${p.cantidad} = Bs ${subtotal}
        <br>
        <button onclick="disminuir(${p.id})">-</button>
        <button onclick="aumentar(${p.id})">+</button>
        <button onclick="eliminar(${p.id})">❌</button>
      </p>
      <hr>
    `;
  });

  div.innerHTML += `<h3>Total: Bs ${total}</h3>`;
}

// AUMENTAR CANTIDAD
function aumentar(id) {
  const producto = carrito.find(p => p.id === id);
  producto.cantidad++;
  verCarrito();
}

// DISMINUIR CANTIDAD
function disminuir(id) {
  const producto = carrito.find(p => p.id === id);
  producto.cantidad--;

  if (producto.cantidad === 0) {
    eliminar(id);
  } else {
    verCarrito();
  }
}

// ELIMINAR PRODUCTO
function eliminar(id) {
  carrito = carrito.filter(p => p.id !== id);
  verCarrito();
}

// ENVIAR WHATSAPP
function enviarWhatsApp() {
  if (carrito.length === 0) {
    alert("El carrito está vacío");
    return;
  }

  let mensaje = "Hola, quiero hacer este pedido en LIBRERIA ALEJANDRA:\n\n";
  let total = 0;

  carrito.forEach(p => {
    const subtotal = p.precio * p.cantidad;
    total += subtotal;
    mensaje += `${p.nombre} x${p.cantidad} = Bs ${subtotal}\n`;
  });

  mensaje += `\nTotal: Bs ${total}`;
  mensaje = encodeURIComponent(mensaje);

  window.open(`https://wa.me/59179632110?text=${mensaje}`, "_blank");
}