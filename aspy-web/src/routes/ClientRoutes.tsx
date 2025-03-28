import ControlPanel from "@client/ControlPanel";
import Profile from "@components/Profile";
import AppointmentCreation from "@components/AppointmentCreation";

export const ClientRoutes = [
  { path: "/", element: <ControlPanel /> },
  { path: "/perfil", element: <Profile /> },
  { path: "/agendar-cita", element: <AppointmentCreation /> },

];
