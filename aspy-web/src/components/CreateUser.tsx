import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import UserForm from "@forms/UserForm";

interface CreateUserProps {
  role: string;
}

export default function CreateUser({ role }: CreateUserProps) {
  return (
    <Box className="box-panel-control" sx={{ padding: 2 }}>
      <Grid container spacing={2}>
        <Grid size={12} className="grid-p-patients-tittle">
          <Grid container spacing={0}>
            <Grid size={9} marginBottom={"4px"}>
              <Typography variant="h3">Crear Usuario</Typography>
            </Grid>
          </Grid>
          <Divider className="divider-paciente-historial"></Divider>
        </Grid>

        <Grid size={12}>
          <UserForm isEditMode={false} role={role} />
        </Grid>
      </Grid>
    </Box>
  );
}
