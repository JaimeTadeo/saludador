function saludar() {
    const nombre = prompt("¿Cuál es tu nombre?");
    if (nombre) {
      alert(`Hola, ${nombre}!`);
    } else {
      alert("Hola!");
    }
  }
  
  export default saludar;
  