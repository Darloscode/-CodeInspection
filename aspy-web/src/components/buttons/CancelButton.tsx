import Button from "@mui/material/Button";
import CancelIcon from "@mui/icons-material/Cancel";

function CancelButton({ onClick }: { onClick: () => void }) {
  return (
    <Button
      onClick={onClick}
      sx={{
        color: "#4F4F4F",
        "&:hover": { color: "#4F4F4F" },
      }}
      startIcon={<CancelIcon />}
    >
      Cancelar
    </Button>
  );
}

export default CancelButton;
