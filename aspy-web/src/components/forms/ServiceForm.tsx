import { inputServiceConfig } from "@/config/serviceFormConfig";
//import { ServiceData } from "@/types/ServiceDataCreation";
//import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import UserInput from "./UserInput";
import CancelButton from "../buttons/CancelButton";
import { servicios } from "@data/Servicios";
import { Servicio } from "@/types/Servicio";
import SaveButton from "../buttons/SaveButton";
import CreationButton from "../buttons/CreationButton";
import { useEffect } from "react";

interface ServiceFormProps {
  isEditMode: boolean;
  serviceId?: number;
}

export default function ServiceForm({
  isEditMode,
  serviceId,
}: ServiceFormProps) {
  //const [serviceData, setServiceData] = useState<ServiceData | null>(null);

  //Estas dos lineas son solo para pruebas
  const serviceData = servicios.find((u) => u.id === serviceId);

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

  const methods = useForm<Servicio>();

  useEffect(() => {
    if (isEditMode && serviceData) {
      methods.reset({
        nombre: serviceData.nombre,
        descripcion: serviceData.descripcion,
        costo: serviceData.costo,
        duracion_minutos: serviceData.duracion_minutos,
        activo: serviceData.activo,
        tipo_servicio: serviceData.tipo_servicio,
      });
    } else {
      methods.reset({
        nombre: "",
        descripcion: "",
        costo: 0,
        duracion_minutos: 0,
        activo: false,
        tipo_servicio: "",
      });
    }
  }, [isEditMode, serviceData, methods]);

  const list_inputs = inputServiceConfig.map((input) => (
    <UserInput
      label={input.label}
      key={input.key}
      type={input.type}
      id={input.key}
      validation={input.validation}
      options={input.options}
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
          {!isEditMode && (
            <CreationButton onClick={onClickCreate} text="Crear" />
          )}
          {isEditMode && <SaveButton onClick={onClickSave} text="Guardar" />}
        </div>
      </form>
    </FormProvider>
  );
}
