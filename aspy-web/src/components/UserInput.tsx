import TextField from "@mui/material/TextField";
import { useFormContext } from "react-hook-form";

function UserInput(props: { label: string, key: string, type: string }) {
  const { register } = useFormContext();

  return (
    <div className="flex flex-col gap-2">
      <h6>{props.label}</h6>
      <TextField required id={props.label} type={props.type} variant="outlined" size="small" {...register(props.label, {
          required: {
            value: true,
            message: 'required',
          },
        })} />
    </div>
  );
}

export default UserInput;
