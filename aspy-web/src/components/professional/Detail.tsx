import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import LogoClaro from "@assets/logo mediano.png";
import LogoOscuro from "@assets/logo aspy negativo mediano.png";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import ReplyRoundedIcon from "@mui/icons-material/ReplyRounded";

import { useTheme } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";

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
    comentario: "Cita inicial con el Dr. Juan para revisión general.",
  },
  {
    id: 2,
    fecha: "2025-04-08",
    horainicio: "10:00",
    horafin: "10:45",
    doctor: doctor1,
    asistio: false,
    comentario: "Paciente no se presentó a la cita.",
  },
  {
    id: 3,
    fecha: "2025-04-09",
    horainicio: "11:00",
    horafin: "11:30",
    doctor: doctor1,
    asistio: true,
    comentario: "Consulta de seguimiento para tratamiento médico.",
  },
  {
    id: 4,
    fecha: "2025-04-10",
    horainicio: "08:30",
    horafin: "09:00",
    doctor: doctor2,
    asistio: true,
    comentario: "Primera cita con el Dr. Ana para examen físico.",
  },
  {
    id: 5,
    fecha: "2025-04-11",
    horainicio: "10:15",
    horafin: "10:45",
    doctor: doctor2,
    asistio: false,
    comentario: "Cita cancelada por el paciente.",
  },
  {
    id: 6,
    fecha: "2025-04-12",
    horainicio: "09:45",
    horafin: "10:15",
    doctor: doctor2,
    asistio: true,
    comentario: "Revisión médica de control de salud.",
  },
  {
    id: 7,
    fecha: "2025-04-13",
    horainicio: "13:00",
    horafin: "13:30",
    doctor: doctor1,
    asistio: true,
    comentario: "Cita de seguimiento para tratamiento en curso.",
  },
  {
    id: 8,
    fecha: "2025-04-14",
    horainicio: "15:00",
    horafin: "15:30",
    doctor: doctor1,
    asistio: false,
    comentario: "Paciente no se presentó a la cita.",
  },
  {
    id: 9,
    fecha: "2025-04-15",
    horainicio: "11:30",
    horafin: "12:00",
    doctor: doctor2,
    asistio: true,
    comentario: "Consulta médica para evaluación de tratamiento.",
  },
  {
    id: 10,
    fecha: "2025-04-16",
    horainicio: "14:00",
    horafin: "14:30",
    doctor: doctor2,
    asistio: true,
    comentario: "Cita para revisión médica y ajuste de tratamiento.",
  },
  {
    id: 11,
    fecha: "2025-04-17",
    horainicio: "16:00",
    horafin: "16:30",
    doctor: doctor1,
    asistio: false,
    comentario: "Paciente no asistió a la cita programada.",
  },
  {
    id: 12,
    fecha: "2025-04-18",
    horainicio: "12:00",
    horafin: "12:30",
    doctor: doctor2,
    asistio: true,
    comentario: "Revisión periódica para evaluación de salud.",
  },
  {
    id: 13,
    fecha: "2025-04-19",
    horainicio: "08:00",
    horafin: "08:30",
    doctor: doctor1,
    asistio: true,
    comentario:
      "Cita de seguimiento con el Dr. Juan para evaluación de salud general.",
  },
];

const data: User[] = [
  {
    id: 1,
    name: "Jhon Gonzales",
    firstName: "Jhon",
    lastName: "Gonzales",
    rol: "Paciente",
    aboutme: "No disponible",
    age: 35,
    gender: "Masculino",
    email: "jgonzales@gmail.com",
    identity: 123456789,
    phone: "0999273651",
  },
  {
    id: 2,
    name: "Maria Martinez",
    firstName: "Maria",
    lastName: "Martinez",
    rol: "Paciente",
    aboutme: "No disponible",
    age: 28,
    gender: "Femenino",
    email: "mmartinez@gmail.com",
    identity: 987654321,
    phone: "0987654321",
  },
  {
    id: 3,
    name: "Carlos Perez",
    firstName: "Carlos",
    lastName: "Perez",
    rol: "Paciente",
    aboutme: "No disponible",
    age: 42,
    gender: "Masculino",
    email: "cperez@gmail.com",
    identity: 456789123,
    phone: "0912345678",
  },
  {
    id: 4,
    name: "Ana Lopez",
    firstName: "Ana",
    lastName: "Lopez",
    rol: "Paciente",
    aboutme: "No disponible",
    age: 30,
    gender: "Femenino",
    email: "alopez@gmail.com",
    identity: 789123456,
    phone: "0999988776",
  },
  {
    id: 5,
    name: "Luis Ramirez",
    firstName: "Luis",
    lastName: "Ramirez",
    rol: "Paciente",
    aboutme: "No disponible",
    age: 37,
    gender: "Masculino",
    email: "lramirez@gmail.com",
    identity: 321654987,
    phone: "0965432187",
  },
  {
    id: 6,
    name: "Sofia Torres",
    firstName: "Sofia",
    lastName: "Torres",
    rol: "Paciente",
    aboutme: "No disponible",
    age: 25,
    gender: "Femenino",
    email: "storres@gmail.com",
    identity: 654987321,
    phone: "0943210987",
  },
  {
    id: 7,
    name: "Jorge Herrera",
    firstName: "Jorge",
    lastName: "Herrera",
    rol: "Paciente",
    aboutme: "No disponible",
    age: 40,
    gender: "Masculino",
    email: "jherrera@gmail.com",
    identity: 987321654,
    phone: "0981122334",
  },
  {
    id: 8,
    name: "Laura Diaz",
    firstName: "Laura",
    lastName: "Diaz",
    rol: "Paciente",
    aboutme: "No disponible",
    age: 29,
    gender: "Femenino",
    email: "ldiaz@gmail.com",
    identity: 123789456,
    phone: "0977665544",
  },
  {
    id: 9,
    name: "Miguel Castro",
    firstName: "Miguel",
    lastName: "Castro",
    rol: "Paciente",
    aboutme: "No disponible",
    age: 33,
    gender: "Masculino",
    email: "mcastro@gmail.com",
    identity: 456123789,
    phone: "0934567890",
  },
  {
    id: 10,
    name: "Isabel Vega",
    firstName: "Isabel",
    lastName: "Vega",
    rol: "Paciente",
    aboutme: "No disponible",
    age: 26,
    gender: "Femenino",
    email: "ivega@gmail.com",
    identity: 789456123,
    phone: "0922334455",
  },
  {
    id: 11,
    name: "Ricardo Morales",
    firstName: "Ricardo",
    lastName: "Morales",
    rol: "Paciente",
    aboutme: "No disponible",
    age: 38,
    gender: "Masculino",
    email: "rmorales@gmail.com",
    identity: 112233445,
    phone: "0911998877",
  },
  {
    id: 12,
    name: "Elena Garcia",
    firstName: "Elena",
    lastName: "Garcia",
    rol: "Paciente",
    aboutme: "No disponible",
    age: 31,
    gender: "Femenino",
    email: "egarcia@gmail.com",
    identity: 998877665,
    phone: "0955778899",
  },
  {
    id: 13,
    name: "Fernando Sanchez",
    firstName: "Fernando",
    lastName: "Sanchez",
    rol: "Paciente",
    aboutme: "No disponible",
    age: 45,
    gender: "Masculino",
    email: "fsanchez@gmail.com",
    identity: 556677889,
    phone: "0944885566",
  },
  {
    id: 14,
    name: "Claudia Rojas",
    firstName: "Claudia",
    lastName: "Rojas",
    rol: "Paciente",
    aboutme: "No disponible",
    age: 27,
    gender: "Femenino",
    email: "crojas@gmail.com",
    identity: 334455667,
    phone: "0933445566",
  },
  {
    id: 15,
    name: "Oscar Mendoza",
    firstName: "Oscar",
    lastName: "Mendoza",
    rol: "Paciente",
    aboutme: "No disponible",
    age: 36,
    gender: "Masculino",
    email: "omendoza@gmail.com",
    identity: 778899001,
    phone: "0900112233",
  },
];

export default function AppointmentDetail() {
  const { id, citaId } = useParams(); // Extraer los parámetros de la URL
  const numericId = id ? parseInt(id.split("-")[0]) : null;
  const user = data.find((u) => u.id === numericId);
  const cita = citas.find((c) => c.id.toString() === citaId);
  const fecha = new Date().toLocaleDateString();
  const hora = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1); // Esto te lleva a la página anterior
  };
  const theme = useTheme();
  return (
    <Box className="box-panel-control" sx={{ padding: 2 }}>
      <Grid container spacing={2}>
        <Grid size={12} className="grid-p-patients-tittle">
          <Grid container spacing={0} className="contenedor">
            <Grid size={6}>
              <Typography variant="h3">Pacientes</Typography>
            </Grid>
            <Grid size={6} display="flex" justifyContent="flex-end">
              <Button
                onClick={handleBack}
                variant="outlined"
                startIcon={<ReplyRoundedIcon />}
              >
                Volver
              </Button>
            </Grid>
          </Grid>
          <Divider className="divider-paciente-historial"></Divider>
        </Grid>
        <Grid size={12} className="grid-detalles">
          <Grid container width={"80%"}>
            <Grid container size={12}>
              <Grid size={6} className="grid-empresa" sx={{}}>
                <Typography variant="h2">Fundación ASPY</Typography>
              </Grid>
              <Grid size={6} className="grid-logo">
                <img
                  src={theme.palette.mode === "dark" ? LogoOscuro : LogoClaro}
                  alt="Logo"
                  width={200}
                />
              </Grid>
            </Grid>
            <Grid size={12} textAlign={"center"}>
              <Typography variant="h4">#{cita?.id}</Typography>
            </Grid>
            <Grid container size={12}>
              <Grid size={6} width={"10%"}>
                <Typography variant="body1">Fecha</Typography>
              </Grid>
              <Grid size={6} width={"20%"} textAlign={"right"}>
                <Typography variant="body1" className="negrita">
                  {fecha}
                </Typography>
              </Grid>
            </Grid>
            <Grid container size={12}>
              <Grid size={6} width={"10%"}>
                <Typography variant="body1">Hora</Typography>
              </Grid>
              <Grid size={6} width={"20%"} textAlign={"right"}>
                <Typography variant="body1" className="negrita">
                  {hora}
                </Typography>
              </Grid>
            </Grid>
            <Grid size={12}>
              <Divider className="divider-report" />
            </Grid>
            <Grid container size={12}>
              <Grid size={6} textAlign={"left"}>
                <Typography variant="body1" className="typo-report">
                  Profesional
                </Typography>
                <Typography variant="body1">
                  {user?.firstName} {user?.lastName}
                </Typography>
                <Typography variant="body1">{user?.email}</Typography>
                <Typography variant="body1">
                  {"Aquí va dirección"}
                  {user?.address}
                </Typography>
                <Typography variant="body1">{user?.phone}</Typography>
              </Grid>
              <Grid size={6} textAlign={"right"}>
                <Typography variant="body1" className="typo-report">
                  Paciente
                </Typography>
                <Typography variant="body1">
                  {user?.firstName} {user?.lastName}
                </Typography>
                <Typography variant="body1">{user?.email}</Typography>
                <Typography variant="body1">
                  {"Aquí va dirección"}
                  {user?.address}
                </Typography>
                <Typography variant="body1">{user?.phone}</Typography>
              </Grid>
            </Grid>
            <Grid size={12}>
              <Divider className="divider-report" />
            </Grid>
            <Grid size={12}>
              <Typography variant="body1" className="typo-report">
                Comentario
              </Typography>
              <Typography variant="body1">{cita?.comentario}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
