import { Rol } from "../types/Rol";
import { permisos } from "./Permisos";

export const roles: Rol[] = [
  {
    id: 12,
    nombre: "Administrador",
    permisos: permisos, // todos los permisos
  },
  {
    id: 23,
    nombre: "Terapeuta",
    permisos: [permisos[4]], // solo gestionar servicios
  },
  {
    id: 14,
    nombre: "Asistente",
    permisos: [permisos[3], permisos[4]], // reportes y servicios
  },
];
