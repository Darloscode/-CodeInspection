import { permisos } from "@data/Permisos";
const nombresPermisos: string[] = permisos.map((permiso) => permiso.nombre);
export const roleFormConfig = [
  {
    label: "Nombre del rol",
    key: "name",
    type: "text",
    validation: {
      required: {
        value: true,
        message: "Campo requerido",
      },
    },
  },
  {
    label: "Permisos",
    key: "permisos",
    type: "multiselect",
    validation: {
      required: {
        value: true,
        message: "Debe seleccionar una opción",
      },
    },
    options: nombresPermisos,
  },
];
