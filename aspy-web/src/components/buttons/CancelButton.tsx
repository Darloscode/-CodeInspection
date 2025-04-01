import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
function CancelButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center text-gray-700 hover:text-gray-700 border-none bg-transparent"
    >
      <CloseRoundedIcon className="mr-2 w-5 h-5 text-gray-700 hover:text-gray-700" />
      Cancelar
    </button>
  );
}

export default CancelButton;
