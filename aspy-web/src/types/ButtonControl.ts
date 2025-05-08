import { ReactNode } from "react";

export interface ButtonControl {
  texto: string;
  icono: ReactNode;
  accion: () => void;
}
