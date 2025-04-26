import { useState } from "react";
import { useTheme } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import {
  DataGrid,
  GridColDef,
  GridToolbar,
  GridRowSelectionModel,
} from "@mui/x-data-grid";
import { Permiso } from "@/types/Permiso";
import { roles } from "@data/Roles";

import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import ContactPageRoundedIcon from "@mui/icons-material/ContactPageRounded";

export default function Roles() {
  const [rowSelectionModel, setRowSelectionModel] =
    useState<GridRowSelectionModel>([]);

  const theme = useTheme();
  const themeClass =
    theme.palette.mode === "dark" ? "dark-theme" : "light-theme";

  //Ruta para editar y crear
  const navigate = useNavigate();
  const location = useLocation();

  const handleEdit = (id: number) => {
    const newPath = `${location.pathname}/${id}`;
    navigate(newPath);
  };

  const handleCreate = () => {
    const newPath = `/nuevo-rol`;
    navigate(newPath);
  };

  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "ID",
      flex: 1,
      disableColumnMenu: true,
      resizable: false,
    },
    {
      field: "nombre",
      headerName: "Nombre del Rol",
      flex: 2,
      disableColumnMenu: true,
      resizable: false,
    },
    {
      field: "permisos",
      headerName: "Permisos",
      flex: 4,
      disableColumnMenu: true,
      resizable: false,
      renderCell: (params) => {
        return (
          <Typography variant="body2">
            {params.value.map((p: Permiso) => p.nombre).join(", ")}
          </Typography>
        );
      },
    },
    {
      field: "acciones",
      headerName: "",
      flex: 1,
      sortable: false,
      filterable: false,
      disableColumnMenu: true,
      resizable: false,
      align: "center",
      headerAlign: "center",
      renderCell: (params) => (
        <Button
          onClick={() => handleEdit(params.row.id)}
          variant="text"
          color="primary"
          className="boton-editar"
        >
          <EditOutlinedIcon />
        </Button>
      ),
    },
  ];

  return (
    <Box className="box-panel-control" sx={{ padding: 2 }}>
      <Grid container spacing={1}>
        <Grid size={12} className="grid-p-patients-tittle">
          <Typography variant="h3" className="h3-patients">
            Roles
          </Typography>
          <Divider className="divider-pacientes" />
        </Grid>

        <Grid size={12}>
          <Stack direction="row" spacing={2}>
            <IconButton aria-label="rol" size="large" className="botones-admin">
              <ContactPageRoundedIcon fontSize="inherit" />
              <Grid container sx={{ marginLeft: 2 }}>
                <Grid size={12}>
                  <Typography variant="body1" className="typo-tittle-boton">
                    Total Roles
                  </Typography>
                </Grid>
                <Grid size={12}>
                  <Typography variant="body1" className="typo-number-boton">
                    {roles.length}
                  </Typography>
                </Grid>
              </Grid>
            </IconButton>

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
                Agregar Rol
              </Typography>
            </IconButton>
          </Stack>
        </Grid>

        <Grid
          size={12}
          className={themeClass}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Paper sx={{ height: "70vh", width: "98%" }}>
            <DataGrid
              className="data-grid-custom"
              rows={roles}
              columns={columns}
              getRowId={(row) => row.id}
              autoPageSize
              slots={{ toolbar: GridToolbar }}
              onRowSelectionModelChange={(newSelection) =>
                setRowSelectionModel(newSelection)
              }
              rowSelectionModel={rowSelectionModel}
              disableColumnFilter
              disableColumnSelector
              disableDensitySelector
              slotProps={{ toolbar: { showQuickFilter: true } }}
            />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
