function saludar() {
    const nombre = prompt("¿Cuál es tu nombre?");
    if (!nombre) {
      alert("Debes ingresar un nombre para continuar.");
      return;
    }
  
    let genero = prompt("¿Cuál es tu género? (Femenino/Masculino)").toLowerCase();
    if (genero !== "femenino" && genero !== "masculino") {
      alert("Género no válido. Se usará un saludo neutral.");
      genero = "neutral";
    }
  
    const edad = parseInt(prompt("¿Cuál es tu edad?"));
    if (isNaN(edad) || edad <= 0) {
      alert("Edad no válida. Se omitirá el tratamiento formal.");
    }
  
    const idioma = prompt("Selecciona tu idioma preferido (Español/Inglés)").toLowerCase();
    if (idioma !== "espanol" && idioma !== "ingles") {
      alert("Idioma no válido. Se usará el idioma español.");
      idioma = "espanol";
    }
  
    const ahora = new Date();
    const hora = ahora.getHours();
    const minutos = ahora.getMinutes().toString().padStart(2, "0");
  
    let saludoTiempo;
  
    if (hora >= 5 && hora < 12) {
      saludoTiempo = idioma === "ingles" ? "Good morning" : "Buenos días";
    } else if (hora >= 12 && hora < 18) {
      saludoTiempo = idioma === "ingles" ? "Good afternoon" : "Buenas tardes";
    } else {
      saludoTiempo = idioma === "ingles" ? "Good evening" : "Buenas noches";
    }
  
    // Ajuste de saludo según género
    if (genero === "femenino") {
      saludoTiempo = saludoTiempo.replace("os", "as"); // Cambia "Buenos" por "Buenas"
    }
  
    // Tratamiento formal si la edad es mayor de 30
    let tratamiento = "";
    if (edad > 30) {
      if (genero === "masculino") {
        tratamiento = idioma === "ingles" ? "Mr. " : "Sr. ";
      } else if (genero === "femenino") {
        tratamiento = idioma === "ingles" ? "Mrs. " : "Sra. ";
      } else {
        tratamiento = idioma === "ingles" ? "Person " : "Cosa ";
      }
    }
  
    const saludoFinal = idioma === "ingles" ? 
      `${saludoTiempo}, ${tratamiento}${nombre}! The time is ${hora}:${minutos}.` :
      `${saludoTiempo}, ${tratamiento}${nombre}! Son las ${hora}:${minutos}.`;
  
    alert(saludoFinal);
  }
  
  export default saludar;
  