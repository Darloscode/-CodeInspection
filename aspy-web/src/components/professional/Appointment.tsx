import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import Agenda from "../Agenda";
import { useTheme } from "@mui/material";

export default function Appointment() {
  const theme = useTheme();
  const themeClass =
    theme.palette.mode === "dark" ? "dark-theme" : "light-theme";

  return (
    <Box className="box-panel-control">
      <Grid container spacing={1}>
        <Grid size={12} className="grid-p-patients-tittle">
          <Typography
            variant="h3"
            className="h1-panel"
            sx={{ marginBottom: "2%" }}
          >
            Citas
          </Typography>
          <Divider className="divider-pacientes"></Divider>
        </Grid>
        <Grid size={12} className={themeClass}>
          <Agenda />
        </Grid>
      </Grid>
    </Box>
  );
}
