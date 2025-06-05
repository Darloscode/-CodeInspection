import { Edit, UploadFile } from "@mui/icons-material";
import CancelButton from "./buttons/CancelButton";
import CreationButton from "./buttons/CreationButton";
import { useState } from "react";
import { FileData } from "@/types/FileData";
import UploadButton from "./buttons/UploadButton";

function AddSign() {
  const [signature, setSignature] = useState<FileData | null>(null);
  const [comment, setComment] = useState<string>("");

  return (
    <div className="bg-white p-6 rounded-xl shadow-md w-full min-h-screen space-y-6 flex flex-col relative">
      <div>
        <div className="flex items-center mb-2">
          <Edit className="mr-2 text-gray-600" />
          <h2 className="text-lg font-semibold">Firma del profesionalxd</h2>
        </div>
        <UploadButton
          accept="image/*"
          label="Subir firma"
          icon={<UploadFile className="mr-2 text-blue-600" />}
          buttonClassName="bg-white text-black font-bold border border-blue-600 hover:bg-blue-50"
          onFileSelected={(fileData) => setSignature(fileData)}
        />
        {signature && (
          <p className="text-sm text-gray-500 mt-1">
            Firma cargada: <strong>{signature.name}</strong>
          </p>
        )}
      </div>

      <div className="flex flex-col">
        <div className="flex items-center mb-2">
          <Edit className="mr-2 text-gray-600" />
          <h2 className="text-lg font-semibold">Comentario</h2>
        </div>
        <textarea
          placeholder="Redactar observaciones del caso..."
          className=" w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          rows={4}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
      </div>

      <div className="flex justify-end gap-3 mt-auto">
        <CancelButton
          onClick={() => {
            setSignature(null);
            setComment("");
          }}
        />
        <CreationButton
          text="Guardar"
          onClick={() => {
            console.log("Comentario:", comment);
            console.log("Firma:", signature);
          }}
        />
      </div>

      <div className="flex justify-end gap-3 absolute right-0 bottom-0 p-6">
        <CreationButton
          text="Enviar reporte"
          onClick={() => {
            console.log("Comentario:", comment);
            console.log("Firma:", signature);
          }}
        />
      </div>
    </div>
  );
}

export default AddSign;
