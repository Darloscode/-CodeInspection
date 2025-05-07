import { useState } from "react";
import { ReceiptRevisionData } from "@/types/ReceiptRevisionData";
import CancelButton from "@/components/buttons/CancelButton";
import CreationButton from "@/components/buttons/CreationButton";
import UploadButton from "@/components/buttons/UploadButton";
import FileItem from "@/components/FileItem";
import ReceiptRevision from "@/components/staff/ReceiptRevision";

export default function ReceiptRevisionPage({
  pagoData,
}: {
  pagoData: ReceiptRevisionData;
}) {
  const onClick = () => {
    alert("Creation button clicked!");
  };

  const [archivoSeleccionado, setArchivoSeleccionado] = useState<{
    file: File;
    name: string;
    lastModified: string;
  } | null>(null);

  const handleFileSelected = (fileData: {
    file: File;
    name: string;
    lastModified: string;
  }) => {
    setArchivoSeleccionado(fileData);
  };

  //TODO SAVE THE FILE
  return (
    <div className="mx-auto max-w-2xl p-4">
      <div className="m-4">
        <h1 className="font-kumbh text-primaryAspy font-semibold text-base">
          Pendiente de revisión
        </h1>
        <ReceiptRevision pagoData={pagoData} />
      </div>
      <div className="m-4">
        <h1 className="font-kumbh text-primaryAspy font-semibold text-base">
          Subir factura
        </h1>
        <h2 className="font-kumbh text-secondaryAspy text-sm">
          Solo se acepta PDF, documento de respaldo de pago efectivo
        </h2>
        <UploadButton
          onFileSelected={handleFileSelected}
          accept="application/pdf"
          label="Subir documento"
        />
        {archivoSeleccionado && (
          <FileItem
            name={archivoSeleccionado.name}
            file={archivoSeleccionado.file}
            lastModified={archivoSeleccionado.lastModified}
          />
        )}
      </div>
      <div className="flex flex-row gap-4">
        <CancelButton onClick={() => alert("Cancel button clicked!")} />
        <CreationButton onClick={onClick} text="Aprobar comprobante" />
      </div>
    </div>
  );
}
