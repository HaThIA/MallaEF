// Lista de ramos y requisitos (puedes completarla tú con todos los ramos)
const ramos = [
  { nombre: "morfología integral", semestre: 1, requisitos: [] },
  { nombre: "química General y orgánica", semestre: 1, requisitos: [] },
  { nombre: "biología celular", semestre: 1, requisitos: [] },
  { nombre: "razonamiento matemático", semestre: 1, requisitos: [] },
  { nombre: "bases teorías de enfermería", semestre: 1, requisitos: [] },
  { nombre: "microbiologia", semestre: 2, requisitos: ["biología celular"] },
  { nombre: "bioquímica", semestre: 2, requisitos: ["biología celular"] },
  { nombre: "Psicológia evolutiva", semestre: 2, requisitos: [] },
  { nombre: "socioantropologia", semestre: 2, requisitos: [] },
  { nombre: "bases del cuidado de enfermería", semestre: 2, requisitos: ["morfología integral", "bases teorías de enfermería"] },
  { nombre: "CFG: habilidades comunicativas", semestre: 2, requisitos: [] },
  { nombre: "fisiología", semestre: 3, requisitos: ["morfología integral"] },
  { nombre: "salud pública 1", semestre: 3, requisitos: ["razonamiento matemático", "bases del cuidado de enfermería"] },
  { nombre: "enfermería en la promoción y Prevención en salud", semestre: 3, requisitos: ["bases teorías de enfermería", "socioantropologia"] },
  { nombre: "cuidado de enfermería en el ciclo vital", semestre: 3, requisitos: ["Psicológia evolutiva", "bases del cuidado de enfermería"] },
  { nombre: "ingles 1", semestre: 3, requisitos: [] }
  // Continúa agregando los ramos restantes...
];

// Construir la malla en la interfaz
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

// Funciones lógicas
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

// Modal
const modal = document.getElementById("modal");
const mensajeModal = document.getElementById("mensajeModal");
document.getElementById("cerrarModal").onclick = () => modal.style.display = "none";
function mostrarModal(mensaje) {
  mensajeModal.textContent = mensaje;
  modal.style.display = "block";
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

// 🎨 Colores personalizables
const colorPrimarioInput = document.getElementById("colorPrimario");
const colorSecundarioInput = document.getElementById("colorSecundario");
const rootStyles = document.documentElement.style;
const defaultColors = {
  primario: "#00b4d8",
  secundario: "#caf0f8"
};

const savedPrimario = localStorage.getItem("colorPrimario");
const savedSecundario = localStorage.getItem("colorSecundario");

if (savedPrimario) {
  rootStyles.setProperty("--color-principal", savedPrimario);
  colorPrimarioInput.value = savedPrimario;
} else {
  colorPrimarioInput.value = defaultColors.primario;
}

if (savedSecundario) {
  rootStyles.setProperty("--color-secundario", savedSecundario);
  colorSecundarioInput.value = savedSecundario;
} else {
  colorSecundarioInput.value = defaultColors.secundario;
}

colorPrimarioInput.addEventListener("input", () => {
  const color = colorPrimarioInput.value;
  rootStyles.setProperty("--color-principal", color);
  localStorage.setItem("colorPrimario", color);
});

colorSecundarioInput.addEventListener("input", () => {
  const color = colorSecundarioInput.value;
  rootStyles.setProperty("--color-secundario", color);
  localStorage.setItem("colorSecundario", color);
});

// 🎛 Botones de reseteo
const resetBtn = document.createElement("button");
resetBtn.textContent = "Restablecer Colores";
document.querySelector(".color-picker-container").appendChild(resetBtn);
resetBtn.addEventListener("click", () => {
  rootStyles.setProperty("--color-principal", defaultColors.primario);
  rootStyles.setProperty("--color-secundario", defaultColors.secundario);
  colorPrimarioInput.value = defaultColors.primario;
  colorSecundarioInput.value = defaultColors.secundario;
  localStorage.removeItem("colorPrimario");
  localStorage.removeItem("colorSecundario");
});

const resetProgresoBtn = document.createElement("button");
resetProgresoBtn.textContent = "Reiniciar Progreso";
resetProgresoBtn.style.backgroundColor = "#e63946";
resetProgresoBtn.style.color = "white";
resetProgresoBtn.style.border = "none";
resetProgresoBtn.style.borderRadius = "5px";
resetProgresoBtn.style.padding = "0.5rem 1rem";
resetProgresoBtn.style.cursor = "pointer";
resetProgresoBtn.style.fontSize = "0.9rem";
document.querySelector(".color-picker-container").appendChild(resetProgresoBtn);
resetProgresoBtn.addEventListener("click", () => {
  localStorage.removeItem("ramosAprobados");
  location.reload();
});
