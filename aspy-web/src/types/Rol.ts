import { Permiso } from "./Permiso";

export interface Rol {
  id: number;
  nombre: string;
  permisos: Array<Permiso>;
}