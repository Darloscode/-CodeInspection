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
import EventNoteRoundedIcon from "@mui/icons-material/EventNoteRounded";
import CreditScoreRoundedIcon from "@mui/icons-material/CreditScoreRounded";
import RequestQuoteRoundedIcon from "@mui/icons-material/RequestQuoteRounded";

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

function crearBotones(tipo: string) {
  let tipoModificado = "";
  let botones: Boton[] = [];

  if (tipo == "Secretario") {
    tipoModificado = "Secr.";
    botones = [
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
      {
        texto: "Agendar Nueva Cita",
        icono: <EditCalendarRoundedIcon className="boton-panelcontrol" />,
        accion: () => console.log("Agendar Nueva Cita"),
      },
    ];
  } else if (tipo == "Profesional") {
    tipoModificado = "Prof.";
    botones = [
      {
        texto: "Agendar Nueva Cita",
        icono: <MedicalServicesRoundedIcon className="boton-panelcontrol" />,
        accion: () => console.log("Agendar Nueva Cita"),
      },
      {
        texto: "Ver Próximas Citas",
        icono: <EventNoteRoundedIcon className="boton-panelcontrol" />,
        accion: () => console.log("Ver Próximas Citas"),
      },
      {
        texto: "Ver mis pagos",
        icono: <CreditScoreRoundedIcon className="boton-panelcontrol" />,
        accion: () => console.log("Ver mis pagos"),
      },
    ];
  } else if (tipo == "Paciente") {
    tipoModificado = "Pac.";
    botones = [
      {
        texto: "Agendar Nueva Cita",
        icono: <MedicalServicesRoundedIcon className="boton-panelcontrol" />,
        accion: () => console.log("Agendar Nueva Cita"),
      },
      {
        texto: "Ver Próximas Citas",
        icono: <EventNoteRoundedIcon className="boton-panelcontrol" />,
        accion: () => console.log("Ver Próximas Citas"),
      },
      {
        texto: "Ver Facturas",
        icono: <RequestQuoteRoundedIcon className="boton-panelcontrol" />,
        accion: () => console.log("Ver Facturas"),
      },
    ];
  }
  return { botones, tipoModificado };
}

function Panel_control({ nombre, citas, tipo }: Datos) {
  const { botones, tipoModificado } = crearBotones(tipo);
  /*const [selectedCard, setSelectedCard] = useState(0);*/

  return (
    <Box className="box-panel-control">
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
        <Grid size={12}>
          <h1>Bienvenid@ al Panel de Control, ASPY</h1>
          <h2>
            {tipoModificado} {nombre}
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

export default Panel_control;
