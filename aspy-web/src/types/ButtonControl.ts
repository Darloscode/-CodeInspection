import { ReactNode } from "react";

export interface ButtonControl {
  id: string;
  text: string;
  icon: ReactNode;
  accion: () => void;
}
