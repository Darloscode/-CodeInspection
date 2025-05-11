import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { GridColDef, GridRowSelectionModel } from "@mui/x-data-grid";
import { useTheme } from "@mui/material";
import { servicios } from "@data/Servicios";
import { Servicio } from "@/types/Servicio";
import { columnsServiceAdmin } from "@utils/columns";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Table from "@components/Table";

import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import AssignmentTurnedInRoundedIcon from "@mui/icons-material/AssignmentTurnedInRounded";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

export default function ServicesList() {
  const [rowSelection, setRowSelection] = useState<GridRowSelectionModel>([]);

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
    const newPath = `/nuevo-servicio`;
    navigate(newPath);
  };

  const columnsExtra: GridColDef[] = [
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

  const newColumns: GridColDef[] = [...columnsServiceAdmin, ...columnsExtra];

  return (
    <Box className="box-panel-control" sx={{ padding: 2 }}>
      <Grid container spacing={1}>
        <Grid size={12} className="grid-p-patients-tittle">
          <Grid container spacing={0}>
            <Grid size={9} marginBottom={"4px"}>
              <Typography variant="h3">Lista de Servicios</Typography>
            </Grid>
          </Grid>
          <Divider className="divider-paciente-historial"></Divider>
        </Grid>

        <Grid size={12}>
          <Stack direction="row" spacing={2}>
            <IconButton size="large" className="botones-admin">
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
              size="large"
              className="botones-admin"
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

        <Grid size={12} className={themeClass + " grid-tabla"}>
          <Table<Servicio>
            columns={newColumns}
            rows={servicios}
            rowSelectionModel={rowSelection}
            onRowSelectionChange={(newSelection) =>
              setRowSelection(newSelection)
            }
          />
        </Grid>
      </Grid>
    </Box>
  );
}
