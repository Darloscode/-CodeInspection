import React from "react";
import { useState, useEffect } from "react";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import { useTheme } from "@mui/material";
import Typography from "@mui/material/Typography";
import OverviewPersona from "../OverviewPersona";
import Paper from "@mui/material/Paper";
import { User } from "../../types/User";
import { useNavigate, useLocation } from "react-router-dom";

import {
  DataGrid,
  GridColDef,
  GridToolbar,
  GridRowSelectionModel,
} from "@mui/x-data-grid";

const columns: GridColDef[] = [
  {
    field: "identity",
    headerName: "Cédula",
    disableColumnMenu: true,
    flex: 2,
    resizable: false,
  },
  {
    field: "firstName",
    headerName: "Nombres",
    disableColumnMenu: true,
    flex: 2,
    resizable: false,
  },
  {
    field: "lastName",
    headerName: "Apellidos",
    disableColumnMenu: true,
    flex: 2,
    resizable: false,
  },
  {
    field: "email",
    headerName: "Correo",
    disableColumnMenu: true,
    flex: 2,
    resizable: false,
  },
];

const rows: User[] = [
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

export default function PatientsList() {
  const [rowSelectionModel, setRowSelectionModel] =
    React.useState<GridRowSelectionModel>([]);
  const [user, setUser] = useState<User | null>(null);
  /*
  const navigate = useNavigate();
  const location = useLocation();
  const handleClick = () => {
    navigate(`${location.pathname}/hola`);
  };
  */
  const theme = useTheme();
  const themeClass =
    theme.palette.mode === "dark" ? "dark-theme" : "light-theme";

  useEffect(() => {
    if (rowSelectionModel.length > 0) {
      const selectedUser = rows.find(
        (item) => item.id === rowSelectionModel[0]
      );
      if (selectedUser) {
        setUser(selectedUser);
      }
    } else {
      setUser(null); // O setUser(defaultUser) si prefieres uno por defecto
    }
  }, [rowSelectionModel]);

  const navigate = useNavigate();
  const location = useLocation();
  const handleMoreInfo = () => {
    if (user) {
      const newPath = `${location.pathname}/${user.id}-${user.firstName.toLowerCase()}`;
      navigate(newPath);
    }
  };

  return (
    <Box className="box-panel-control" sx={{ padding: 2 }}>
      <Grid container spacing={1}>
        <Grid size={12} className="grid-p-patients-tittle">
          <Typography variant="h3" className="h3-patients">
            Pacientes
          </Typography>
          <Divider className="divider-pacientes"></Divider>
        </Grid>
        <Grid size={8} className={themeClass}>
          <Paper sx={{ height: "100vh", width: "100%" }}>
            <DataGrid
              className="data-grid-custom"
              /*
              sx={{
                border: 1,
                "& .MuiDataGrid-row:nth-of-type(odd)": {
                  backgroundColor: "#E3F2FD",
                },
                "& .MuiDataGrid-row:nth-of-type(even)": {
                  backgroundColor: "#FFFFFF",
                },
                "& .Mui-selected": {
                  backgroundColor: "#509CDB !important",
                  color: "white !important",
                },
              }}*/
              rows={rows}
              columns={columns}
              /* initialState={{ pagination: { paginationModel } }} */
              autoPageSize
              slots={{ toolbar: GridToolbar }}
              onRowSelectionModelChange={(newRowSelectionModel) => {
                setRowSelectionModel(newRowSelectionModel);
              }}
              rowSelectionModel={rowSelectionModel}
              disableColumnFilter
              disableColumnSelector
              disableDensitySelector
              slotProps={{
                toolbar: {
                  showQuickFilter: true,
                },
              }}
            />
          </Paper>
        </Grid>
        {user && (
          <Grid size={4} className={themeClass}>
            <OverviewPersona
              key={user.id}
              selectedData={user}
              moreInfo={handleMoreInfo}
            />
          </Grid>
        )}
      </Grid>
    </Box>
  );
}
