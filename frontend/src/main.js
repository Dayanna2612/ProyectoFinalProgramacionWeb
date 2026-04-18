import "./style.css";

const API = "http://localhost:3000/videojuegos";

async function getVideojuegos() {
  const res = await fetch(API);
  const data = await res.json();

  const lista = document.querySelector("#lista");

  lista.innerHTML = data.map(v => `
    <div class="card">
      <h3>${v.nombre}</h3>
      <p>Genero: ${v.genero}</p>
      <p>Plataforma: ${v.plataforma}</p>
      <p>Precio: ${v.precio}</p>
      <button onclick="eliminar(${v.id})">Eliminar</button>
    </div>
  `).join('');
}

async function agregar(event) {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const genero = document.getElementById("genero").value;
  const plataforma = document.getElementById("plataforma").value;
  const precio = document.getElementById("precio").value;

  await fetch(API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ nombre, genero, plataforma, precio })
  });

  document.getElementById("form").reset();
  getVideojuegos();
}

async function eliminar(id) {
  await fetch(`${API}/${id}`, {
    method: "DELETE"
  });

  getVideojuegos();
}

document.querySelector('#app').innerHTML = `
  <h1>🎮 CRUD Videojuegos</h1>

  <form id="form">
    <input id="nombre" placeholder="Nombre" required />
    <input id="genero" placeholder="Genero" required />
    <input id="plataforma" placeholder="Plataforma" required />
    <input id="precio" type="number" placeholder="Precio" required />
    <button type="submit">Agregar</button>
  </form>

  <div id="lista"></div>
`;

document.getElementById("form").addEventListener("submit", agregar);

getVideojuegos();import "./style.css";

const API = "http://localhost:3000/videojuegos";

async function getVideojuegos() {
  const res = await fetch(API);
  const data = await res.json();

  const lista = document.querySelector("#lista");

  lista.innerHTML = data.map(v => `
    <div class="card">
      <h3>${v.nombre}</h3>
      <p>Genero: ${v.genero}</p>
      <p>Plataforma: ${v.plataforma}</p>
      <p>Precio: ${v.precio}</p>
      <button onclick="eliminar(${v.id})">Eliminar</button>
    </div>
  `).join('');
}

async function agregar(event) {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const genero = document.getElementById("genero").value;
  const plataforma = document.getElementById("plataforma").value;
  const precio = document.getElementById("precio").value;

  await fetch(API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ nombre, genero, plataforma, precio })
  });

  document.getElementById("form").reset();
  getVideojuegos();
}

async function eliminar(id) {
  await fetch(`${API}/${id}`, {
    method: "DELETE"
  });

  getVideojuegos();
}

document.querySelector('#app').innerHTML = `
  <h1>🎮 CRUD Videojuegos</h1>

  <form id="form">
    <input id="nombre" placeholder="Nombre" required />
    <input id="genero" placeholder="Genero" required />
    <input id="plataforma" placeholder="Plataforma" required />
    <input id="precio" type="number" placeholder="Precio" required />
    <button type="submit">Agregar</button>
  </form>

  <div id="lista"></div>
`;

document.getElementById("form").addEventListener("submit", agregar);

getVideojuegos();