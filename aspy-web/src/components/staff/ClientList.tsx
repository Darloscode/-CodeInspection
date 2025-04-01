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
import ProfileView from "@components/ProfileView";

const columns: GridColDef[] = [
  {
    field: "identity",
    headerName: "Cédula",
    disableColumnMenu: true,
    width: 140,
    resizable: false 
  },
  {
    field: "firstName",
    headerName: "Nombres",
    disableColumnMenu: true,
    width: 160,
    resizable: false 
  },
  {
    field: "lastName",
    headerName: "Apellidos",
    disableColumnMenu: true,
    width: 160,
    resizable: false 
  },
  { field: "email", headerName: "Correo", disableColumnMenu: true, width: 180, resizable: false },
  /* {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    disableColumnMenu: true,
    valueGetter: (value, row) => `${row.firstName || ""} ${row.lastName || ""}`,
  }, */
];

const rows = [
  {
    id: 1,
    lastName: "Gonzales",
    firstName: "Jhon",
    role: "Paciente",
    age: 35,
    identity: 123456789,
    gender: "Masculino",
    email: "jgonzales@gmail.com",
  },
  {
    id: 2,
    lastName: "Martinez",
    firstName: "Maria",
    role: "Paciente",
    age: 28,
    identity: 987654321,
    gender: "Femenino",
    email: "mmartinez@gmail.com",
  },
  {
    id: 3,
    lastName: "Perez",
    firstName: "Carlos",
    role: "Paciente",
    age: 42,
    identity: 456789123,
    gender: "Masculino",
    email: "cperez@gmail.com",
  },
  {
    id: 4,
    lastName: "Lopez",
    firstName: "Ana",
    role: "Paciente",
    age: 30,
    identity: 789123456,
    gender: "Femenino",
    email: "alopez@gmail.com",
  },
  {
    id: 5,
    lastName: "Ramirez",
    firstName: "Luis",
    role: "Paciente",
    age: 37,
    identity: 321654987,
    gender: "Masculino",
    email: "lramirez@gmail.com",
  },
  {
    id: 6,
    lastName: "Torres",
    firstName: "Sofia",
    role: "Paciente",
    age: 25,
    identity: 654987321,
    gender: "Femenino",
    email: "storres@gmail.com",
  },
  {
    id: 7,
    lastName: "Herrera",
    firstName: "Jorge",
    role: "Paciente",
    age: 40,
    identity: 987321654,
    gender: "Masculino",
    email: "jherrera@gmail.com",
  },
  {
    id: 8,
    lastName: "Diaz",
    firstName: "Laura",
    role: "Paciente",
    age: 29,
    identity: 123789456,
    gender: "Femenino",
    email: "ldiaz@gmail.com",
  },
  {
    id: 9,
    lastName: "Castro",
    firstName: "Miguel",
    role: "Paciente",
    age: 33,
    identity: 456123789,
    gender: "Masculino",
    email: "mcastro@gmail.com",
  },
  {
    id: 10,
    lastName: "Vega",
    firstName: "Isabel",
    role: "Paciente",
    age: 26,
    identity: 789456123,
    gender: "Femenino",
    email: "ivega@gmail.com",
  },
  {
    id: 11,
    lastName: "Morales",
    firstName: "Ricardo",
    role: "Paciente",
    age: 38,
    identity: 112233445,
    gender: "Masculino",
    email: "rmorales@gmail.com",
  },
  {
    id: 12,
    lastName: "Garcia",
    firstName: "Elena",
    role: "Paciente",
    age: 31,
    identity: 998877665,
    gender: "Femenino",
    email: "egarcia@gmail.com",
  },
  {
    id: 13,
    lastName: "Sanchez",
    firstName: "Fernando",
    role: "Paciente",
    age: 45,
    identity: 556677889,
    gender: "Masculino",
    email: "fsanchez@gmail.com",
  },
  {
    id: 14,
    lastName: "Rojas",
    firstName: "Claudia",
    role: "Paciente",
    age: 27,
    identity: 334455667,
    gender: "Femenino",
    email: "crojas@gmail.com",
  },
  {
    id: 15,
    lastName: "Mendoza",
    firstName: "Oscar",
    role: "Paciente",
    age: 36,
    identity: 778899001,
    gender: "Masculino",
    email: "omendoza@gmail.com",
  },
];

/* const paginationModel = { page: 0, pageSize: 5 }; */

export default function ClientsList() {
  const [rowSelectionModel, setRowSelectionModel] =
    React.useState<GridRowSelectionModel>([]);

  return (
    <div style={{ display: "flex", width: "100%", alignItems: "center" }}>
      <div style={{ flex: 2 }}>
        <Button variant="contained">Agregar Cliente</Button>

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
            (user) =>
              user && (
                <ProfileView
                  key={user.id}
                  user_info={user}
                  onEdit={() => {}}
                  isRowPosition={false}
                />
              )
          )}
      </div>
    </div>
  );
}
