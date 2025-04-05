import { ReceiptRevisionData } from "@/types/ReceiptRevisionData";
import FileDownloadIcon from "@mui/icons-material/FileDownload"; // Ensure this is the correct library

function ReceiptRevision(props: { pagoData: ReceiptRevisionData }) {
  return (
    <div>
      <div>
        <h1 className="font-kumbh text-primaryAspy font-semibold text-base">
          Paciente
        </h1>
        <h2 className="font-kumbh text-secondaryAspy text-sm">
          {props.pagoData.paciente}
        </h2>
      </div>
      <div>
        <h1 className="font-kumbh text-primaryAspy font-semibold text-base">
          Representante
        </h1>
        <h2 className="font-kumbh text-secondaryAspy text-sm">
          {props.pagoData.representante}
        </h2>
      </div>
      <div>
        <h1 className="font-kumbh text-primaryAspy font-semibold text-base">
          Cédula del paciente
        </h1>
        <h2 className="font-kumbh text-secondaryAspy text-sm">
          {props.pagoData.cedula_paciente}
        </h2>
      </div>
      <div className="flex flex-row gap-2 mt-4 justify-center align-center">
        <a href={props.pagoData.url_comprobante_pago}>
          Soporte - Comprobante de pago
        </a>
        <a href="https://example.com/comprobante_pago.pdf">
          <span className="sr-only">Download</span>
          <FileDownloadIcon />
        </a>
      </div>
    </div>
  );
}

export default ReceiptRevision;
