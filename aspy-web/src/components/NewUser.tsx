import { FormProvider, useForm } from "react-hook-form";
import UserInput from "./UserInput";

function NewUser() {
  const input_create_user = [
    { label: "Nombre", key: "name", type: "text" },
    { label: "Apellido", key: "surname", type: "text" },
    { label: "Email", key: "email", type: "email" },
    { label: "Teléfono", key: "phone", type: "number" },
    { label: "Dirección", key: "address", type: "text" },
    {
      label: "Numero de Identificación",
      key: "identification_number",
      type: "number",
    },
    { label: "Contraseña", key: "password", type: "password" },
    {
      label: "Confirmar Contraseña",
      key: "confirm_password",
      type: "password",
    },
  ];

  const methods = useForm();
  const onSubmit = methods.handleSubmit((data) => {
    alert(data);
    console.log(data);
  });

  const list_inputs = input_create_user.map((input) => (
    <UserInput label={input.label} key={input.key} type={input.type} />
  ));

  return (
    <FormProvider {...methods}>
      <form onSubmit={(e) => e.preventDefault()} noValidate>
        <div>
          <h1>New User</h1>
          <div className="grid grid-cols-2 gap-10">{list_inputs}</div>
        </div>
        <button
          onClick={onSubmit}
        >
          Submit Form
        </button>
      </form>
    </FormProvider>
  );
}

export default NewUser;
