// uncion de CRON-JOB

const cron = require("node-cron");
const Presentismo = require("../models/presentismo");
const Horario = require("../models/Horario");

// Evento para el turno de la mañana (ejecutar a las 12:00 PM)
cron.schedule("0 3 * * *", async () => {
  // Todos los días a las 12:00 PM
  await registrarAusencias();
});

async function registrarAusencias() {
  const ahora = new Date();
  const hoy = ahora.toISOString().split("T")[0]; // Formato YYYY-MM-DD

  try {
    // Buscar horarios para el día actual y el turno específico
    const horarios = await Horario.find({
      fechaInicio: { $lte: hoy }, // Horarios activos desde el inicio hasta hoy
      fechaFin: { $gte: hoy }, // Horarios activos hasta el final de hoy
      // Filtrar por hora de entrada dependiendo del turno
    }).populate("usuario empresa");

    for (const horario of horarios) {
      // Verificar si ya existe un registro de presentismo para este empleado hoy
      const registro = await Presentismo.findOne({
        usuario: horario.usuario._id,
        fecha: hoy,
      });
      console.log(horario.usuario._id);
      if (!registro) {
        // Si no existe, crear un registro de ausente
        await Presentismo.create({
          usuario: horario.usuario._id,
          empresa: horario.empresa._id,
          fecha: hoy,
          estado: "Ausente",
          horaEntrada: "",
          horaSalida: "",
          firmado: false,
        });
      }
    }
  } catch (error) {
    console.error(error);
  }
}

// habria que probarlo pero mas o menos es la idea acabo de decirle al GPT lo que queremos hacer
