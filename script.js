const ramos = [
  { nombre: "Morfología Integral", semestre: 1, requisitos: [] },
  { nombre: "Química General y Orgánica", semestre: 1, requisitos: [] },
  { nombre: "Biología Celular", semestre: 1, requisitos: [] },
  { nombre: "Razonamiento Matemático", semestre: 1, requisitos: [] },
  { nombre: "Bases Teóricas de la Enfermería", semestre: 1, requisitos: [] },

  { nombre: "Microbiología", semestre: 2, requisitos: ["Biología Celular"] },
  { nombre: "Bioquímica", semestre: 2, requisitos: ["Química General y Orgánica"] },
  { nombre: "Psicología Evolutiva", semestre: 2, requisitos: [] },
  { nombre: "Socioantropología", semestre: 2, requisitos: [] },
  { nombre: "Bases del Cuidado de Enfermería", semestre: 2, requisitos: ["Bases Teóricas de la Enfermería"] },

  { nombre: "Fisiología", semestre: 3, requisitos: ["Biología Celular"] },
  { nombre: "Salud Pública I", semestre: 3, requisitos: [] },
  { nombre: "Enfermería en la Promoción y Prevención en Salud", semestre: 3, requisitos: ["Psicología Evolutiva"] },
  { nombre: "Cuidado de Enfermería en el Ciclo Vital", semestre: 3, requisitos: ["Bases del Cuidado de Enfermería"] },

  // Agrega el resto según el PDF...
];

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

function requisitosCompletos(ramo) {
  const aprobados = obtenerAprobados();
  return ramo.requisitos.every(req => aprobados.includes(req));
}

function manejarClick(ramo, elemento) {
  if (elemento.classList.contains("bloqueado")) {
    const faltantes = ramo.requisitos.filter(req => !obtenerAprobados().includes(req));
    mostrarModal(`No puedes aprobar este ramo. Faltan: ${faltantes.join(", ")}`);
    return;
  }
  elemento.classList.toggle("aprobado");
  guardarEstado();
  location.reload();
}

function obtenerAprobados() {
  return JSON.parse(localStorage.getItem("ramosAprobados") || "[]");
}

function estaAprobado(nombre) {
  return obtenerAprobados().includes(nombre);
}

function guardarEstado() {
  const aprobados = Array.from(document.querySelectorAll(".ramo.aprobado"))
    .map(r => r.dataset.nombre);
  localStorage.setItem("ramosAprobados", JSON.stringify(aprobados));
}

// Modo oscuro
const switchModo = document.getElementById("modoSwitch");
switchModo.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("modoOscuro", switchModo.checked);
});

// Aplicar modo oscuro si estaba guardado
if (localStorage.getItem("modoOscuro") === "true") {
  document.body.classList.add("dark-mode");
  switchModo.checked = true;
}

// Modal
const modal = document.getElementById("modal");
const mensajeModal = document.getElementById("mensajeModal");
document.getElementById("cerrarModal").onclick = () => modal.style.display = "none";

function mostrarModal(mensaje) {
  mensajeModal.textContent = mensaje;
  modal.style.display = "block";
}

