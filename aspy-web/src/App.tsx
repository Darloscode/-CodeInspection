import RoleBasedRoutes from "@routes/RoleBasedRoutes";
import SignInSide from "@components/SignInSide";
import SignUp from "@components/SignUp";
import Checkout from "@components/Checkout";
import NotFound from "@components/NotFound";
import AppTheme from "@shared-theme/AppTheme";
import CssBaseline from "@mui/material/CssBaseline";
import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation  } from "react-router-dom";

// Mapeo de rutas y títulos
const routeTitles: { [key: string]: string } = {
  "/": "Inicio",
  "/profesionales": "Profesionales",
  "/pacientes": "Pacientes",
  "/citas": "Citas",
  "/facturas": "Facturas",
  "/pagos": "Pagos",
  "/servicios": "Servicios",
  "/usuarios": "Usuarios",
  "/roles": "Roles",
  "/preferencias": "Preferencias",
  "/servicios": "Servicios",
  "/login": "Iniciar Sesión",
  "/register": "Registrarse",
  "/pago": "Pago",
  "/404": "Página no encontrada",
};

// Componente para actualizar el título
const DocumentTitleUpdater = () => {
  const location = useLocation();

  useEffect(() => {
    const title = routeTitles[location.pathname] || "ASPY";
    document.title = title;
  }, [location.pathname]);

  return null; // no renderiza nada
};

const App = () => {
  const xThemeComponents = {};

  return (
    <AppTheme themeComponents={xThemeComponents}>
      <CssBaseline enableColorScheme />
      <Router>
      <DocumentTitleUpdater />
        <Routes>
          {/* Rutas públicas sin layout */}
          <Route path="/login" element={<SignInSide />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/pago" element={<Checkout />} />

          {/* Rutas privadas basadas en el rol */}
          {RoleBasedRoutes()}

          {/* Rutas no encontradas */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AppTheme>
  );
};

export default App;
