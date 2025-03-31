import * as React from "react";
import { useState } from "react";
import {
  DataGrid,
  GridColDef,
  GridToolbar,
  GridRowSelectionModel,
} from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import "@styles/ProffesionalsListStyle.css";
import InvoiceView from "@components/InvoiceView";

const columns: GridColDef[] = [
  { field: "number", headerName: "ID Factura", disableColumnMenu: true, width: 150, resizable: false  },
  { field: "clientName", headerName: "Cliente", disableColumnMenu: true, width: 150, resizable: false  },
  { field: "issueDate", headerName: "Fecha de Emisión", disableColumnMenu: true, width: 150, resizable: false  },
  { field: "total", headerName: "Total", disableColumnMenu: true, width: 100, resizable: false  },
];



const rows = [
  {
    id: 1,
    number: "001",
    issueDate: "2023-10-01",
    clientName: "John Doe",
    address: "123 Main St, Cityville",
    serviceName: "Consultation",
    servicePrice: 100,
    subtotal: 100,
    tax: 0,
    total: 100,
    paymentMethod: "Credit Card",
    contactEmail: "johndoe@gmail.com",
    contactPhone: "555-1234",
  },
  {
    id: 2,
    number: "002",
    issueDate: "2023-10-02",
    clientName: "Jane Smith",
    address: "456 Elm St, Townsville",
    serviceName: "Therapy Session",
    servicePrice: 150,
    subtotal: 150,
    tax: 15,
    total: 165,
    paymentMethod: "PayPal",
    contactEmail: "janesmith@gmail.com",
    contactPhone: "555-5678",
  },
  {
    id: 3,
    number: "003",
    issueDate: "2023-10-03",
    clientName: "Alice Johnson",
    address: "789 Oak St, Villagetown",
    serviceName: "Follow-up",
    servicePrice: 120,
    subtotal: 120,
    tax: 12,
    total: 132,
    paymentMethod: "Bank Transfer",
    contactEmail: "alicejohnson@gmail.com",
    contactPhone: "555-8765",
  },
  {
    id: 4,
    number: "004",
    issueDate: "2023-10-04",
    clientName: "Bob Brown",
    address: "321 Pine St, Hamlet",
    serviceName: "Initial Assessment",
    servicePrice: 200,
    subtotal: 200,
    tax: 20,
    total: 220,
    paymentMethod: "Cash",
    contactEmail: "bobbrown@gmail.com",
    contactPhone: "555-4321",
  },
  {
    id: 5,
    number: "005",
    issueDate: "2023-10-05",
    clientName: "Charlie Green",
    address: "654 Maple St, Metropolis",
    serviceName: "Consultation",
    servicePrice: 100,
    subtotal: 100,
    tax: 10,
    total: 110,
    paymentMethod: "Credit Card",
    contactEmail: "charliegreen@gmail.com",
    contactPhone: "555-6789",
  },
  {
    id: 6,
    number: "006",
    issueDate: "2023-10-06",
    clientName: "Diana White",
    address: "987 Birch St, Capital City",
    serviceName: "Therapy Session",
    servicePrice: 150,
    subtotal: 150,
    tax: 15,
    total: 165,
    paymentMethod: "PayPal",
    contactEmail: "dianawhite@gmail.com",
    contactPhone: "555-9876",
  },
  {
    id: 7,
    number: "007",
    issueDate: "2023-10-07",
    clientName: "Eve Black",
    address: "159 Cedar St, Springfield",
    serviceName: "Follow-up",
    servicePrice: 120,
    subtotal: 120,
    tax: 12,
    total: 132,
    paymentMethod: "Bank Transfer",
    contactEmail: "eveblack@gmail.com",
    contactPhone: "555-6543",
  },
  {
    id: 8,
    number: "008",
    issueDate: "2023-10-08",
    clientName: "Frank Blue",
    address: "753 Willow St, Gotham",
    serviceName: "Initial Assessment",
    servicePrice: 200,
    subtotal: 200,
    tax: 20,
    total: 220,
    paymentMethod: "Cash",
    contactEmail: "frankblue@gmail.com",
    contactPhone: "555-3210",
  },
  {
    id: 9,
    number: "009",
    issueDate: "2023-10-09",
    clientName: "Grace Yellow",
    address: "852 Aspen St, Star City",
    serviceName: "Consultation",
    servicePrice: 100,
    subtotal: 100,
    tax: 10,
    total: 110,
    paymentMethod: "Credit Card",
    contactEmail: "graceyellow@gmail.com",
    contactPhone: "555-7890",
  },
  {
    id: 10,
    number: "010",
    issueDate: "2023-10-10",
    clientName: "Hank Purple",
    address: "951 Redwood St, Central City",
    serviceName: "Therapy Session",
    servicePrice: 150,
    subtotal: 150,
    tax: 15,
    total: 165,
    paymentMethod: "PayPal",
    contactEmail: "hankpurple@gmail.com",
    contactPhone: "555-0987",
  },
];

/* const paginationModel = { page: 0, pageSize: 5 }; */

export default function InvoiceList() {
  const [rowSelectionModel, setRowSelectionModel] =
    React.useState<GridRowSelectionModel>([]);

  return (
    <div style={{ display: "flex", width: "100%", alignItems: "center" }}>
      <div style={{ flex: 2 }}>

        <Paper sx={{ height: "90vh", width: "100%", marginTop: 2 }}>
          <DataGrid
            rows={rows}
            columns={columns}
            /* initialState={{ pagination: { paginationModel } }} */
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
              invoice && (
                <InvoiceView info={invoice} key={invoice.id} />
              )
          )}
      </div>
    </div>
  );
}
