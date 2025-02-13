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
  
    const ahora = new Date();
    const hora = ahora.getHours();
    const minutos = ahora.getMinutes().toString().padStart(2, "0");
  
    let saludoTiempo;
  
    if (hora >= 5 && hora < 12) {
      saludoTiempo = "Buenos días";
    } else if (hora >= 12 && hora < 18) {
      saludoTiempo = "Buenas tardes";
    } else {
      saludoTiempo = "Buenas noches";
    }
  
    if (genero === "femenino") {
      saludoTiempo = saludoTiempo.replace("os", "as"); 
    }
  
    let tratamiento = "";
    if (edad > 30) {
      if (genero === "masculino") {
        tratamiento = "Sr. ";
      } else if (genero === "femenino") {
        tratamiento = "Sra. ";
      } else {
        tratamiento = "Cosa ";
      }
    }
  
    alert(`${saludoTiempo}, ${tratamiento}${nombre}! Son las ${hora}:${minutos}.`);
  }
  
  export default saludar;
  