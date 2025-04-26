import ControlPanel from "@admin/ControlPanel";
import Profile from "@components/Profile";
import Users from "@admin/Users";
import Roles from "@admin/Roles";
import Services from "@admin/Services";
import Pruebas from "@/components/admin/Pruebas";
import EditUser from "@/components/admin/EditUser";
import EditService from "@/components/admin/EditService";
import EditRole from "@components/admin/EditRole";
import CreateRole from "@/components/admin/CreateRole";
import CreateService from "@/components/admin/CreateService";
import CreateUser from "@/components/admin/CreateUser";
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
  { path: "/nuevo-usuario", element: <CreateUser /> },
  { path: "/citas", element: <Appointment /> },
];
