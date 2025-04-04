import { inputServiceConfig } from "@/config/serviceFormConfig";
import { ServiceData } from "@/types/ServiceDataCreation";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import UserInput from "./UserInput";
import CancelButton from "../buttons/CancelButton";
import CreationButton from "../buttons/CreationButton";

function ServiceForm(props: { isEditMode?: boolean; serviceId?: string }) {
  const [serviceData, setServiceData] = useState<ServiceData | null>(null);
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

  const methods = useForm({
    defaultValues: async () => {
      if (props.isEditMode && serviceData) {
        return {
          name: serviceData.name,
          description: serviceData,
          price: serviceData.price,
        };
      } else {
        return {
          name: "",
          description: "",
          price: "",
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
    />
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
        <form  className="flex flex-col w-full h-full p-6" onSubmit={(e) => e.preventDefault()} noValidate>
          <div className="items-center justify-center">
            <h1>Servicio</h1>
            <div className="flex flex-col gap-10">{list_inputs}</div>
          </div>
          <div className="gap-10 mt-4 flex flex-row justify-start">
            <CancelButton onClick={onClickCancel} />
            <CreationButton onClick={onClickCreate} />
          </div>
        </form>
      </FormProvider>
    );
}

export default ServiceForm;
