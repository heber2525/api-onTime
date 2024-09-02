const compararHorario = (horaEntrada, toleranciaMinutos1, toleranciaMinutos2) => {
  // Obtener la hora actual
  const ahora = new Date();

  // Crear un objeto Date para la hora de entrada
  const [hora, minuto] = horaEntrada.split(":").map(Number);
  const horaEntradaDate = new Date(
    ahora.toISOString().split("T")[0] + `T${hora.toString().padStart(2, "0")}:${minuto.toString().padStart(2, "0")}:00`
  );

  // Calcular los márgenes de tolerancia en milisegundos
  const tolerancia1Milisegundos = toleranciaMinutos1 * 60 * 1000;
  const tolerancia2Milisegundos = toleranciaMinutos2 * 60 * 1000;

  // Obtener el tiempo actual en milisegundos
  const tiempoActual = ahora.getTime();

  // Verificar si la hora actual está dentro del rango de tolerancia para "Presente"
  if (
    tiempoActual >= horaEntradaDate.getTime() - tolerancia1Milisegundos &&
    tiempoActual <= horaEntradaDate.getTime() + tolerancia1Milisegundos
  ) {
    return "Presente";
  }
  // Verificar si la hora actual está dentro del rango de tolerancia para "Tarde"

  if (
    tiempoActual > horaEntradaDate.getTime() - tolerancia2Milisegundos &&
    tiempoActual <= horaEntradaDate.getTime() + tolerancia2Milisegundos
  ) {
    return "Tarde";
  }

  // Si no cumple ninguna de las condiciones anteriores, entonces es "Ausente"
  return "Ausente";
};

module.exports = {
  compararHorario,
};
