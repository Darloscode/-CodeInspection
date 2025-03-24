import TextField from "@mui/material/TextField";
function UserInput(props: { label: string; key: string, type?: string }) {
  return (
    <div className="flex flex-col gap-2">
      <h6>{props.label}</h6>
      <TextField required id={props.key} type={props.type} variant="outlined" size="small" />
    </div>
  );
}

export default UserInput;
