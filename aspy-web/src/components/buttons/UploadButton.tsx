import { CloudUpload } from "@mui/icons-material";
import { UploadButtonProps } from "@/types/UploadButtonProps";
import { useRef } from "react";

function UploadButton({ onFileSelected }: UploadButtonProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return; 

    if (file.type !== "application/pdf") {
      alert("Solo se permiten archivos PDF.");
      return;
    }

    const fileData = {
      name: file.name,
      lastModified: new Date(file.lastModified).toLocaleString(),
      file: file,
    };

    onFileSelected?.(fileData); // Envía todo al padre
  };
  return (
    <div>
      <input
        ref={fileInputRef}
        id="fileInput"
        title="uploadFile"
        type="file"
        accept="application/pdf"
        onChange={handleFileChange}
        className="hidden"
      />
      <button
        onClick={handleButtonClick}
        type="button"
        className="bg-black text-white font-bold py-2 px-4 rounded justify-center align-middle"
      >
        <CloudUpload className="mr-2 w-5 h-5 text-white" />
        Subir documento
      </button>
    </div>
  );
}

export default UploadButton;
