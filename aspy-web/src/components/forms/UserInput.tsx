import TextField from "@mui/material/TextField";
import { useFormContext } from "react-hook-form";
import InputError from "./InputError";
import { AnimatePresence } from "framer-motion";
import { findInputError } from "../../utils/findInputError";
import { isFormInvalid } from "../../utils/isFormInvalid";
import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
function UserInput(props: {
  label: string;
  key: string;
  type: string;
  id: string;
  validation: object;
  options?: string[]; // <-- para el select
  default?: string;
  defaultList?: string[];
}) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const inputError = findInputError(errors, props.id);
  const isInvalid = isFormInvalid(inputError);

  const [personName, setPersonName] = useState<string[]>(
    props.defaultList || []
  );

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
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
      {/*
      <TextField
        select={props.type === "select"}
        required
        id={props.id}
        type={props.type !== "select" ? props.type : undefined}
        variant="outlined"
        size="small"
        className="w-full md:w-[350px]"
        sx={{
          "& input::-webkit-outer-spin-button": {
            WebkitAppearance: "none",
            margin: 0,
          },
          "& input::-webkit-inner-spin-button": {
            WebkitAppearance: "none",
            margin: 0,
          },
          // Ocultar flechas en Firefox
          "& input[type=number]": {
            MozAppearance: "textfield",
          },
        }}
        {...register(props.id, props.validation)}
      />
    </div>
    */}
      {props.type === "select" ? (
        <TextField
          select
          required
          id={props.id}
          variant="outlined"
          size="small"
          className="w-full md:w-[350px]"
          defaultValue={props.default}
          {...register(props.id, props.validation)}
        >
          <MenuItem value="">Seleccione una opción</MenuItem>
          {props.options?.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      ) : props.type === "multiselect" ? (
        <Select
          labelId="demo-multiple-checkbox-label"
          {...register(props.id, props.validation)}
          id="demo-multiple-checkbox"
          multiple
          className="w-full md:w-[350px]"
          value={personName}
          onChange={handleChange}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {props.options?.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={personName.includes(name)} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      ) : (
        <TextField
          required
          id={props.id}
          type={props.type}
          variant="outlined"
          size="small"
          className="w-full md:w-[350px]"
          sx={{
            "& input::-webkit-outer-spin-button": {
              WebkitAppearance: "none",
              margin: 0,
            },
            "& input::-webkit-inner-spin-button": {
              WebkitAppearance: "none",
              margin: 0,
            },
            "& input[type=number]": {
              MozAppearance: "textfield",
            },
          }}
          {...register(props.id, props.validation)}
        />
      )}
    </div>
  );
}

export default UserInput;
