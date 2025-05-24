import { useNavigate } from "react-router-dom";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Box from "@mui/material/Box";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import top100Films from "@assets/top100Films";

import DateCalendarValue from "./DateCalendarValue";

export default function AppointmentCreation() {
  const navigate = useNavigate();

  const handleToPay = () => {
    navigate("/pago");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center", // Centra horizontalmente el contenedor
        alignItems: "center", // Centra verticalmente el contenedor
        gap: "0px", // Espacio entre los dos divs
      }}
    >
      {/* Div izquierdo - contenido del formulario */}
      <div
        style={{
          width: "20%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FormControl>
          <Autocomplete
            style={{ marginBottom: "25px" }}
            disablePortal
            options={top100Films}
            sx={{ width: "100%" }}
            renderInput={(params) => (
              <TextField {...params} label="Escoja el servicio" />
            )}
          />

          <Autocomplete
            style={{ marginBottom: "25px" }}
            disablePortal
            options={top100Films}
            sx={{ width: "100%" }}
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
            sx={{ "& > :not(style)": { m: 1, width: "100%" } }}
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
            />
          </Box>

          <Button variant="contained" onClick={handleToPay}>
            Proceder a pagar
          </Button>
        </FormControl>
      </div>

      {/* Div derecho - calendario */}
      <div
        style={{
          width: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <DateCalendarValue />
      </div>
    </div>
  );
}
