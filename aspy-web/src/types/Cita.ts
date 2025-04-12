import { User } from "./User";

export interface Cita {
  id: number;
  fecha: string;
  horainicio: string;
  horafin: string;
  doctor: User;
  asistio: boolean;
  comentario?: string;
}
