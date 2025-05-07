import { useState, useEffect } from "react";
import { GridRowSelectionModel } from "@mui/x-data-grid";
import { useTheme } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { User } from "@/types/User";
import { usuarios } from "@data/Usuarios";
import { columnsUsers } from "@utils/columns";
import Table from "@components/Table";
import Button from "@mui/material/Button";
import ProfileView from "@components/ProfileView";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";

import AddRoundedIcon from "@mui/icons-material/AddRounded";

export default function ProffesionalList() {
  const [rowSelection, setRowSelection] = useState<GridRowSelectionModel>([]);

  const theme = useTheme().palette.mode;
  const themeClass = theme === "dark" ? "dark-theme" : "light-theme";

  //Usuario seleccionado
  const [user, setUser] = useState<User | null>(null);

  //Mostrar el usuario
  useEffect(() => {
    if (rowSelection.length > 0) {
      const selectedUser = usuarios.find((item) => item.id === rowSelection[0]);
      if (selectedUser) {
        setUser(selectedUser);
      }
    } else {
      setUser(null);
    }
  }, [rowSelection]);

  //Ruta para editar y crear
  const navigate = useNavigate();
  const location = useLocation();

  const handleEdit = () => {
    if (user) {
      const newPath = `${location.pathname}/${user.id}`;
      navigate(newPath);
    }
  };

  const handleCreateProfessional = () => {
    const newPath = `/crear-profesional`;
    navigate(newPath);
  };

  return (
    <Box className="box-panel-control" sx={{ padding: 2 }}>
      <Grid container spacing={1}>
        <Grid size={12} className="grid-p-patients-tittle">
          <Grid container spacing={0}>
            <Grid size={8}>
              <Typography variant="h3">Profesionales</Typography>
            </Grid>
            <Grid size={4} display="flex" justifyContent="flex-end">
              <Button
                onClick={handleCreateProfessional}
                variant="outlined"
                startIcon={<AddRoundedIcon fontSize="large" />}
                className="guardar"
              >
                Agregar Profesional
              </Button>
            </Grid>
          </Grid>
          <Divider className="divider-paciente-historial"></Divider>
        </Grid>
        <Grid size={8} className={themeClass}>
          <Table<User>
            columns={columnsUsers}
            rows={usuarios}
            rowSelectionModel={rowSelection}
            onRowSelectionChange={(newSelection) =>
              setRowSelection(newSelection)
            }
          />
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
