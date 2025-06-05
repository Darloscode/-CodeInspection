import { useState } from "react";
import { useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { getCitasProfesional } from "@utils/utils";
import { Cita } from "@/types/Cita";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import Agenda from "@components/Agenda";
import SelectProfessional from "@components/SelectProfessional";

import AddRoundedIcon from "@mui/icons-material/AddRounded";

export default function Appointments() {
  const theme = useTheme();
  const themeClass =
    theme.palette.mode === "dark" ? "dark-theme" : "light-theme";

  const navigate = useNavigate();

  const [selectedId, setSelected] = useState<number>();

  const handleSelectProfessional = (id: number) => {
    setSelected(id);
  };

  const citasProfesional: Cita[] = getCitasProfesional(selectedId!);

  const handleCreateAppointment = () => {
    const newPath = `/agendar-cita`;
    navigate(newPath);
  };

  return (
    <Box className="box-panel-control" sx={{ padding: 2 }}>
      <Grid container spacing={1}>
        <Grid size={12} className="grid-p-patients-tittle">
          <Grid container spacing={0}>
            <Grid size={9}>
              <Typography variant="h3">Citas</Typography>
            </Grid>
            <Grid size={3} display="flex" justifyContent="flex-end">
              <Button
                onClick={handleCreateAppointment}
                variant="outlined"
                startIcon={<AddRoundedIcon fontSize="large" />}
                className="guardar"
              >
                Nueva Cita
              </Button>
            </Grid>
          </Grid>
          <Divider className="divider-paciente-historial"></Divider>
        </Grid>
        <Grid size={9} className={themeClass}>
          <Agenda citas={citasProfesional} />
        </Grid>
        <Grid size={3}>
          <SelectProfessional onSelect={handleSelectProfessional} />
        </Grid>
      </Grid>
    </Box>
  );
}
