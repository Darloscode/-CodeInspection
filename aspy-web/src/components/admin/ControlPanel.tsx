/*import { ReactNode } from "react";*/

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material";

import PersonAddAltRoundedIcon from "@mui/icons-material/PersonAddAltRounded";
import MedicalServicesRoundedIcon from "@mui/icons-material/MedicalServicesRounded";
import PermContactCalendarRoundedIcon from "@mui/icons-material/PermContactCalendarRounded";

/*
type Datos = {
  nombre: string;
  citas: Cita[];
  tipo: string;
};

type Boton = {
  texto: string;
  icono: ReactNode;
  accion: () => void;
};*/

export default function ControlPanel() {
  const theme = useTheme();
  const nombre = "Carlos Flores";
  const themeClass =
    theme.palette.mode === "dark" ? "dark-theme" : "light-theme";
  const botones = [
    {
      texto: "Agregar Profesional",
      icono: <PersonAddAltRoundedIcon className="boton-panelcontrol" />,
      accion: () => console.log("Agregar Profesional"),
    },
    {
      texto: "Agregar Paciente",
      icono: <PermContactCalendarRoundedIcon className="boton-panelcontrol" />,
      accion: () => console.log("Agregar Paciente"),
    },
    {
      texto: "Agregar Servicio",
      icono: <MedicalServicesRoundedIcon className="boton-panelcontrol" />,
      accion: () => console.log("Agregar Servicio"),
    },
  ];

  return (
    <Box className="box-panel-control" 
    sx ={{padding: 2,}}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
        <Grid size={12} sx ={{padding: 5}}>
          <Typography variant="h3" className="h1-panel">
            Bienvenid@ al Panel de Control, ASPY
          </Typography>
          <Typography variant="h3" className="h2-panel">
            Administrador {nombre}
          </Typography>
        </Grid>

        <Grid size={4} className="gird-botones-citas">
          <List className={themeClass}>
            {botones.map((boton, index) => (
              <ListItem key={index} disablePadding className="li-botones-citas">
                <ListItemButton
                  onClick={boton.accion}
                  className="ul-botones-citas"
                >
                  <ListItemIcon className="li-icono-citas">
                    {boton.icono}
                  </ListItemIcon>
                  <ListItemText
                    className="li-item-texto"
                    primary={boton.texto}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </Box>
  );
}
