function saludar() {
    const nombre = prompt("¿Cuál es tu nombre?");
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
  
    if (nombre) {
      alert(`${saludoTiempo}, ${nombre}! Son las ${hora}:${minutos}.`);
    } else {
      alert(`${saludoTiempo}! Son las ${hora}:${minutos}.`);
    }
  }
  
  export default saludar;
  