import { Scheduler } from "@aldabil/react-scheduler";

/* Ver documentacion en https://github.com/aldabil21/react-scheduler  */

export default function Agenda() {
  return (
    <Scheduler
      view="week"
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
