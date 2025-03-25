import Data from "../types/Data";

import Paper from "@mui/material/Paper";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

interface Tabla_datosProps {
  rows: Data[];
  columns: GridColDef[];
  onRowSelect: (row: Data) => void;
}

const paginationModel = { page: 0, pageSize: 5 };

function Tabladatos({ rows, columns, onRowSelect }: Tabla_datosProps) {
  return (
    <Paper sx={{ height: "100%", width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        disableColumnSorting={true}
        disableColumnFilter={true}
        disableColumnMenu={true}
        pageSizeOptions={[5, 10]}
        sx={{
          border: 0,
          "& .MuiDataGrid-row:nth-of-type(odd)": {
            backgroundColor: "#E3F2FD",
          },
          "& .MuiDataGrid-row:nth-of-type(even)": {
            backgroundColor: "#FFFFFF",
          },
          "& .Mui-selected": {
            backgroundColor: "#509CDB !important",
            color: "white !important",
          },
        }}
        onRowSelectionModelChange={(selection) => {
          const newSelectedId = selection[0];
          const selectedRow = rows.find((row) => row.id === newSelectedId);
          if (selectedRow) onRowSelect(selectedRow);
        }}
      />
    </Paper>
  );
}

export default Tabladatos;
