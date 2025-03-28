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
};

export default  function ControlPanel() {

  const nombre = "Carlos Flores";
  const citas = [
    {
      paciente: "Carlos Flores",
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
      profesional: "Dr. Mario Perez",
      hora: "2:30 PM",
      fecha: "2025-03-15",
    },
    {
      paciente: "Carlos Lopez",
      profesional: "Dr. Juan Leon",
      hora: "2:30 PM",
      fecha: "2025-03-15",
    },
    {
      paciente: "Carlos Lopez",
      profesional: "Dr. Maria Quimis",
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

  const botones = [
    {
      texto: "Agendar Nueva Cita",
      icono: <EditCalendarRoundedIcon className="boton-panelcontrol" />,
      accion: () => console.log("Agendar Nueva Cita"),
    },
  ];

  return (
    <Box className="box-panel-control">
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
        <Grid size={12}>
          <h1>Bienvenid@ al Panel de Control, ASPY</h1>
          <h2>
            Estimado {nombre}
          </h2>
          <h3>Proximas citas:</h3>
        </Grid>

        <Grid size={8}>
          <Box className="box-citas">
            {citas.map((cita /*, index*/) => (
              <Card className="card-citas">
                <CardActionArea
                  /*onClick={() => setSelectedCard(index)}*/
                  /*data-active={selectedCard === index ? "" : undefined}*/
                  className="card-action-citas"
                >
                  <CardContent className="card-content-citas">
                    <Typography>
                      <p className="typography-citas">
                        Paciente: {cita.paciente}
                      </p>
                    </Typography>
                    <Typography>
                      <p className="typography-citas">
                        Profesional: {cita.profesional}
                      </p>
                    </Typography>

                    <Divider className="divider-citas" />

                    <Grid container spacing={1} className="grid-citas-fecha">
                      <Grid size={{ xs: 10, md: 10 }}>
                        <p className="p-citas">{cita.hora}</p>
                      </Grid>
                      <Grid size={{ xs: 2, md: 2 }}>
                        <p className="p-citas">{cita.fecha}</p>
                      </Grid>
                    </Grid>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
          </Box>
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

