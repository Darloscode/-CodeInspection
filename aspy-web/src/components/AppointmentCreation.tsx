import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import top100Films from "@assets/top100Films";
import { useNavigate } from "react-router-dom";

import DateCalendarValue from "./DateCalendarValue";

export default function AppointmentCreation() {

const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <div style={{ flex: "5%" }}>
        <h1 style={{ marginBottom: "25px" }}>Agendar Cita </h1>
        <FormControl>
          <Autocomplete
            style={{ marginBottom: "25px" }}
            disablePortal
            options={top100Films}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField {...params} label="Escoja el servicio" />
            )}
          />

          <Autocomplete
            style={{ marginBottom: "25px" }}
            disablePortal
            options={top100Films}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField {...params} label="Escoja el profesional" />
            )}
          />

          <div style={{ marginBottom: "5px" }}>
            <FormLabel id="appointment-type">Tipo de Consulta</FormLabel>
            <RadioGroup row name="row-radio-buttons-group">
              <FormControlLabel
                value="presencial"
                control={<Radio />}
                label="Presencial"
              />
              <FormControlLabel
                value="virtual"
                control={<Radio />}
                label="Virtual"
              />
            </RadioGroup>
          </div>

          <Box
            component="form"
            sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
            noValidate
            autoComplete="off"
            style={{
              display: "flex",
              flexDirection: "column",
              marginBottom: "25px",
            }}
          >
            <TextField
              id="outlined-basic"
              label="Cédula del paciente"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="Nombre del paciente"
              variant="outlined"
              readOnly
              disabled
            />
          </Box>

          <Button variant="contained" onClick={() => navigate('/pago')} >Proceder a pagar</Button>
        </FormControl>
      </div>
      <div style={{ flex: "50%" }}>
        <DateCalendarValue />
      </div>
    </div>
  );
}
