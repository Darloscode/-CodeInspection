import ControlPanel from "@admin/ControlPanel";
import Profile from "@components/Profile";

export const AdminRoutes = [
  { path: "/", element: <ControlPanel /> },
  { path: "/perfil", element: <Profile /> },
];
