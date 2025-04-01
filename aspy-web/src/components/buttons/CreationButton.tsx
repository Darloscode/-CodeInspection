function CreationButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="bg-gray-100 text-gray-700 hover:bg-gray-300 hover:text-gray-900 w-[140px] py-2 rounded"
    >
      Crear
    </button>
  );
}
export default CreationButton;
