import { GridColDef } from "@mui/x-data-grid";

export const columnsUsers: GridColDef[] = [
  {
    field: "identity",
    headerName: "Cédula",
    disableColumnMenu: true,
    width: 140,
    resizable: false,
  },
  {
    field: "firstName",
    headerName: "Nombres",
    disableColumnMenu: true,
    width: 160,
    resizable: false,
  },
  {
    field: "lastName",
    headerName: "Apellidos",
    disableColumnMenu: true,
    width: 160,
    resizable: false,
  },
  {
    field: "email",
    headerName: "Correo",
    disableColumnMenu: true,
    width: 180,
    resizable: false,
  },
];

export const columnsInvoice: GridColDef[] = [
  {
    field: "number",
    headerName: "ID Factura",
    disableColumnMenu: true,
    flex: 2,
    resizable: false,
  },
  {
    field: "clientName",
    headerName: "Cliente",
    disableColumnMenu: true,
    flex: 3,
    resizable: false,
  },
  {
    field: "issueDate",
    headerName: "Fecha de Emisión",
    disableColumnMenu: true,
    flex: 3,
    resizable: false,
  },
];

export const columnsServices: GridColDef[] = [
  {
    field: "id",
    headerName: "ID",
    flex: 1,
    disableColumnMenu: true,
    resizable: false,
  },
  {
    field: "nombre",
    headerName: "Nombre",
    flex: 2,
    disableColumnMenu: true,
    resizable: false,
  },
  {
    field: "descripcion",
    headerName: "Descripción",
    flex: 3,
    disableColumnMenu: true,
    resizable: false,
  },
  {
    field: "tipo_servicio",
    headerName: "Tipo",
    flex: 3,
    disableColumnMenu: true,
    resizable: false,
  },
];
