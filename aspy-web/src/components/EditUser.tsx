import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import UserForm from "@forms/UserForm";

export default function EditRole() {
  //Obtener usuario
  const { id } = useParams();
  const numericId = parseInt(id!);

  return (
    <Box className="box-panel-control" sx={{ padding: 2 }}>
      <Grid container spacing={2}>
        <Grid size={12} className="grid-p-patients-tittle">
          <Grid container spacing={0}>
            <Grid size={9} marginBottom={"4px"}>
              <Typography variant="h3">Editar Usuario</Typography>
            </Grid>
          </Grid>
          <Divider className="divider-paciente-historial"></Divider>
        </Grid>

        <Grid size={12}>
          <UserForm isEditMode={true} userId={numericId} />
        </Grid>
      </Grid>
    </Box>
  );
}
