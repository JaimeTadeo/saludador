function saludar() {
    const nombre = prompt("¿Cuál es tu nombre?");
    const ahora = new Date(); // Obtiene la hora actual
    const hora = ahora.getHours();
    const minutos = ahora.getMinutes().toString().padStart(2, "0"); // Asegura dos dígitos
  
    if (nombre) {
      alert(`Hola, ${nombre}! Son las ${hora}:${minutos}.`);
    } else {
      alert(`Hola! Son las ${hora}:${minutos}.`);
    }
  }
  
  export default saludar;
  