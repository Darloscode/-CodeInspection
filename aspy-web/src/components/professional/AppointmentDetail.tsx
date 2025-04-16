import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import LogoClaro from "@assets/logo mediano.png";
import LogoOscuro from "@assets/logo aspy negativo mediano.png";
import { User } from "../../types/User";
import { useParams } from "react-router-dom";
import Divider from "@mui/material/Divider";
import { useTheme } from "@mui/material";

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
  const { id } = useParams();
  const numericId = id ? parseInt(id.split("-")[0]) : null;
  const user: User | undefined = data.find((u) => u.id === numericId);
  const idreporte = 122123221897;
  const fecha = new Date().toLocaleDateString();
  const hora = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const theme = useTheme();

  return (
    <Box className="box-panel-control">
      <Grid container spacing={2}>
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
          <Typography variant="h4">#{idreporte}</Typography>
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
      </Grid>
    </Box>
  );
}
