import { inputServiceConfig } from "@/config/serviceFormConfig";
//import { ServiceData } from "@/types/ServiceDataCreation";
//import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import UserInput from "./UserInput";
import CancelButton from "../buttons/CancelButton";
import { servicios } from "../../data/Servicios";
import SaveButton from "../buttons/SaveButton";
import CreationButton from "../buttons/CreationButton";

function ServiceForm(props: { isEditMode?: boolean; serviceId?: number }) {
  //const [serviceData, setServiceData] = useState<ServiceData | null>(null);

  //Estas dos lineas son solo para pruebas
  const serviceData = servicios.find((u) => u.id === props.serviceId);

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
      if (props.isEditMode && serviceData) {
        return {
          name: serviceData.nombre,
          description: serviceData.descripcion,
          price: serviceData.costo,
          duracion: serviceData.duracion_minutos,
          activo: serviceData.activo ? "Si" : "No",
          tipo: serviceData.tipo_servicio,
        };
      } else {
        return {
          name: "",
          description: "",
          price: "",
          duracion: "",
          activo: "",
        };
      }
    },
  });

  const list_inputs = inputServiceConfig.map((input) => (
    <UserInput
      label={input.label}
      key={input.key}
      type={input.type}
      id={input.key}
      validation={input.validation}
      options={input.options}
      default={
        input.key === "activo"
          ? serviceData?.activo
            ? "Si"
            : ""
          : input.key === "tipo"
            ? serviceData?.tipo_servicio
            : ""
      }
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
        <div className="flex justify-center items-center">
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

export default ServiceForm;
