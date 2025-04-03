export const inputCreateUserConfig = [
  {
    label: "Nombre",
    key: "name",
    type: "text",
    validation: {
      required: {
        value: true,
        message: "Campo requerido",
      }
    },
  },
  {
    label: "Apellido",
    key: "surname",
    type: "text",
    validation: {
      required: {
        value: true,
        message: "Campo requerido",
      }
    },
  },
  {
    label: "Email",
    key: "email",
    type: "email",
    validation: {
      required: {
        value: true,
        message: "Campo requerido",
      },
      pattern: {
        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        message: "Email no válido",
      },
    },
  },
  {
    label: "Teléfono",
    key: "phone",
    type: "number",
    validation: {
      required: {
        value: true,
        message: "Campo requerido",
      },
      pattern: {
        value: /^[0-9]{10}$/,  // Expresión regular para exactamente 10 dígitos
        message: "Teléfono debe tener 10 dígitos",
      },
    },
  },
  {
    label: "Dirección",
    key: "address",
    type: "text",
    validation: {
      required: {
        value: true,
        message: "Campo requerido",
      }
    },
  },
  {
    label: "Numero de Identificación",
    key: "identification_number",
    type: "number",
    validation: {
      required: {
        value: true,
        message: "Campo requerido",
      },
      pattern: {
        value: /^[0-9]{10}$/,  // Expresión regular para exactamente 10 dígitos
        message: "Cédula debe tener 10 dígitos",
      },
    },
  },
  {
    label: "Contraseña",
    key: "password",
    type: "password",
    validation: {
      required: {
        value: true,
        message: "Campo requerido",
      },
      minLength: {
        value: 6,
        message: "min 6 caracteres",
      },
    },
  },
  {
    label: "Confirmar Contraseña",
    key: "confirm_password",
    type: "password",
    validation: {
      required: {
        value: true,
        message: "Campo requerido",
      },
      minLength: {
        value: 6,
        message: "min 6 caracteres",
      },
    },
  },
];
