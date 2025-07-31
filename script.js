// 🔁 Lista completa de ramos con semestres y requisitos
const ramos = [/* 👈 Esta parte ya está completa desde el prompt anterior y ya fue cargada arriba, mantén esa sección intacta aquí */];

// 🚧 Construir la grilla de la malla
const malla = document.getElementById("malla");

for (let i = 1; i <= 10; i++) {
  const col = document.createElement("div");
  col.className = "semestre";

  const titulo = document.createElement("h3");
  titulo.textContent = `Semestre ${i}`;
  col.appendChild(titulo);

  ramos.filter(r => r.semestre === i).forEach(r => {
    const ramo = document.createElement("div");
    ramo.className = "ramo";
    ramo.textContent = r.nombre;
    ramo.dataset.nombre = r.nombre;

    if (!requisitosCompletos(r)) ramo.classList.add("bloqueado");
    if (estaAprobado(r.nombre)) ramo.classList.add("aprobado");

    ramo.addEventListener("click", () => manejarClick(r, ramo));
    col.appendChild(ramo);
  });

  malla.appendChild(col);
}

// ✅ Verifica si los requisitos están cumplidos
function requisitosCompletos(ramo) {
  const aprobados = obtenerAprobados();
  return ramo.requisitos.every(req => aprobados.includes(req));
}

// 🖱️ Manejo de clic en un ramo
function manejarClick(ramo, elemento) {
  if (elemento.classList.contains("bloqueado")) {
    const faltantes = ramo.requisitos.filter(req => !obtenerAprobados().includes(req));
    mostrarModal(`No puedes aprobar este ramo aún. Debes aprobar: ${faltantes.join(", ")}`);
    return;
  }

  elemento.classList.toggle("aprobado");
  guardarEstado();
  location.reload(); // recargar para revalidar dependencias visualmente
}

// 📦 Obtener ramos aprobados desde localStorage
function obtenerAprobados() {
  return JSON.parse(localStorage.getItem("ramosAprobados") || "[]");
}

// 🔄 Verifica si un ramo está aprobado
function estaAprobado(nombre) {
  return obtenerAprobados().includes(nombre);
}

// 💾 Guardar estado actual
function guardarEstado() {
  const aprobados = Array.from(document.querySelectorAll(".ramo.aprobado"))
    .map(r => r.dataset.nombre);
  localStorage.setItem("ramosAprobados", JSON.stringify(aprobados));
}

// 🌙 Modo oscuro
const switchModo = document.getElementById("modoSwitch");

if (localStorage.getItem("modoOscuro") === "true") {
  document.body.classList.add("dark-mode");
  switchModo.checked = true;
}

switchModo.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("modoOscuro", switchModo.checked);
});

// ⚠️ Modal para mostrar requisitos pendientes
const modal = document.getElementById("modal");
const mensajeModal = document.getElementById("mensajeModal");

document.getElementById("cerrarModal").onclick = () => {
  modal.style.display = "none";
};

function mostrarModal(mensaje) {
  mensajeModal.textContent = mensaje;
  modal.style.display = "block";
}
