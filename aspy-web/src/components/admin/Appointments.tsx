import { useState } from "react";
import { useTheme } from "@mui/material";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import Agenda from "@components/Agenda";
import SelectProfessional from "@admin/SelectProfessional";
import { getCitasProfesional } from "@utils/utils";
import { Cita } from "@/types/Cita";

export default function Appointments() {
  const theme = useTheme();
  const themeClass =
    theme.palette.mode === "dark" ? "dark-theme" : "light-theme";

  const [selectedId, setSelected] = useState<number>();

  const handleSelectProfessional = (id: number) => {
    setSelected(id);
  };

  const citasProfesional: Cita[] = getCitasProfesional(selectedId!);

  return (
    <Box className="box-panel-control" sx={{ padding: 2 }}>
      <Grid container spacing={1}>
        <Grid size={12} className="grid-p-patients-tittle">
          <Typography variant="h3" className="h3-patients">
            Citas de Usuarios
          </Typography>
          <Divider className="divider-pacientes"></Divider>
        </Grid>
        <Grid size={9} className={themeClass}>
          <Agenda citas={citasProfesional} />
        </Grid>
        <Grid size={3}>
          <Typography variant="body1">Profesionales</Typography>
          <SelectProfessional onSelect={handleSelectProfessional} />
        </Grid>
      </Grid>
    </Box>
  );
}
