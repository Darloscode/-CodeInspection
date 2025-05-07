import { useTheme } from "@mui/material";
import { ReactNode } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

type Button = {
  texto: string;
  icono: ReactNode;
  accion: () => void;
};

interface ButtonListProps {
  botones: Button[];
}

export default function ButtonList({ botones }: ButtonListProps) {
  const theme = useTheme();
  const themeClass =
    theme.palette.mode === "dark" ? "dark-theme" : "light-theme";
  return (
    <List className={themeClass}>
      {botones.map((boton, index) => (
        <ListItem key={index} disablePadding className="li-botones-citas">
          <ListItemButton onClick={boton.accion} className="ul-botones-citas">
            <ListItemIcon className="li-icono-citas">
              {boton.icono}
            </ListItemIcon>
            <ListItemText className="li-item-texto" primary={boton.texto} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}
