import RoleBasedRoutes from "@routes/RoleBasedRoutes";
import SignInSide from "@components/SignInSide";
import SignUp from "@components/SignUp";
import Checkout from "@components/Checkout";
import NotFound from "@components/NotFound";
import AppTheme from "@shared-theme/AppTheme";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  const xThemeComponents = {};

  return (
    <AppTheme themeComponents={xThemeComponents}>
      <CssBaseline enableColorScheme />
      <Router>
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
