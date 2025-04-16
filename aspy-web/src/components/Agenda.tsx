import { Scheduler } from "@aldabil/react-scheduler";
import { es } from "date-fns/locale";
/* Ver documentacion en https://github.com/aldabil21/react-scheduler  */

export default function Agenda() {
  return (
    <Scheduler
      locale={es}
      view="week"
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
      events={[
        {
          event_id: 1,
          title: "Event 1",
          start: new Date("2025/3/25 09:30"),
          end: new Date("2025/3/25 10:30"),
        },
        {
          event_id: 2,
          title: "Event 2",
          start: new Date("2025/3/26 10:00"),
          end: new Date("2025/3/26 11:00"),
        },
      ]}
    />
  );
}
