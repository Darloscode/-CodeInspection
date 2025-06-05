import { useState } from "react";
import { ReceiptRevisionData } from "@/types/ReceiptRevisionData";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import Button from "@mui/material/Button";
import UploadButton from "@components/buttons/UploadButton";
import FileItem from "@components/FileItem";

import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

function ReceiptRevision(props: { pagoData: ReceiptRevisionData }) {
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
  return (
    <Box mt={2} width={"100%"}>
      <Grid container spacing={1}>
        <Grid size={12}>
          <Typography variant="subtitle1" color="black" fontWeight={600}>
            Paciente
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.pagoData.paciente}
          </Typography>
        </Grid>

        <Grid size={12}>
          <Typography variant="subtitle1" color="black" fontWeight={600}>
            Representante
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.pagoData.representante}
          </Typography>
        </Grid>

        <Grid size={12}>
          <Typography variant="subtitle1" color="black" fontWeight={600}>
            Cédula del paciente
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.pagoData.cedula_paciente}
          </Typography>
        </Grid>

        <Grid container size={12} spacing={1} mt={4} mb={4} width={"100%"}>
          <Grid
            size={9}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            Comprobante de pago
          </Grid>
          <Grid size={3} container>
            <Grid
              size={6}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Button
                onClick={() => {
                  console.log("descargar");
                }}
                variant="text"
                className="boton-editar"
              >
                <FileDownloadIcon className="icono" />
              </Button>
            </Grid>
            <Grid
              size={6}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Button
                onClick={() => {
                  console.log("borrar");
                }}
                variant="text"
                className="boton-editar"
              >
                <DeleteForeverRoundedIcon className="icono" />
              </Button>
            </Grid>
          </Grid>
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
        </Grid>
      </Grid>
    </Box>
  );
}
export default ReceiptRevision;
