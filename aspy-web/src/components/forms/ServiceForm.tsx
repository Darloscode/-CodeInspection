import { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { servicios } from "@data/Servicios";
import { inputServiceConfig } from "@/config/serviceFormConfig";
import { Servicio } from "@/types/Service";
import UserInput from "@forms/UserInput";
import CancelButton from "@buttons/CancelButton";
import SaveButton from "@buttons/SaveButton";
import CreationButton from "@buttons/CreationButton";

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
        name: serviceData.name,
        description: serviceData.description,
        price: serviceData.price,
        durationMinutes: serviceData.durationMinutes,
        active: serviceData.active,
        serviceType: serviceData.serviceType,
      });
    } else {
      methods.reset({
        name: "",
        description: "",
        price: 0,
        durationMinutes: 0,
        active: false,
        serviceType: "",
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
