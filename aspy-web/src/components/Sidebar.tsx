import { Home, User, Users, ClipboardList, FileText, Calendar, Settings, HelpCircle, LogOut, Bell } from "lucide-react";
import { useState } from "react";

type MenuItem = {
  name: string;
  icon: JSX.Element;
};

const Sidebar: React.FC = () => {
  const [active, setActive] = useState<string>("Vista General");

  const menuItems: MenuItem[] = [
    { name: "Vista General", icon: <Home size={20} /> },
    { name: "Mi perfil", icon: <User size={20} /> },
    { name: "Profesional", icon: <Users size={20} /> },
    { name: "Pacientes", icon: <ClipboardList size={20} /> },
    { name: "Servicios", icon: <FileText size={20} /> },
    { name: "Facturas", icon: <FileText size={20} /> },
    { name: "Citas", icon: <Calendar size={20} /> },
    { name: "Settings", icon: <Settings size={20} /> },
    { name: "Help/Support", icon: <HelpCircle size={20} /> },
  ];

  return (
    <div className="w-64 h-full bg-[#0B1C48] text-white flex flex-col">
      {/* Logo y Rol */}
      <div className="flex items-center px-4 py-4 border-b border-gray-600">
        <div className="w-12 h-12 bg-gray-300 rounded-full mr-2"></div>
        <p className="text-lg font-semibold">Secretario</p>
        <Bell size={18} className="ml-2" />
      </div>

      {/* Menú de navegación */}
      <nav className="flex-1 flex flex-col items-start justify-start">
        {menuItems.map((item) => (
          <button
            key={item.name}
            onClick={() => setActive(item.name)}
            className={`flex items-center gap-3 px-6 py-3 w-full transition-all 
              ${active === item.name ? "bg-blue-500" : "hover:bg-blue-600"}`}
          >
            {item.icon}
            {item.name}
          </button>
        ))}
      </nav>

      {/* Logout */}
      <button className="flex items-center gap-3 px-6 py-3 text-left text-red-400 hover:text-red-300">
        <LogOut size={20} /> Logout
      </button>
    </div>
  );
};

export default Sidebar;