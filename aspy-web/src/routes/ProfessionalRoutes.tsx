import ControlPanel from "@professional/ControlPanel";
import Profile from "@components/Profile";
import ClientList from "@staff/ClientList";
import AddSign from "@/components/AddSign";

export const ProfessionalRoutes = [
  { path: "/", element: <ControlPanel /> },
  { path: "/perfil", element: <Profile /> },
  { path: "/pacientes", element: <ClientList /> },
  {path: "/pacientes/reporte", element: <AddSign />},
];
