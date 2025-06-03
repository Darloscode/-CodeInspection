import { Scheduler } from "@aldabil/react-scheduler";
import { es } from "date-fns/locale";
import { Cita } from "@/types/Cita";
/* Ver documentacion en https://github.com/aldabil21/react-scheduler  */

export default function Agenda({ citas }: { citas: Cita[] }) {
  const events = citas.map((cita) => ({
    event_id: cita.id,
    title: `Paciente: ${cita.paciente.firstName} ${cita.paciente.lastName} | Profesional: ${cita.doctor.firstName} ${cita.doctor.lastName}`,
    subtitle: `Asistió: ${cita.asistio ? "Sí" : "No"}`,
    start: new Date(`${cita.fecha}T${cita.horainicio}`),
    end: new Date(`${cita.fecha}T${cita.horafin}`),
  }));

  return (
    <Scheduler
      locale={es}
      view="week"
      editable={false}
      //editable={false}
      //deletable={false}
      agenda={false}
      translations={{
        navigation: {
          month: "Mes",
          week: "Semana",
          day: "Día",
          agenda: "Agenda",
          today: "Hoy",
        },
        form: {
          addTitle: "Agregar evento",
          editTitle: "Editar evento",
          confirm: "Confirmar",
          delete: "Eliminar",
          cancel: "Cancelar",
        },
        event: {
          title: "Título",
          subtitle: "Subtítulo",
          start: "Inicio",
          end: "Fin",
          allDay: "Todo el día",
        },
        moreEvents: "Más eventos...",
        noDataToDisplay: "No hay eventos para mostrar", // 🔹 Texto cuando no hay eventos
        loading: "Cargando...", // 🔹 Texto mientras se cargan los eventos
      }}
      events={events}
    />
  );
}
