export const inputServiceConfig = [
  {
    label: "Nombre del servicio",
    key: "nombre",
    type: "text",
    validation: {
      required: {
        value: true,
        message: "Campo requerido",
      },
    },
  },
  {
    label: "Descripción",
    key: "descripcion",
    type: "text",
    validation: {
      required: {
        value: true,
        message: "Campo requerido",
      },
    },
  },
  {
    label: "Precio",
    key: "costo",
    type: "number",
    validation: {
      required: {
        value: true,
        message: "Campo requerido",
      },
      min: {
        value: 0,
        message: "El precio debe ser mayor o igual a 0",
      },
    },
  },
  {
    label: "Duración (minutos)",
    key: "duracion_minutos",
    type: "number",
    validation: {
      required: {
        value: true,
        message: "Campo requerido",
      },
      min: {
        value: 10,
        message: "El tiempo debe ser mínimo 10 min",
      },
    },
  },
  {
    label: "Activo",
    key: "activo",
    type: "select",
    validation: {
      required: {
        value: true,
        message: "Debe seleccionar una opción",
      },
    },
    options: ["Si", "No"],
  },
  {
    label: "Tipo",
    key: "tipo",
    type: "select",
    validation: {
      required: {
        value: true,
        message: "Debe seleccionar una opción",
      },
    },
    options: ["Consulta Médica", "Terapia Psicológica", "Terapia de Lenguaje"],
  },
];
