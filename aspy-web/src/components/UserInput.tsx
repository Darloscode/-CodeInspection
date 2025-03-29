import TextField from "@mui/material/TextField";
import { useFormContext } from "react-hook-form";
import InputError from "./InputError";
import { AnimatePresence } from "framer-motion";
import { findInputError } from "../utils/findInputError";
import { isFormInvalid } from "../utils/isFormInvalid";

function UserInput(props: { label: string; key: string; type: string; id: string }) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const inputError = findInputError(errors, props.id);
  const isInvalid = isFormInvalid(inputError);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row gap-2">
        <h6 className="grow">{props.label}</h6>
        <AnimatePresence mode="wait" initial={false}>
          {isInvalid && (
            <InputError
              message={inputError.error.message}
              key={inputError.error.message}
            />
          )}
        </AnimatePresence>
      </div>
      <TextField
        required
        id={props.id}
        type={props.type}
        variant="outlined"
        size="small"
        {...register(props.id, {
          required: {
            value: true,
            message: "Campo requerido",
          },
        })}
      />
    </div>
  );
}

export default UserInput;
