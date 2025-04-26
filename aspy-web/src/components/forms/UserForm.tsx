import { FormProvider, useForm } from "react-hook-form";
import UserInput from "./UserInput";
import CancelButton from "../buttons/CancelButton";
//import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
//import { UserData } from "../../types/UserDataCreation";
import { inputCreateUserConfig } from "../../config//userFormConfig";
import { usuarios } from "../../data/Usuarios";
import SaveButton from "../buttons/SaveButton";
import CreationButton from "../buttons/CreationButton";

function UserForm(props: { isEditMode?: boolean; userId?: number }) {
  //const [userData, setUserData] = useState<UserData | null>(null);

  //Estas dos lineas son solo para pruebas
  const user = usuarios.find((u) => u.id === props.userId);

  // Esto te lleva a la página anterior
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  // TODO Fetch user data if in edit mode and userId is provided
  // TODO separate fetch function to avoid duplication
  /*
  useEffect(() => {
    if (props.isEditMode && props.userId) {
      const fetchData = async () => {
        const response = await fetch(`/api-endpoint-not-yet/${props.userId}`);
        const data = await response.json();
        setUserData(data);
      };
      fetchData();
    }
  }, [props.isEditMode, props.userId]);*/

  const methods = useForm({
    defaultValues: async () => {
      if (props.isEditMode && /*userData*/ user) {
        return {
          surname: user.lastName,
          name: user.firstName,
          email: user.email,
          phone: user.phone,
          address: user.address,
          identification_number: user.identity,
          provincia: user.provincia, // << AQUÍ
          password: "",
          confirm_password: "",
          /*
          name: userData.name,
          surname: userData.surname,
          email: userData.email,
          phone: userData.phone,
          address: userData.address,
          identification_number: userData.identification_number,
          password: "", // Do not pre-fill password fields for security reasons
          confirm_password: "",
          */
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
          provincia: "",
        };
      }
    },
  });

  const list_inputs = inputCreateUserConfig.map((input) => (
    <UserInput
      label={input.label}
      key={input.key}
      type={input.type}
      id={input.key}
      validation={
        input.key === "confirm_password"
          ? {
              ...input.validation,
              validate: (value: string) =>
                value === methods.getValues("password") ||
                "Las contraseñas no coinciden",
            }
          : input.validation
      }
      options={input.options}
      default={user?.provincia ?? ""}
    />
  ));

  // TODO in a diff file
  const onClickSave = methods.handleSubmit((data) => {
    alert(data);
    console.log(data);
  });

  const onClickCreate = methods.handleSubmit((data) => {
    alert(data);
    console.log(data);
  });

  return (
    <FormProvider {...methods}>
      <form
        className="flex flex-col w-full h-full p-6"
        onSubmit={(e) => e.preventDefault()}
        noValidate
      >
        <div className="items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {list_inputs}
          </div>
        </div>
        <div className="gap-10 mt-4 flex flex-row items-center justify-center">
          <CancelButton onClick={handleBack} />
          {!props.isEditMode && (
            <CreationButton onClick={onClickCreate} text="Crear" />
          )}
          {props.isEditMode && (
            <SaveButton onClick={onClickSave} text="Guardar" />
          )}
        </div>
      </form>
    </FormProvider>
  );
}

export default UserForm;
