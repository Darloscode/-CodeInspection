import TextField from "@mui/material/TextField";
import { useFormContext } from "react-hook-form";
import InputError from "./InputError";
import { AnimatePresence } from "framer-motion";
import { findInputError } from "../../utils/findInputError";
import { isFormInvalid } from "../../utils/isFormInvalid";

function UserInput(props: { label: string; key: string; type: string; id: string; validation: object }) {
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
        className="w-full md:w-[350px]"
        {...register(props.id, props.validation)}
      />
    </div>
  );
}

export default UserInput;
