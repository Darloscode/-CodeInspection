import { useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ReactNode } from "react";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Overview from "@admin/Overview";
/*, getAuthenticatedUserEmail*/
import { getAuthenticatedUserName } from "@store";

import PostAddOutlinedIcon from "@mui/icons-material/PostAddOutlined";
import QueueOutlinedIcon from "@mui/icons-material/QueueOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

type Boton = {
  texto: string;
  icono: ReactNode;
  accion: () => void;
};

export default function ControlPanel() {
  const theme = useTheme();
  const themeClass =
    theme.palette.mode === "dark" ? "dark-theme" : "light-theme";

  const navigate = useNavigate();

  const handleCreateUser = () => {
    const newPath = `/nuevo-usuario`;
    navigate(newPath);
  };

  const handleCreateRole = () => {
    const newPath = `/nuevo-rol`;
    navigate(newPath);
  };

  const handleCreateService = () => {
    const newPath = `/nuevo-servicio`;
    navigate(newPath);
  };

  const botones: Boton[] = [
    {
      texto: "Agregar Usuario",
      icono: <AccountCircleOutlinedIcon className="boton-panelcontrol" />,
      accion: handleCreateUser,
    },
    {
      texto: "Agregar Rol",
      icono: <QueueOutlinedIcon className="boton-panelcontrol" />,
      accion: handleCreateRole,
    },
    {
      texto: "Agregar Servicio",
      icono: <PostAddOutlinedIcon className="boton-panelcontrol" />,
      accion: handleCreateService,
    },
  ];

  return (
    <Box className="box-panel-control" sx={{ padding: 2 }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
        <Grid size={12} sx={{ padding: 0 }}>
          <Typography variant="h3" className="h1-panel">
            Bienvenid@ al Panel de Control, ASPY
          </Typography>
          <Typography variant="h3" className="h2-panel">
            Administrador {getAuthenticatedUserName()}
          </Typography>
        </Grid>

        <Grid size={9}>
          <Overview />
        </Grid>

        <Grid size={3} className="gird-botones-citas">
          <List className={themeClass}>
            {botones.map((boton, index) => (
              <ListItem key={index} disablePadding className="li-botones-citas">
                <ListItemButton
                  onClick={boton.accion}
                  className="ul-botones-citas"
                >
                  <ListItemIcon className="li-icono-citas">
                    {boton.icono}
                  </ListItemIcon>
                  <ListItemText
                    className="li-item-texto"
                    primary={boton.texto}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </Box>
  );
}
