import Paper from "@mui/material/Paper";
import {
  DataGrid,
  GridColDef,
  GridRowSelectionModel,
  GridToolbar,
} from "@mui/x-data-grid";

export type TableProps<T> = {
  columns: GridColDef[];
  rows: T[];
  rowSelectionModel: GridRowSelectionModel;
  onRowSelectionChange: (newSelection: GridRowSelectionModel) => void;
};

export default function Table<T>({
  columns,
  rows,
  rowSelectionModel,
  onRowSelectionChange,
}: TableProps<T>) {
  return (
    <Paper sx={{ height: "70vh", width: "98%" }}>
      <DataGrid
        className="data-grid-custom"
        rows={rows}
        columns={columns}
        getRowId={(row) => row.id}
        autoPageSize
        slots={{ toolbar: GridToolbar }}
        onRowSelectionModelChange={(newRowSelectionModel) => {
          onRowSelectionChange(newRowSelectionModel);
        }}
        rowSelectionModel={rowSelectionModel}
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
        slotProps={{ toolbar: { showQuickFilter: true } }}
      />
    </Paper>
  );
}
