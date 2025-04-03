import { FormProvider, useForm } from "react-hook-form";
import UserInput from "./UserInput";
import CancelButton from "../buttons/CancelButton";
import CreationButton from "../buttons/CreationButton";
import { useEffect, useState } from "react";
import { UserData } from "../../types/UserDataCreation";
import { inputCreateUserConfig } from '../../config//userFormConfig';


function UserForm(props: { isEditMode?: boolean; userId?: string }) {
  const [userData, setUserData] = useState<UserData | null>(null);

  // TODO Fetch user data if in edit mode and userId is provided
  // TODO separate fetch function to avoid duplication
  useEffect(() => {
    if (props.isEditMode && props.userId) {
      const fetchData = async () => {
        const response = await fetch(`/api-endpoint-not-yet/${props.userId}`);
        const data = await response.json();
        setUserData(data);
      };
      fetchData();
    }
  }, [props.isEditMode, props.userId]);


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
          password: "", // Do not pre-fill password fields for security reasons
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

  const list_inputs = inputCreateUserConfig.map((input) => (
    <UserInput
      label={input.label}
      key={input.key}
      type={input.type}
      id={input.key}
      validation={input.key === "confirm_password" ? {
        ...input.validation,
        validate: (value: string) => value === methods.getValues("password") || "Las contraseñas no coinciden",
      } : input.validation}    />
  ));

  // TODO in a diff file
  const onClickCreate = methods.handleSubmit((data) => {
    alert(data);
    console.log(data);
  });

  // TODO in a diff file
  const onClickCancel = () => {
    alert("Cancel button clicked");
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={(e) => e.preventDefault()} noValidate>
        <div>
          <h1>Nuevo Usuario</h1>
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

export default UserForm;
