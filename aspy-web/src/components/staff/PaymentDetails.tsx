import { useParams } from "react-router-dom";
import { getFactura } from "@utils/utils";
import { getRecibo } from "@utils/utils";
import { Invoice } from "@/types/Invoice";
import { ReceiptRevisionData } from "@/types/ReceiptRevisionData";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import InvoiceView from "@components/InvoiceView";
import ReceiptDetails from "@staff/ReceiptDetails";

export default function PaymentDetails() {
  //Obtener Factura
  const { id } = useParams();
  const numericId = id ? parseInt(id) : undefined;
  const invoice: Invoice = getFactura(numericId!);
  const receipt: ReceiptRevisionData = getRecibo(numericId!);

  return (
    <Box className="box-panel-control" sx={{ padding: 2 }}>
      <Grid container spacing={1}>
        <Grid size={12} className="grid-p-patients-tittle">
          <Grid container spacing={0} className="contenedor">
            <Grid size={8}>
              <Typography variant="h3">
                Detalles de Comprobante de Pago
              </Typography>
            </Grid>
          </Grid>
          <Divider className="divider-paciente-historial"></Divider>
        </Grid>
        <Grid size={6}>
          <ReceiptDetails pagoData={receipt} />
        </Grid>
        <Grid size={6}>
          <InvoiceView info={invoice} />
        </Grid>
      </Grid>
    </Box>
  );
}
