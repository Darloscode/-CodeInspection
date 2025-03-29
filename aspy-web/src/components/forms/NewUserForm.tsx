import { FormProvider, useForm } from "react-hook-form";
import UserInput from "./UserInput";
import CancelButton from "../buttons/CancelButton";
import CreationButton from "../buttons/CreationButton";
import { useEffect, useState } from "react";
import { UserData } from "../../types/UserDataCreation";

function NewUser(props: { isEditMode: boolean; userId?: string }) {
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    if (props.isEditMode && props.userId) {
      const fetchData = async () => {
        const response = await fetch(`/api-endpoint/${props.userId}`);
        const data = await response.json();
        setUserData(data);
      };
      fetchData();
    }
  }, [props.isEditMode, props.userId]);

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

  const methods = useForm({
    defaultValues: async () => {
      if (props.isEditMode && userData) {
        return {
          name: userData.name,
          surname: userData.surname,
          email: userData.email,
          phone: userData.phone,
          address: userData.address,
          identification_number: userData.identification_number,
          password: "",
          confirm_password: "",
        };
      } else {
        return {
          name: "",
          surname: "",
          email: "",
          phone: "",
          address: "",
          identification_number: "",
          password: "",
          confirm_password: "",
        };
      }
    },
  });
  const onClickCreate = methods.handleSubmit((data) => {
    alert(data);
    console.log(data);
  });

  const list_inputs = input_create_user.map((input) => (
    <UserInput
      label={input.label}
      key={input.key}
      type={input.type}
      id={input.key}
    />
  ));

  const onClickCancel = () => {
    alert("Cancel button clicked");
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={(e) => e.preventDefault()} noValidate>
        <div>
          <h1>New User</h1>
          <div className="grid grid-cols-2 gap-10">{list_inputs}</div>
        </div>
        <div className="gap-10 mt-4 flex flex-row justify-start">
          <CancelButton onClick={onClickCancel} />
          <CreationButton onClick={onClickCreate} />
        </div>
      </form>
    </FormProvider>
  );
}

export default NewUser;
