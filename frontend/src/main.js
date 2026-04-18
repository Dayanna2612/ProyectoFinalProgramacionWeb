import './style.css';
const API = "http://localhost:3000/videojuegos";

let editando = null;

// Cargar datos
async function getVideojuegos() {
  const res = await fetch(API);
  const data = await res.json();

  const lista = document.getElementById("lista");
  lista.innerHTML = "";

  data.forEach(juego => {
    lista.innerHTML += `
      <div class="card">
        <h3>${juego.nombre}</h3>
        <p>🎮 ${juego.genero}</p>
        <p>🕹 ${juego.plataforma}</p>
        <p>💲 ${juego.precio}</p>

        <button class="editar" onclick="cargarEditar(${juego.id}, '${juego.nombre}', '${juego.genero}', '${juego.plataforma}', ${juego.precio})">Editar</button>
        <button class="eliminar" onclick="eliminar(${juego.id})">Eliminar</button>
      </div>
    `;
  });
}

// Agregar o editar
document.getElementById("formulario").addEventListener("submit", async (e) => {
  e.preventDefault();

  const juego = {
    nombre: document.getElementById("nombre").value,
    genero: document.getElementById("genero").value,
    plataforma: document.getElementById("plataforma").value,
    precio: Number(document.getElementById("precio").value)
  };

  if (editando) {
    await fetch(`${API}/${editando}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(juego)
    });
    editando = null;
  } else {
    await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(juego)
    });
  }

  e.target.reset();
  getVideojuegos();
});

// Cargar datos para editar
function cargarEditar(id, nombre, genero, plataforma, precio) {
  document.getElementById("nombre").value = nombre;
  document.getElementById("genero").value = genero;
  document.getElementById("plataforma").value = plataforma;
  document.getElementById("precio").value = precio;

  editando = id;
}

// Eliminar
async function eliminar(id) {
  await fetch(`${API}/${id}`, {
    method: "DELETE"
  });
  getVideojuegos();
}

// Inicial
getVideojuegos();