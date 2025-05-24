import { useState, useEffect } from "react";
import { useTheme } from "@mui/material";
import { GridRowSelectionModel } from "@mui/x-data-grid";
import { Invoice } from "@/types/Invoice";
import { GridColDef } from "@mui/x-data-grid";
import { columnsInvoice } from "@utils/columns";
import { facturas } from "@data/Facturas";
import InvoiceView from "@components/InvoiceView";
import Table from "@components/Table";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";

import AccessTimeFilledRoundedIcon from "@mui/icons-material/AccessTimeFilledRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

export default function PaymentsList() {
  const [rowSelection, setRowSelection] = useState<GridRowSelectionModel>([]);

  const theme = useTheme().palette.mode;
  const themeClass = theme === "dark" ? "dark-theme" : "light-theme";

  //Factura seleccionada
  const [invoice, setInvoice] = useState<Invoice | null>(null);

  const columnasExtra: GridColDef[] = [
    {
      field: "total",
      headerName: "Total",
      disableColumnMenu: true,
      flex: 1,
      resizable: false,
      align: "left",
      headerAlign: "left",
      renderCell: (params) => {
        return <Typography variant="body1">$ {params.value}</Typography>;
      },
    },
    {
      field: "status",
      headerName: "Estado de pago",
      disableColumnMenu: true,
      flex: 2,
      resizable: false,
      sortable: false,
      align: "center",
      headerAlign: "center",
      renderCell: (params) =>
        params.value ? (
          <CheckCircleRoundedIcon color="success" />
        ) : (
          <AccessTimeFilledRoundedIcon color="warning" />
        ),
    },
  ];

  const newColumns: GridColDef[] = [...columnsInvoice, ...columnasExtra];

  //Mostrar la factura
  useEffect(() => {
    if (rowSelection.length > 0) {
      const selectedInvoice = facturas.find(
        (item) => item.id === rowSelection[0]
      );
      if (selectedInvoice) {
        setInvoice(selectedInvoice);
      }
    } else {
      setInvoice(null);
    }
  }, [rowSelection]);

  return (
    <Box className="box-panel-control" sx={{ padding: 2 }}>
      <Grid container spacing={1}>
        <Grid size={12} className="grid-p-patients-tittle">
          <Grid container spacing={0}>
            <Grid size={9} marginBottom={"4px"}>
              <Typography variant="h3">Pagos</Typography>
            </Grid>
          </Grid>
          <Divider className="divider-paciente-historial"></Divider>
        </Grid>
        <Grid size={8} className={themeClass + " grid-tabla"}>
          <Table<Invoice>
            columns={newColumns}
            rows={facturas}
            rowSelectionModel={rowSelection}
            onRowSelectionChange={(newSelection) =>
              setRowSelection(newSelection)
            }
          />
        </Grid>
        {invoice && (
          <Grid size={4} className={themeClass}>
            <InvoiceView info={invoice} />
          </Grid>
        )}
      </Grid>
    </Box>
  );
}
