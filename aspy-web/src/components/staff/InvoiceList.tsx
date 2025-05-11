import { useState, useEffect } from "react";
import { useTheme } from "@mui/material";
import { GridRowSelectionModel } from "@mui/x-data-grid";
import { Invoice } from "@/types/Invoice";
import { GridColDef } from "@mui/x-data-grid";
import { handleDownloadInvoice } from "@utils/utils";
import { columnsInvoice } from "@utils/columns";
import { facturas } from "@data/Facturas";
import Button from "@mui/material/Button";
import InvoiceView from "@components/InvoiceView";
import Table from "@components/Table";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";

import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";

const columnaExtra: GridColDef[] = [
  {
    field: "total",
    headerName: "Total",
    disableColumnMenu: true,
    flex: 2,
    resizable: false,
    renderCell: (params) => {
      return <Typography variant="body1">$ {params.value}</Typography>;
    },
  },
  {
    field: "actions",
    headerName: "",
    flex: 2,
    disableColumnMenu: true,
    resizable: false,
    sortable: false,
    renderCell: (params) => (
      <Button
        onClick={() => handleDownloadInvoice(params.row)}
        variant="text"
        color="primary"
        className="boton-editar"
      >
        <DownloadRoundedIcon />
      </Button>
    ),
  },
];

export default function InvoiceList() {
  const [rowSelection, setRowSelection] = useState<GridRowSelectionModel>([]);

  const theme = useTheme().palette.mode;
  const themeClass = theme === "dark" ? "dark-theme" : "light-theme";

  //Usuario seleccionado
  const [invoice, setInvoice] = useState<Invoice | null>(null);

  const newColumns: GridColDef[] = [...columnsInvoice, ...columnaExtra];

  //Mostrar el usuario
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
              <Typography variant="h3">Comprobantes de Pago</Typography>
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

{
  /*
    <div style={{ display: "flex", width: "100%", alignItems: "center" }}>
      <div style={{ flex: 2 }}>
        <Paper sx={{ height: "90vh", width: "100%", marginTop: 2 }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{ pagination: { paginationModel } }}
            autoPageSize
            sx={{ border: 0 }}
            slots={{ toolbar: GridToolbar }}
            onRowSelectionModelChange={(newRowSelectionModel) => {
              setRowSelectionModel(newRowSelectionModel);
            }}
            rowSelectionModel={rowSelectionModel}
            disableColumnFilter
            disableColumnSelector
            disableDensitySelector
            disableExport
            slotProps={{
              toolbar: {
                showQuickFilter: true,
              },
            }}
          />
        </Paper>
      </div>
      <div style={{ flex: 1 }}>
        {rowSelectionModel
          .map((selectedId) => rows.find((item) => item.id === selectedId))
          .map(
            (invoice) =>
              invoice && <InvoiceView info={invoice} key={invoice.id} />
          )}
      </div>
    </div>
    */
}
