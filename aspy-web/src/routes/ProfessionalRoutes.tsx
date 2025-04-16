import ControlPanel from "@professional/ControlPanel";
import Profile from "@components/Profile";
import Appointment from "@professional/Appointment";
import PatientsList from "@professional/PatientsList";
import DetallePaciente from "@professional/History";
import NewReport from "@professional/NewReport";
import Detail from "@professional/Detail";
import ClientList from "@staff/ClientList";
import AddSign from "@/components/AddSign";

export const ProfessionalRoutes = [
  { path: "/", element: <ControlPanel /> },
  { path: "/perfil", element: <Profile /> },
  { path: "/pacientes", element: <PatientsList /> },
  { path: "/citas", element: <Appointment /> },
  { path: "/pacientes/:id", element: <DetallePaciente /> },
  { path: "/pacientes/:id/nuevoReporte", element: <NewReport /> },
  { path: "/pacientes/:id/:citaId", element: <Detail /> },
  {path: "/pacientes/reporte", element: <AddSign />},
];
