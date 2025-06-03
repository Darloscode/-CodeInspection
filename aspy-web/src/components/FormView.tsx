import { useState } from "react";
import UserForm from "@forms/UserForm";
import { User } from "@/types/User";
import { inputCreateUserConfig } from "../config/userFormConfig";
import { Box } from "@mui/material";
import Steps from "@components/Steps";
import Grid from "@mui/material/Grid2";

interface FormViewProps {
  isEdit: boolean;
  userId?: number;
  role: string;
}

const stepsName = ["Datos personales", "Hogar", "Seguridad"];

export default function FormView({ isEdit, userId, role }: FormViewProps) {
  const [step, setStep] = useState(0);
  const totalSteps = 3; // O calculado según el tamaño de `inputCreateUserConfig`
  const fieldsPerStep = Math.ceil(inputCreateUserConfig.length / totalSteps);

  const [userData, setUserData] = useState<Partial<User>>({});

  const handleNext = (data: Partial<User>) => {
    setUserData((prev) => ({ ...prev, ...data }));
    if (step < totalSteps - 1) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 0) setStep(step - 1);
  };

  const handleFinalSubmit = (data: Partial<User>) => {
    const fullData = { ...userData, ...data };
    console.log("Usuario final:", fullData);
    // Aquí puedes guardar el usuario o enviarlo al backend
  };

  return (
    <Box>
      <Grid container rowSpacing={1}>
        <Grid size={12} className="contenedor-principal">
          <Steps activeStep={step} steps={stepsName} />
        </Grid>
        <Grid size={12}>
          <UserForm
            isEditMode={isEdit}
            userId={userId}
            role={role}
            start={step * fieldsPerStep}
            end={(step + 1) * fieldsPerStep}
            onNext={handleNext}
            onBack={handleBack}
            onFinish={handleFinalSubmit}
            isLast={step === totalSteps - 1}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
