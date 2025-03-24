import React from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';

import AppointmentCreation from '@components/AppointmentCreation';
import SignInSide from '@components/SignInSide';
import SignUp from '@components/SignUp';
import SideMenu from '@components/SideMenu';
import AppTheme from "@shared-theme/AppTheme";
import CssBaseline from '@mui/material/CssBaseline'; // Asegúrate de importar CssBaseline

const xThemeComponents = {}; // Define tus componentes de tema aquí

function SidebarLayout() {
  return (
    <div style={{ display: 'flex' }}>
      <SideMenu />
      <div style={{ flex: 1 }}>
        {/* Renderiza las rutas hijas aquí */}
        <Outlet />
      </div>
    </div>
  );
}

function App() {
  return (
    <AppTheme themeComponents={xThemeComponents}>
      <CssBaseline enableColorScheme />
      <Router>
        <div style={{  }}>
          <Routes>
            {/* Agrupación de rutas con Sidebar */}
            <Route element={<SidebarLayout />}>
              <Route path="/crear-cita" element={<AppointmentCreation />} />
            </Route>
            {/* Rutas sin Sidebar */}
            <Route path="/login" element={<SignInSide />} />
            <Route path="/register" element={<SignUp />} />
          </Routes>
        </div>
      </Router>
    </AppTheme>
  );
}

export default App;