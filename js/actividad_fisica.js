document.getElementById("fecha").addEventListener("change", function () {
    const fecha = new Date(this.value);
    const dia = fecha.getDay(); // 0 (Domingo) a 6 (Sábado)
  
    const rutinas = [
      "Rutina A: 30 minutos de cardio + abdominales.",
      "Rutina B: Sentadillas, flexiones y estiramientos.",
      "Rutina C: Yoga + 20 minutos de caminata."
    ];
  
    let mensaje = "";
  
    if (isNaN(dia)) {
      mensaje = "Por favor selecciona una fecha válida.";
    } else if (dia === 0 || dia === 6) {
      mensaje = "Hoy es día de descanso. ¡Recupérate bien!";
    } else {
      const rutinaDelDia = rutinas[(fecha.getDate() + fecha.getMonth()) % rutinas.length];
      mensaje = `Ejercicio para hoy:\n${rutinaDelDia}`;
    }
  
    document.getElementById("rutina").textContent = mensaje;
  });
  