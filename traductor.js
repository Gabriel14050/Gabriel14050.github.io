// Definición de las traducciones
const translations = {
  "es": {
    "Análisis de datos":"Análisis de datos",
"Regresión Lineal": "Regresión Lineal",
    "Desarrollo Freelancer":"Desarrollo Freelancer",
    "Inicio": "Inicio",
    "Habilidades": "Habilidades",
    "Proyectos": "Proyectos",
    "Portafolio": "Portafolio",
    "Hoja de Vida": "Hoja de Vida",
    "Soy Gabriel Jaramillo": "Soy Gabriel Jaramillo",
    "TECNOLOGO": "TECNOLOGO SUPERIOR UNIVERSITARIO EN SISTEMAS Y GESTION DE DATA",
    "Desarrollo Web": "Desarrollo Web",
    "HTML": "HTML",
    "CSS": "CSS",
    "JavaScript": "JavaScript",
    "Programación": "Programación",
    "Python": "Python",
    "C#": "C#",
    "Java": "Java",
    "Cattor Restaurante": "Cattor Restaurante",
    "Página informativa para una fundación que mediante su restaurante y sus fondos se encarga de brindar apoyo y buscar un hogar a las mascotas abandonadas":
      "Página informativa para una fundación que mediante su restaurante y sus fondos se encarga de brindar apoyo y buscar un hogar a las mascotas abandonadas",
    "Inicio de Sesión": "Inicio de Sesión",
    "Inicios de sesión interactivos y llamativos con la capacidad de registrar e iniciar a los usuarios usando bases de datos":
      "Inicios de sesión interactivos y llamativos con la capacidad de registrar e iniciar a los usuarios usando bases de datos",
    "Desarrollado por: Gabriel Jaramillo": "Desarrollado por: Gabriel Jaramillo",
    "Correo": "Correo",
    "Nombre": "Nombre",
    "Telefono": "Telefono",
    "Cambiar a Inglés": "Cambiar a Inglés",
    "Cambiar a Español": "Cambiar a Español"
  },
  "en": {
    "Desarrollo Freelancer":"Freelancer Development",
    "Inicio": "Home",
    "Habilidades": "Skills",
    "Proyectos": "Projects",
    "Portafolio": "Portfolio",
    "Hoja de Vida": "CV",
    "Soy Gabriel Jaramillo": "I am Gabriel Jaramillo",
    "TECNOLOGO": "SENIOR UNIVERSITY TECHNOLOGIST IN SYSTEMS AND DATA MANAGEMENT",
    "Desarrollo Web": "Web Development",
    "HTML": "HTML",
    "CSS": "CSS",
    "JavaScript": "JavaScript",
    "Programación": "Programming",
    "Python": "Python",
    "C#": "C#",
    "Java": "Java",
    "Cattor Restaurante": "Cattor Restaurant",
    "Página informativa para una fundación que mediante su restaurante y sus fondos se encarga de brindar apoyo y buscar un hogar a las mascotas abandonadas":
      "Informative page for a foundation that through its restaurant and funds is responsible for providing support and seeking a home for abandoned pets",
    "Inicio de Sesión": "Login",
    "Inicios de sesión interactivos y llamativos con la capacidad de registrar e iniciar a los usuarios usando bases de datos":
      "Interactive and attractive logins with the ability to register and log in users using databases",
    "Desarrollado por: Gabriel Jaramillo": "Developed by: Gabriel Jaramillo",
    "Correo": "Mail",
    "Telefono": "Phone",
    "Nombre": "Name",
    "Cambiar a Inglés": "Switch to English",
    "Cambiar a Español": "Switch to Spanish",
    "Regresión Lineal": "Linear regression",
    "Análisis de datos":"Data analysis"
  }
};

// Función para traducir la página
function translatePage(lang) {
  $('[data-translate-key]').each(function () {
    const key = $(this).data('translate-key');
    $(this).text(translations[lang][key]);
  });

  $('#translate-btn').text(translations[lang][' ' + (lang === 'es' ? '' : '')]);
}

// Manejo del cambio de idioma
$(document).ready(function () {
  let currentLang = 'es';

  $('#translate-btn').click(function () {
    currentLang = currentLang === 'es' ? 'en' : 'es';
    translatePage(currentLang);
  });
});






