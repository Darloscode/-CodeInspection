import { roleFormConfig } from "@/config/roleFormConfig";
//import { ServiceData } from "@/types/ServiceDataCreation";
//import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import UserInput from "./UserInput";
import CancelButton from "../buttons/CancelButton";
import { roles } from "../../data/Roles";
import SaveButton from "../buttons/SaveButton";
import CreationButton from "../buttons/CreationButton";

function RoleForm(props: { isEditMode?: boolean; roleId?: number }) {
  //const [serviceData, setServiceData] = useState<ServiceData | null>(null);

  //Estas dos lineas son solo para pruebas
  const roleData = roles.find((u) => u.id === props.roleId);
  const nombresPermisos: string[] =
    roleData?.permisos?.map((permiso) => permiso.nombre) ?? [];

  // Esto te lleva a la página anterior
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  /*
  useEffect(() => {
    if (props.isEditMode && props.serviceId) {
      const fetchData = async () => {
        const response = await fetch(
          `/api-endpoint-not-yet/${props.serviceId}`
        );
        const data = await response.json();
        setServiceData(data);
      };
      fetchData();
    }
  }, [props.isEditMode, props.serviceId]);
  */

  const methods = useForm({
    defaultValues: async () => {
      if (props.isEditMode && roleData) {
        return {
          name: roleData.nombre,
        };
      } else {
        return {
          name: "",
        };
      }
    },
  });

  const list_inputs = roleFormConfig.map((input) => (
    <UserInput
      label={input.label}
      key={input.key}
      type={input.type}
      id={input.key}
      validation={input.validation}
      options={input.options}
      defaultList={nombresPermisos}
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
          <div className="flex flex-col gap-10">{list_inputs}</div>
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

export default RoleForm;
