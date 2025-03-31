import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AnalyticsRoundedIcon from "@mui/icons-material/AnalyticsRounded";
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import HelpRoundedIcon from "@mui/icons-material/HelpRounded";
import { getUserRole } from "@utils/auth";
import { useNavigate } from "react-router-dom";

const adminListItems = [
  { text: "Vista General", route: "/", icon: <HomeRoundedIcon /> },
  { text: "Usuarios", route: "/usuarios", icon: <AnalyticsRoundedIcon /> },
  { text: "Roles", route: "/roles", icon: <PeopleRoundedIcon /> },
  { text: "Servicios ", route: "/servicios", icon: <AssignmentRoundedIcon /> },
];

const staffListItems = [
  { text: "Vista General", route: "/", icon: <HomeRoundedIcon /> },
  {
    text: "Profesionales",
    route: "/profesionales",
    icon: <AnalyticsRoundedIcon />,
  },
  { text: "Pacientes", route: "/pacientes", icon: <PeopleRoundedIcon /> },
  { text: "Citas", route: "/citas", icon: <AssignmentRoundedIcon /> },
  { text: "Facturas", route: "/facturas", icon: <AssignmentRoundedIcon /> },
  { text: "Pagos", route: "/pagos ", icon: <AssignmentRoundedIcon /> },
  { text: "Servicios ", route: "/servicios", icon: <AssignmentRoundedIcon /> },
];

const professionalListItems = [
  { text: "Vista General", route: "/", icon: <HomeRoundedIcon /> },
  { text: "Pacientes", route: "/pacientes", icon: <PeopleRoundedIcon /> },
  { text: "Citas", route: "/citas", icon: <AssignmentRoundedIcon /> },
];

const clientListItems = [
  { text: "Vista General", route: "/", icon: <HomeRoundedIcon /> },
  { text: "Citas", route: "/citas", icon: <AssignmentRoundedIcon /> },
  { text: "Facturas", route: "/facturas", icon: <AssignmentRoundedIcon /> },
];

const secondaryListItems = [
  {
    text: "Preferencias",
    route: "/preferencias",
    icon: <SettingsRoundedIcon />,
  },
  { text: "Sobre ASPY", route: "/sobre", icon: <InfoRoundedIcon /> },
  { text: "Ayuda y Soporte", route: "/ayuda", icon: <HelpRoundedIcon /> },
];

export default function MenuContent() {
  const navigate = useNavigate();
  const userRole = getUserRole();
  let mainListItems;

  if (userRole === "admin") {
    mainListItems = adminListItems;
  } else if (userRole === "staff") {
    mainListItems = staffListItems;
  } else if (userRole === "professional") {
    mainListItems = professionalListItems;
  } else if (userRole === "client") {
    mainListItems = clientListItems;
  } else {
    mainListItems = [];
  }

  return (
    <Stack sx={{ flexGrow: 1, p: 1, justifyContent: "space-between" }}>
      <List dense>
        {mainListItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={() => navigate(item.route)}
              selected={
                item.route === "/"
                  ? window.location.pathname === item.route
                  : window.location.pathname.startsWith(item.route)
              }
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List dense>
        {secondaryListItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={() => navigate(item.route)}
              selected={
                item.route === "/"
                  ? window.location.pathname === item.route
                  : window.location.pathname.startsWith(item.route)
              }
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
}
