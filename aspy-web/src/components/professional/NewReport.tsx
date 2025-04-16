import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Divider from "@mui/material/Divider";
import AddReport from "@professional/AddReport";
import AppointmentDetail from "@professional/AppointmentDetail";

export default function NewReport() {
  return (
    <Box className="box-panel-control" sx={{ padding: 2 }}>
      <Grid container spacing={1}>
        <Grid size={12} className="grid-p-patients-tittle">
          <Grid container spacing={0} className="contenedor">
            <Grid size={6}>
              <Typography variant="h3">Pacientes</Typography>
            </Grid>
          </Grid>
          <Divider className="divider-paciente-historial"></Divider>
        </Grid>

        <Grid size={8}>
          <AppointmentDetail />
        </Grid>
        <Grid size={4}>
          <AddReport />
        </Grid>
      </Grid>
    </Box>
  );
}
