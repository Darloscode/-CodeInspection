import Button from "@mui/material/Button";

function CreationButton({ onClick }: { onClick: () => void }) {
  return (
    <Button
      onClick={onClick}
      variant="contained"
      sx={{
        backgroundColor: "#F1F1F1",
        color: "#4F4F4F",
        "&:hover": { backgroundColor: "#D1D5DB", color: "#1F2937" },
        width: "140px",
      }}
    >
      Crear
    </Button>
  );
}
export default CreationButton;
