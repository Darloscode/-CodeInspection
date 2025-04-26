import { User } from "./User";

export interface Cita {
  id: number;
  fecha: string;
  horainicio: string;
  horafin: string;
  doctor: User;
  paciente: User;
  asistio: boolean;
  comentario?: string;
}