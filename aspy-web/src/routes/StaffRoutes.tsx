import ControlPanel from "@staff/ControlPanel";
import Profile from "@components/Profile";
import AppointmentCreation from "@components/AppointmentCreation";

export const StaffRoutes = [
  { path: "/", element: <ControlPanel /> },
  { path: "/perfil", element: <Profile /> },
  { path: "/agendar-cita", element: <AppointmentCreation /> },

];
