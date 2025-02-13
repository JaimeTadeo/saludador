function saludar() {
    const nombre = prompt("¿Cuál es tu nombre?");
    if (!nombre) {
      alert("Debes ingresar un nombre para continuar.");
      return;
    }
  
    let genero = prompt("¿Cuál es tu género? (Femenino/Masculino)").toLowerCase();
    if (genero !== "femenino" && genero !== "masculino") {
      alert("Genero no valido. Se usara un saludo neutro.");
      genero = "Helicoptero apache";
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
      saludoTiempo = saludoTiempo.replace("os", "as"); // Cambia "Buenos" por "Buenas"
    }
  
    alert(`${saludoTiempo}, ${nombre}! Son las ${hora}:${minutos}.`);
  }
  
  export default saludar;
  