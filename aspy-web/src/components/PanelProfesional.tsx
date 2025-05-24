import { useState, useEffect, useCallback } from "react";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import { GridColDef } from "@mui/x-data-grid";

import OverviewPersona from "./professional/OverviewPersona";
import TablaDatos from "./TablaDatos";
import Data from "@types/Data";

import SearchIcon from "@mui/icons-material/Search";

interface Datos {
  rows: Data[];
  columns: GridColDef[];
}

function Panelprofesional({ rows, columns }: Datos) {
  const defaultUser: Data = {
    id: "",
    nombre: "",
    apellido: "",
    foto: "",
    edad: "",
    titulo: "",
    citas: [],
    descripcion: "",
    genero: "",
    tipo: "",
    correo: "",
    cedula: "",
  };

  const [filtro, setFiltro] = useState("");
  const [inputSearch, setInputSearch] = useState(""); // Estado para el valor de búsqueda
  const [filteredData, setFilteredData] = useState<Data[]>(rows); // Estado para los datos filtrados
  const [selectedData, setSelectedData] = useState<Data>(defaultUser);

  const handleRowSelect = (item: Data) => {
    setSelectedData(item); // Cuando se hace clic en una fila, se actualiza el estado con los datos de esa fila
  };

  const handleChange = (event: SelectChangeEvent) => {
    setFiltro(event.target.value);
  };

  // Buscar datos basado en el filtro seleccionado
  const buscarDatos = useCallback(() => {
    if (!inputSearch.trim() || filtro.toString() === "") {
      setFilteredData(rows); // Si no hay texto, se muestra toda la lista
      return;
    }

    const result = rows.filter((item) => {
      if (
        filtro.toString() === "1" &&
        item.nombre?.localeCompare(inputSearch) === 0
      ) {
        return item;
      } else if (
        filtro.toString() === "2" &&
        item.cedula?.localeCompare(inputSearch) === 0
      ) {
        return item;
      } else if (
        filtro.toString() === "3" &&
        item.correo?.localeCompare(inputSearch) === 0
      ) {
        return item;
      }
      return false;
    });

    setFilteredData(result); // Actualiza la lista con los datos filtrados
  }, [inputSearch, filtro, rows]);

  // Efecto para manejar la actualización de filteredData en función del input o filtro
  useEffect(() => {
    if (!inputSearch.trim() || filtro.toString() === "") {
      setFilteredData(rows); // Si no hay texto en el input ni filtro, se muestra toda la lista
    } else {
      buscarDatos(); // Si hay texto o filtro, realizar búsqueda
    }
  }, [inputSearch, filtro, rows, buscarDatos]);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      buscarDatos(); // Si se presiona Enter, realizar búsqueda
    }
  };

  const placeholders: Record<string, string> = {
    "": "Buscar por",
    "1": "Buscar por Nombre",
    "2": "Buscar por Cédula",
    "3": "Buscar por Correo",
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
        <Grid size={12} sx={{ padding: "1%" }}>
          <Button variant="contained"> Agregar profesional</Button>
        </Grid>

        <Grid size={12}>
          <Paper
            component="form"
            sx={{
              display: "flex",
              alignItems: "center",
              width: "98.5%",
            }}
          >
            <IconButton
              sx={{ p: "10px" }}
              aria-label="menu"
              onClick={buscarDatos}
            >
              <SearchIcon />
            </IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder={placeholders[filtro] || "Buscar por"}
              inputProps={{ "aria-label": "search data" }}
              onChange={(e) => setInputSearch(e.target.value)} // Actualiza el valor del campo de búsqueda
              onKeyDown={handleKeyDown} // Maneja la tecla Enter
            />
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <FormControl sx={{ m: 1, minWidth: 100 }}>
              <InputLabel id="select-filtro">Filtro</InputLabel>
              <Select
                labelId="select-filtro"
                id="simple-select-autowidth"
                value={filtro}
                onChange={handleChange}
                autoWidth
                label="Filtro"
              >
                <MenuItem value="">
                  <em>Ninguno</em>
                </MenuItem>
                <MenuItem value={1}>Nombre</MenuItem>
                <MenuItem value={2}>Cédula</MenuItem>
                <MenuItem value={3}>Correo</MenuItem>
              </Select>
            </FormControl>
          </Paper>
        </Grid>

        <Grid size={8}>
          <TablaDatos
            rows={filteredData}
            columns={columns}
            onRowSelect={handleRowSelect}
          />
        </Grid>

        <Grid
          size={4}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <OverviewPersona selectedData={selectedData} />
        </Grid>
      </Grid>
    </Box>
  );
}
export default Panelprofesional;
