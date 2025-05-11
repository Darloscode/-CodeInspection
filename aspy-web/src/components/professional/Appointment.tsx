import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import Agenda from "../Agenda";
import { useTheme } from "@mui/material";
import { citas } from "@/data/Citas";

export default function Appointment() {
  const theme = useTheme();
  const themeClass =
    theme.palette.mode === "dark" ? "dark-theme" : "light-theme";

  return (
    <Box className="box-panel-control" sx={{ padding: 2 }}>
      <Grid container spacing={1}>
        <Grid size={12} className="grid-p-patients-tittle">
          <Typography variant="h3" className="h3-patients">
            Citas
          </Typography>
          <Divider className="divider-pacientes"></Divider>
        </Grid>
        <Grid size={12} className={themeClass}>
          <Agenda citas={citas} />
        </Grid>
      </Grid>
    </Box>
  );
}
