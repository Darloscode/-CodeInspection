import { ReactNode } from "react";

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
import CardActionArea from "@mui/material/CardActionArea";
import Divider from "@mui/material/Divider";

import PersonAddAltRoundedIcon from "@mui/icons-material/PersonAddAltRounded";
import MedicalServicesRoundedIcon from "@mui/icons-material/MedicalServicesRounded";
import EditCalendarRoundedIcon from "@mui/icons-material/EditCalendarRounded";
import PermContactCalendarRoundedIcon from "@mui/icons-material/PermContactCalendarRounded";

type Datos = {
  nombre: string;
  citas: Cita[];
  tipo: string;
};

type Boton = {
  texto: string;
  icono: ReactNode;
  accion: () => void;
};

export default  function ControlPanel() {

  const nombre = "Carlos Flores";

  const botones = [
    {
      texto: "Agregar Profesional",
      icono: <PersonAddAltRoundedIcon className="boton-panelcontrol" />,
      accion: () => console.log("Agregar Profesional"),
    },
    {
      texto: "Agregar Paciente",
      icono: (
        <PermContactCalendarRoundedIcon className="boton-panelcontrol" />
      ),
      accion: () => console.log("Agregar Paciente"),
    },
    {
      texto: "Agregar Servicio",
      icono: <MedicalServicesRoundedIcon className="boton-panelcontrol" />,
      accion: () => console.log("Agregar Servicio"),
    },
  ];

  return (
    <Box className="box-panel-control">
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
        <Grid size={12}>
          <h1>Bienvenid@ al Panel de Control, ASPY</h1>
          <h2>
            Administrador {nombre}
          </h2>
        </Grid>

        <Grid size={4} className="gird-botones-citas">
          <List>
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

