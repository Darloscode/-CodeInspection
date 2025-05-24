import ControlPanel from "@client/ControlPanel";
import Profile from "@components/Profile";
import AppointmentCreation from "@components/AppointmentCreation";
import InvoiceList from "@staff/InvoiceList";

export const ClientRoutes = [
  { path: "/", element: <ControlPanel /> },
  { path: "/perfil", element: <Profile /> },
  { path: "/agendar-cita", element: <AppointmentCreation /> },
  { path: "/facturas", element: <InvoiceList /> },
];
