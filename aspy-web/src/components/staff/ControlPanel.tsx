/*import { ReactNode } from "react";*/

import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { useTheme } from "@mui/material";
import { getAuthenticatedUserName, getAuthenticatedUserEmail } from '@store';

import PersonAddAltRoundedIcon from "@mui/icons-material/PersonAddAltRounded";
import MedicalServicesRoundedIcon from "@mui/icons-material/MedicalServicesRounded";
import EditCalendarRoundedIcon from "@mui/icons-material/EditCalendarRounded";
import PermContactCalendarRoundedIcon from "@mui/icons-material/PermContactCalendarRounded";

/*
type Cita = {
  fecha: string;
  paciente: string;
  profesional: string;
  hora: string;
};

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
    {
      texto: "Agendar Nueva Cita",
      icono: <EditCalendarRoundedIcon className="boton-panelcontrol" />,
      accion: () => console.log("Agendar Nueva Cita"),
    },
  ];

  const citas = [
    {
      paciente: "Ana Garcia",
      profesional: "Dr. Luis Martinez",
      hora: "10:00 AM",
      fecha: "2025-03-15",
    },
    {
      paciente: "Carlos Lopez",
      profesional: "Dr. Maria Fernandez",
      hora: "2:30 PM",
      fecha: "2025-03-15",
    },
    {
      paciente: "Carlos Lopez",
      profesional: "Dr. Maria Fernandez",
      hora: "2:30 PM",
      fecha: "2025-03-15",
    },
    {
      paciente: "Carlos Lopez",
      profesional: "Dr. Maria Fernandez",
      hora: "2:30 PM",
      fecha: "2025-03-15",
    },
    {
      paciente: "Carlos Lopez",
      profesional: "Dr. Maria Fernandez",
      hora: "2:30 PM",
      fecha: "2025-03-15",
    },
    {
      paciente: "Carlos Lopez",
      profesional: "Dr. Maria Fernandez",
      hora: "2:30 PM",
      fecha: "2025-03-15",
    },
  ];

  return (
    <Box className="box-panel-control" sx ={{padding: 2}}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
        <Grid size={12} sx ={{padding: 5}}>
          <Typography variant="h3" className="h1-panel">
            Bienvenid@ al Panel de Control, ASPY
          </Typography>
          <Typography variant="h3" className="h2-panel">
            Secr. {getAuthenticatedUserName()}
          </Typography>
          <Typography variant="h3">Proximas citas:</Typography>
        </Grid>

        <Grid size={8}>
          <Box className={themeClass}>
            {citas.map((cita, index) => (
              <Card key={index} className="card-citas">
                <CardContent className="card-content-citas">
                  {/*Quité CardActionArea*/}
                  <Typography className="typography-citas" variant="body1">
                    Paciente: {cita.paciente}
                  </Typography>
                  <Typography className="typography-citas" variant="body1">
                    Profesional: {cita.profesional}
                  </Typography>

                  <Divider className="divider-citas" />

                  <Grid container spacing={1} className="grid-citas-fecha">
                    <Grid size={{ xs: 10, md: 10 }}>
                      <Typography className="p-citas">{cita.hora}</Typography>
                    </Grid>
                    <Grid size={{ xs: 2, md: 2 }}>
                      <Typography className="p-citas">{cita.fecha}</Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            ))}
          </Box>
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
