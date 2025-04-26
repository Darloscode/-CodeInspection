import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ServiceForm from "@forms/ServiceForm";

export default function EditService() {
  //Obtener id servicio
  const { id } = useParams();
  const numericId = id ? parseInt(id) : undefined;

  return (
    <Box className="box-panel-control" sx={{ padding: 2 }}>
      <Grid container spacing={2}>
        <Grid size={12} className="grid-p-patients-tittle">
          <Typography variant="h3" className="h3-patients">
            Editar Servicio
          </Typography>
          <Divider className="divider-pacientes"></Divider>
        </Grid>

        <Grid size={12}>
          <ServiceForm isEditMode={true} serviceId={numericId} />
        </Grid>
      </Grid>
    </Box>
  );
}
