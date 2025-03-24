import UserInput from "./UserInput";

function NewUser() {
  const input_create_user = [
    { label: "Nombre", key: "name", type: "text" },
    { label: "Apellido", key: "surname", type: "text" },
    { label: "Email", key: "email", type: "email" },
    { label: "Teléfono", key: "phone", type: "number" },
    { label: "Dirección", key: "address", type: "text" },
    { label: "Numero de Identificación", key: "identification_number", type: "number" },
    { label: "Contraseña", key: "password", type: "password" },
    { label: "Confirmar Contraseña", key: "confirm_password", type: "password" },

  ];

  const list_inputs = input_create_user.map((input) => (
    <UserInput label={input.label} key={input.key} type={input.type}/>
  ));
  
  return (
    <div>
      <h1>New User</h1>
      <div className="grid grid-cols-2 gap-10">{list_inputs}</div>
    </div>
  );
}

export default NewUser;
