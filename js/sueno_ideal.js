function calcular() {
    const tipo = document.getElementById("tipo").value;
    const horaStr = document.getElementById("hora").value;
  
    if (!horaStr) {
      document.getElementById("resultado").textContent = "Por favor, ingresa una hora válida.";
      return;
    }
  
    const [hora, minutos] = horaStr.split(":").map(Number);
    const baseDate = new Date();
    baseDate.setHours(hora);
    baseDate.setMinutes(minutos);
  
    const ciclos = 6; // hasta 6 ciclos de 90 minutos
    const cicloMS = 90 * 60 * 1000;
    let resultados = [];
  
    for (let i = 3; i <= ciclos; i++) {
      let nuevaFecha = new Date(baseDate.getTime());
      if (tipo === "despertar") {
          nuevaFecha.setTime(nuevaFecha.getTime() - i * cicloMS);
      } else {
          nuevaFecha.setTime(nuevaFecha.getTime() + i * cicloMS);
      }
  
      let h = nuevaFecha.getHours().toString().padStart(2, '0');
      let m = nuevaFecha.getMinutes().toString().padStart(2, '0');
      resultados.push(`${h}:${m}`);
    }
  
    let mensaje = tipo === "despertar"
      ? "Para despertarte a esa hora, podrías dormirte a:"
      : "Si te duermes a esa hora, podrías despertarte a:";
  
    document.getElementById("resultado").innerHTML =
      `<strong>${mensaje}</strong><br>${resultados.join(" | ")}`;
  }
  