import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import { useState } from "react";
import React, { useRef } from "react";
import Button from "@mui/material/Button";
import BackupIcon from "@mui/icons-material/Backup";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";

export default function AddReport() {
  const [preview, setPreview] = useState<string | null>(null);
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1); // Esto te lleva a la página anterior
  };
  /*
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreview(url);
    }
  };*/

  const inputRef = useRef<HTMLInputElement>(null);

  const handleIconClick = () => {
    inputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreview(url);
    }
  };

  const [comentario, setComentario] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setComentario(event.target.value);
  };
  console.log(comentario);
  return (
    <Box className="box-panel-control">
      <Grid container spacing={2}>
        <Grid size={12}>
          <Typography variant="h2">Nuevo Reporte</Typography>
        </Grid>
        <Grid container size={12} alignContent={"center"}>
          <Grid size={12}>
            <input
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              ref={inputRef}
              onChange={handleFileChange}
            />

            <Button
              variant="outlined"
              startIcon={<BackupIcon />}
              onClick={handleIconClick}
              sx={{ width: "100%" }}
            >
              Ingrese su firma
            </Button>
          </Grid>
          <Grid size={12} container justifyContent="center" alignItems="center">
            {preview && <img src={preview} alt="Vista previa" width={200} />}
          </Grid>
        </Grid>
        <Grid size={12}>
          <TextField
            fullWidth
            id="filled-textarea"
            label="Agregue un comentario"
            multiline
            variant="filled"
            onChange={handleChange}
          />
        </Grid>
        <Grid
          container
          size={12}
          textAlign={"right"}
          className="grid-botones-anadir"
        >
          <Grid size={6}>
            <Button variant="outlined" className="cerrar" onClick={handleBack}>
              Cerrar
            </Button>
          </Grid>
          <Grid size={6}>
            <Button variant="outlined" className="guardar">
              Añadir
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
