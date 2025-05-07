import ControlPanel from "@admin/ControlPanel";
import Profile from "@components/Profile";
import Users from "@admin/Users";
import Roles from "@admin/Roles";
import Services from "@admin/Services";
import Pruebas from "@/components/admin/Pruebas";
import EditUser from "@/components/EditUser";
import EditService from "@/components/EditService";
import EditRole from "@/components/EditRole";
import CreateRole from "@/components/CreateRole";
import CreateService from "@/components/CreateService";
import CreateUser from "@/components/CreateUser";
import Appointment from "@/components/admin/Appointments";

export const AdminRoutes = [
  { path: "/", element: <ControlPanel /> },
  { path: "/perfil", element: <Profile /> },
  { path: "/usuarios", element: <Users /> },
  { path: "/roles", element: <Roles /> },
  { path: "/servicios", element: <Services /> },
  { path: "/pruebas", element: <Pruebas /> },
  { path: "/usuarios/:id", element: <EditUser /> },
  { path: "/servicios/:id", element: <EditService /> },
  { path: "/roles/:id", element: <EditRole /> },
  { path: "/nuevo-rol", element: <CreateRole /> },
  { path: "/nuevo-servicio", element: <CreateService /> },
  { path: "/nuevo-usuario", element: <CreateUser role="" /> },
  { path: "/citas", element: <Appointment /> },
];
