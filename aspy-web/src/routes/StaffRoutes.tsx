import ControlPanel from "@staff/ControlPanel";
import Profile from "@components/Profile";
import AppointmentCreation from "@components/AppointmentCreation";
import ProffesionalList from "@staff/ProffesionalList";
import ClientList from "@staff/ClientList";
import InvoiceList from "@staff/InvoiceList";
import UserForm from "@/components/forms/UserForm";
import ServiceForm from "@/components/forms/ServiceForm";

export const StaffRoutes = [
  { path: "/", element: <ControlPanel /> },
  { path: "/perfil", element: <Profile /> },
  { path: "/agendar-cita", element: <AppointmentCreation /> },
  { path: "/profesionales", element: <ProffesionalList /> },
  { path: "/pacientes", element: <ClientList /> },
  { path: "/facturas", element: <InvoiceList /> },
  { path: "/facturas/2", element: <InvoiceList /> },
  { path: "/crear-usuario", element: <UserForm /> },
  { path: "/crear-servicio", element: <ServiceForm /> },





];
