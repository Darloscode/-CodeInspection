import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import UserForm from "@forms/UserForm";

export default function EditRole() {
  //Obtener usuario
  const { id } = useParams();
  const numericId = id ? parseInt(id) : undefined;

  return (
    <Box className="box-panel-control" sx={{ padding: 2 }}>
      <Grid container spacing={2}>
        <Grid size={12} className="grid-p-patients-tittle">
          <Typography variant="h3" className="h3-patients">
            Editar Usuario
          </Typography>
          <Divider className="divider-pacientes"></Divider>
        </Grid>

        <Grid size={12}>
          <UserForm isEditMode={true} userId={numericId} />
        </Grid>
      </Grid>
    </Box>
  );
}
