// Hay que instalar npm install @mui/lab@6.0.0-beta.32

import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

import { Cita } from "../../types/Cita";
import { User } from "../../types/User";

const doctor1: User = {
  id: 1,
  firstName: "Juan",
  lastName: "Pérez",
  email: "juan.perez@ejemplo.com",
};

const doctor2: User = {
  id: 2,
  firstName: "María",
  lastName: "López",
  email: "maria.lopez@ejemplo.com",
};

const citas: Cita[] = [
  {
    id: 1,
    fecha: "2025-04-07",
    horainicio: "09:00",
    horafin: "09:30",
    doctor: doctor1,
    asistio: true,
  },
  {
    id: 2,
    fecha: "2025-04-08",
    horainicio: "10:00",
    horafin: "10:45",
    doctor: doctor1,
    asistio: false,
  },
  {
    id: 3,
    fecha: "2025-04-09",
    horainicio: "11:00",
    horafin: "11:30",
    doctor: doctor1,
    asistio: true,
  },
  {
    id: 4,
    fecha: "2025-04-10",
    horainicio: "08:30",
    horafin: "09:00",
    doctor: doctor2,
    asistio: true,
  },
  {
    id: 5,
    fecha: "2025-04-11",
    horainicio: "10:15",
    horafin: "10:45",
    doctor: doctor2,
    asistio: false,
  },
  {
    id: 6,
    fecha: "2025-04-12",
    horainicio: "09:45",
    horafin: "10:15",
    doctor: doctor2,
    asistio: true,
  },
  {
    id: 7,
    fecha: "2025-04-13",
    horainicio: "13:00",
    horafin: "13:30",
    doctor: doctor1,
    asistio: true,
  },
  {
    id: 8,
    fecha: "2025-04-14",
    horainicio: "15:00",
    horafin: "15:30",
    doctor: doctor1,
    asistio: false,
  },
  {
    id: 9,
    fecha: "2025-04-15",
    horainicio: "11:30",
    horafin: "12:00",
    doctor: doctor2,
    asistio: true,
  },
  {
    id: 10,
    fecha: "2025-04-16",
    horainicio: "14:00",
    horafin: "14:30",
    doctor: doctor2,
    asistio: true,
  },
  {
    id: 11,
    fecha: "2025-04-17",
    horainicio: "16:00",
    horafin: "16:30",
    doctor: doctor1,
    asistio: false,
  },
  {
    id: 12,
    fecha: "2025-04-18",
    horainicio: "12:00",
    horafin: "12:30",
    doctor: doctor2,
    asistio: true,
  },
  {
    id: 13,
    fecha: "2025-04-19",
    horainicio: "08:00",
    horafin: "08:30",
    doctor: doctor1,
    asistio: true,
  },
];

export default function TimeLinePatients() {
  const theme = useTheme();
  const themeClass =
    theme.palette.mode === "dark" ? "dark-theme" : "light-theme";

  const navigate = useNavigate();
  const location = useLocation();

  const handleMoreInfo = (cita: Cita) => {
    navigate(`${location.pathname}/${cita.id}`); // Navegar a la página de detalles
  };

  /*
  const handleMoreInfo = () => {
    if (user) {
      const newPath = `${location.pathname}/${user.id}-${user.firstName.toLowerCase()}`;
      navigate(newPath);
    }
  };*/
  return (
    <Timeline
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}
      className={themeClass}
    >
      {citas.map((cita, index) => (
        <TimelineItem key={index}>
          <TimelineSeparator>
            <TimelineDot /*color={cita.asistio ? "success" : "error"}*/ />
            {index < citas.length && <TimelineConnector />}
          </TimelineSeparator>
          <TimelineContent>
            <Grid container spacing={10} sx={{ marginBottom: "3%" }}>
              <Grid size={8}>
                <Typography variant="body1">
                  <strong>Fecha:</strong> {cita.fecha}
                </Typography>
                <Typography variant="body1">
                  <strong>Hora:</strong> {cita.horainicio} - {cita.horafin}
                </Typography>
                <Typography variant="body1">
                  <strong>Profesional:</strong> {cita.doctor.firstName}{" "}
                  {cita.doctor.lastName}
                </Typography>
                <Typography variant="body1">
                  <strong>{cita.asistio ? "Asistió" : "No Asistió"}</strong>
                </Typography>
              </Grid>
              <Grid
                size={4}
                container
                justifyContent="center"
                alignItems="center"
              >
                <Button
                  variant="outlined"
                  onClick={() => handleMoreInfo(cita)}
                  className="button-ver-detalles"
                >
                  Ver detalles
                </Button>
              </Grid>
            </Grid>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}

/*
export default function TimeLinePatients() {
  return <h1>Hola</h1>;
}*/
