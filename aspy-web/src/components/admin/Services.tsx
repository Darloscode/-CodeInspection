import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useTheme } from "@mui/material";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import { servicios } from "@data/Servicios";
import {
  DataGrid,
  GridColDef,
  GridToolbar,
  GridRowSelectionModel,
} from "@mui/x-data-grid";

import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import AssignmentTurnedInRoundedIcon from "@mui/icons-material/AssignmentTurnedInRounded";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

export default function Services() {
  const [rowSelectionModel, setRowSelectionModel] =
    useState<GridRowSelectionModel>([]);

  //Servicio seleccionado
  //const [servicio, setServicio] = useState<Servicio | null>(null);

  const theme = useTheme();
  const themeClass =
    theme.palette.mode === "dark" ? "dark-theme" : "light-theme";

  //Mostrar el servicios
  /*
  useEffect(() => {
    if (rowSelectionModel.length > 0) {
      const selectedService = servicios.find(
        (item) => item.id === rowSelectionModel[0]
      );
      if (selectedService) {
        setServicio(selectedService);
      }
    } else {
      setServicio(null);
    }
  }, [rowSelectionModel]);
  */

  //Ruta para editar y crear
  const navigate = useNavigate();
  const location = useLocation();

  const handleEdit = (id: number) => {
    const newPath = `${location.pathname}/${id}`;
    navigate(newPath);
  };

  const handleCreate = () => {
    const newPath = `/nuevo-servicio`;
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
      headerName: "Nombre",
      flex: 2,
      disableColumnMenu: true,
      resizable: false,
    },
    {
      field: "descripcion",
      headerName: "Descripción",
      flex: 3,
      disableColumnMenu: true,
      resizable: false,
    },
    {
      field: "costo",
      headerName: "Costo",
      flex: 2,
      disableColumnMenu: true,
      resizable: false,
      renderCell: (params) => {
        return <Typography variant="body1">$ {params.value}</Typography>;
      },
    },
    {
      field: "duracion_minutos",
      headerName: "Duración",
      flex: 2,
      disableColumnMenu: true,
      resizable: false,
      renderCell: (params) => {
        return <Typography variant="body1">{params.value} min</Typography>;
      },
    },
    {
      field: "tipo_servicio",
      headerName: "Tipo",
      flex: 3,
      disableColumnMenu: true,
      resizable: false,
    },
    {
      field: "activo",
      headerName: "Activo",
      flex: 2,
      disableColumnMenu: true,
      resizable: false,
      renderCell: (params) => (params.value ? "Sí" : "No"),
    },
    {
      field: "actualizado_en",
      headerName: "Últ. Act.",
      flex: 2,
      disableColumnMenu: true,
      resizable: false,
      valueFormatter: (params) => new Date(params).toLocaleDateString("es-ES"),
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
            Lista de Servicios
          </Typography>
          <Divider className="divider-pacientes" />
        </Grid>

        <Grid size={12}>
          <Stack direction="row" spacing={2}>
            <IconButton aria-label="rol" size="large" className="botones-admin">
              <AssignmentTurnedInRoundedIcon fontSize="inherit" />
              <Grid container sx={{ marginLeft: 2 }}>
                <Grid size={12}>
                  <Typography variant="body1" className="typo-tittle-boton">
                    Total Servicios
                  </Typography>
                </Grid>
                <Grid size={12}>
                  <Typography variant="body1" className="typo-number-boton">
                    {servicios.length}
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
                Agregar Servicio
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
              rows={servicios}
              columns={columns}
              getRowId={(row) => row.id}
              autoPageSize
              /*checkboxSelection*/
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
