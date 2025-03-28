import ControlPanel from "@professional/ControlPanel";
import Profile from "@components/Profile";

export const ProfessionalRoutes = [
  { path: "/", element: <ControlPanel /> },
  { path: "/perfil", element: <Profile /> },
];
