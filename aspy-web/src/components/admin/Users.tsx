import React from "react";
import { useState, useEffect } from "react";
import { useTheme } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import ProfileView from "../ProfileView";
import Paper from "@mui/material/Paper";
import { User } from "@/types/User";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import { usuarios } from "@data/Usuarios";
import {
  DataGrid,
  GridColDef,
  GridToolbar,
  GridRowSelectionModel,
} from "@mui/x-data-grid";

import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AttributionOutlinedIcon from "@mui/icons-material/AttributionOutlined";
import SupervisedUserCircleOutlinedIcon from "@mui/icons-material/SupervisedUserCircleOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

const columns: GridColDef[] = [
  {
    field: "identity",
    headerName: "Cédula",
    disableColumnMenu: true,
    flex: 2,
    resizable: false,
  },
  {
    field: "rol",
    headerName: "rol",
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
    flex: 4,
    resizable: false,
  },
];

// Contar roles
const totalUsuarios = usuarios.length;
const totalProfesionales = usuarios.filter(
  (u) => u.rol === "Profesional"
).length;
const totalPacientes = usuarios.filter((u) => u.rol === "Paciente").length;

const buttonsData = [
  {
    label: "Usuarios Activos",
    value: totalUsuarios,
    icon: <AccountCircleOutlinedIcon fontSize="inherit" />,
  },
  {
    label: "Profesionales",
    value: totalProfesionales,
    icon: <SupervisedUserCircleOutlinedIcon fontSize="inherit" />,
  },
  {
    label: "Pacientes",
    value: totalPacientes,
    icon: <AttributionOutlinedIcon fontSize="inherit" />,
  },
];

export default function Users() {
  //Fila seleccionada
  const [rowSelectionModel, setRowSelectionModel] =
    React.useState<GridRowSelectionModel>([]);

  //Usuario seleccionado
  const [user, setUser] = useState<User | null>(null);

  //Theme
  const theme = useTheme();
  const themeClass =
    theme.palette.mode === "dark" ? "dark-theme" : "light-theme";

  //Mostrar el usuario
  useEffect(() => {
    if (rowSelectionModel.length > 0) {
      const selectedUser = usuarios.find(
        (item) => item.id === rowSelectionModel[0]
      );
      if (selectedUser) {
        setUser(selectedUser);
      }
    } else {
      setUser(null); // O setUser(defaultUser) si prefieres uno por defecto
    }
  }, [rowSelectionModel]);

  //Ruta para editar y crear
  const navigate = useNavigate();
  const location = useLocation();
  const handleEdit = () => {
    if (user) {
      const newPath = `${location.pathname}/${user.id}`;
      navigate(newPath);
    }
  };

  const handleCreate = () => {
    const newPath = `/nuevo-usuario`;
    navigate(newPath);
  };

  return (
    <Box className="box-panel-control" sx={{ padding: 2 }}>
      <Grid container spacing={1}>
        <Grid size={12} className="grid-p-patients-tittle">
          <Typography variant="h3" className="h3-patients">
            Usuarios
          </Typography>
          <Divider className="divider-pacientes"></Divider>
        </Grid>

        <Grid size={12}>
          <Stack direction="row" spacing={2}>
            {buttonsData.map((btn, index) => (
              <IconButton
                key={index}
                aria-label="user"
                size="large"
                className="botones-admin"
              >
                {btn.icon}
                <Grid container sx={{ marginLeft: 2 }}>
                  <Grid size={12}>
                    <Typography variant="body1" className="typo-tittle-boton">
                      {btn.label}
                    </Typography>
                  </Grid>
                  <Grid size={12}>
                    <Typography variant="body1" className="typo-number-boton">
                      {btn.value}
                    </Typography>
                  </Grid>
                </Grid>
              </IconButton>
            ))}
            <IconButton
              aria-label="add"
              size="large"
              className="boton-agregar"
              onClick={handleCreate}
            >
              <AddCircleOutlineOutlinedIcon fontSize="inherit" />
              <Typography
                variant="body1"
                className="typo-tittle-boton"
                sx={{ marginLeft: 2 }}
              >
                Agrergar Usuario
              </Typography>
            </IconButton>
          </Stack>
        </Grid>

        <Grid size={8} className={themeClass}>
          <Paper sx={{ height: "100vh", width: "100%" }}>
            <DataGrid
              className="data-grid-custom"
              rows={usuarios}
              columns={columns}
              getRowId={(row) => row.id}
              /* initialState={{ pagination: { paginationModel } }}*/
              autoPageSize
              slots={{ toolbar: GridToolbar }}
              onRowSelectionModelChange={(newRowSelectionModel) => {
                setRowSelectionModel(newRowSelectionModel);
              }}
              rowSelectionModel={rowSelectionModel}
              disableColumnFilter
              disableColumnSelector
              disableDensitySelector
              slotProps={{ toolbar: { showQuickFilter: true } }}
            />
          </Paper>
        </Grid>
        {user && (
          <Grid size={4} className={themeClass}>
            <ProfileView
              user_info={user}
              onEdit={handleEdit}
              isRowPosition={false}
            />
          </Grid>
        )}
      </Grid>
    </Box>
  );
}
