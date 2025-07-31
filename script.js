// Lista de ramos y requisitos (puedes completarla tú con todos los ramos)
const ramos = [
  // Semestre 1
  { nombre: "morfología integral", semestre: 1, requisitos: [] },
  { nombre: "química General y orgánica", semestre: 1, requisitos: [] },
  { nombre: "biología celular", semestre: 1, requisitos: [] },
  { nombre: "razonamiento matemático", semestre: 1, requisitos: [] },
  { nombre: "bases teorías de enfermería", semestre: 1, requisitos: [] },

  // Semestre 2
  { nombre: "microbiologia", semestre: 2, requisitos: ["biología celular"] },
  { nombre: "bioquímica", semestre: 2, requisitos: ["biología celular"] },
  { nombre: "Psicológia evolutiva", semestre: 2, requisitos: [] },
  { nombre: "socioantropologia", semestre: 2, requisitos: [] },
  { nombre: "bases del cuidado de enfermería", semestre: 2, requisitos: ["morfología integral", "bases teorías de enfermería"] },
  { nombre: "CFG: habilidades comunicativas", semestre: 2, requisitos: [] },

  // Semestre 3
  { nombre: "fisiología", semestre: 3, requisitos: ["morfología integral"] },
  { nombre: "salud pública 1", semestre: 3, requisitos: ["razonamiento matemático", "bases del cuidado de enfermería"] },
  { nombre: "enfermería en la promoción y Prevención en salud", semestre: 3, requisitos: ["bases teorías de enfermería", "socioantropologia"] },
  { nombre: "cuidado de enfermería en el ciclo vital", semestre: 3, requisitos: ["Psicológia evolutiva", "bases del cuidado de enfermería"] },
  { nombre: "ingles 1", semestre: 3, requisitos: [] },

  // Semestre 4
  { nombre: "fisiopatologia", semestre: 4, requisitos: ["fisiología"] },
  { nombre: "fármacologia general", semestre: 4, requisitos: ["microbiologia", "bioquímica"] },
  { nombre: "salud publica 2", semestre: 4, requisitos: ["salud pública 1", "enfermería en la promoción y Prevención en salud"] },
  { nombre: "bases de enfermería en salud familiar y comunitaria", semestre: 4, requisitos: ["enfermería en la promoción y Prevención en salud"] },
  { nombre: "cuidado de enfermería en adulto y adulto mayor", semestre: 4, requisitos: ["fisiología", "cuidado de enfermería en el ciclo vital"] },
  { nombre: "ingles 2", semestre: 4, requisitos: ["ingles 1"] },

  // Semestre 5
  { nombre: "farmacologia clinica y fármacovigilancia", semestre: 5, requisitos: ["fisiopatologia", "fármacologia general"] },
  { nombre: "cuidados de enfermería en salud familiar", semestre: 5, requisitos: ["salud publica 2", "bases de enfermería en salud familiar y comunitaria"] },
  { nombre: "cuidado de enfermería en el niño y adulto", semestre: 5, requisitos: ["fisiopatologia", "cuidado de enfermería en adulto y adulto mayor"] },
  { nombre: "fundamentos de gestión y liderazgo en enfermería", semestre: 5, requisitos: ["salud publica 2"] },
  { nombre: "integrador 1: cuidado de enfermería 1", semestre: 5, requisitos: ["fisiopatologia", "fármacologia general", "salud publica 2", "bases de enfermería en salud familiar y comunitaria", "cuidado de enfermería en adulto y adulto mayor", "CFG: habilidades comunicativas"] },
  { nombre: "ingles 3", semestre: 5, requisitos: ["ingles 2"] },

  // Semestre 6
  { nombre: "cuidados de enfermería en salud mental y comunidad", semestre: 6, requisitos: ["cuidados de enfermería en salud familiar", "integrador 1: cuidado de enfermería 1"] },
  { nombre: "cuidado de enfermería en el Adulto y adulto mayor con alteraciones de salud", semestre: 6, requisitos: ["farmacologia clinica y fármacovigilancia", "cuidado de enfermería en el niño y adulto", "integrador 1: cuidado de enfermería 1"] },
  { nombre: "metodos de analisis en enfermería", semestre: 6, requisitos: ["fundamentos de gestión y liderazgo en enfermería", "cuidado de enfermería en adulto y adulto mayor"] },
  { nombre: "administración en unidades de enfermería", semestre: 6, requisitos: ["fundamentos de gestión y liderazgo en enfermería"] },
  { nombre: "ingles 4", semestre: 6, requisitos: ["ingles 3"] },
  { nombre: "CFG: razonamiento científico y tecnológias de información", semestre: 6, requisitos: ["CFG: habilidades comunicativas"] },

  // Semestre 7
  { nombre: "ética y legislación en enfermería", semestre: 7, requisitos: ["integrador 1: cuidado de enfermería 1"] },
  { nombre: "cuidados de enfermería en salud familiar y comunitario", semestre: 7, requisitos: ["cuidados de enfermería en salud mental y comunidad"] },
  { nombre: "cuidados de enfermería en el niño y adolescente con alteraciones de la salud", semestre: 7, requisitos: ["cuidado de enfermería en el niño y adulto", "integrador 1: cuidado de enfermería 1"] },
  { nombre: "desarrollo de proyectos en enfermería", semestre: 7, requisitos: ["administración en unidades de enfermería"] },
  { nombre: "CFG: pensamiento critico", semestre: 7, requisitos: ["CFG: razonamiento científico y tecnológias de información"] },

  // Semestre 8
  { nombre: "cuidado integral del niño y adulto", semestre: 8, requisitos: ["ética y legislación en enfermería", "cuidado de enfermería en el Adulto y adulto mayor con alteraciones de salud", "cuidados de enfermería en el niño y adolescente con alteraciones de la salud"] },
  { nombre: "seminario de investigación en enfermería", semestre: 8, requisitos: ["ética y legislación en enfermería", "metodos de analisis en enfermería", "ingles 4"] },
  { nombre: "integrador 2: cuidado de enfermería 2", semestre: 8, requisitos: ["ética y legislación en enfermería", "cuidados de enfermería en salud familiar y comunitario", "cuidado de enfermería en el Adulto y adulto mayor con alteraciones de salud", "cuidados de enfermería en el niño y adolescente con alteraciones de la salud", "desarrollo de proyectos en enfermería"] },
  { nombre: "CFG: responsabilidad social", semestre: 8, requisitos: ["CFG: pensamiento critico"] },

  // Semestre 9
  { nombre: "integrador 3: gestión del cuidado en unidades de enfermería", semestre: 9, requisitos: ["cuidado integral del niño y adulto", "seminario de investigación en enfermería", "integrador 2: cuidado de enfermería 2", "CFG: responsabilidad social"] },

  // Semestre 10
  { nombre: "integrador 4: gestión del cuidado en salud familiar y comunitaria", semestre: 10, requisitos: ["cuidado integral del niño y adulto", "seminario de investigación en enfermería", "integrador 2: cuidado de enfermería 2", "CFG: responsabilidad social"] }
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
