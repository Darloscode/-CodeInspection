import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Data from "@types/Data";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";

import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

interface OverviewPersonaProps {
  selectedData: Data;
}

function Overview_persona({ selectedData }: OverviewPersonaProps) {
  const { id, nombre, foto, apellido, titulo, descripcion, edad, genero } =
    selectedData;
  return (
    <Box
      sx={{
        width: "80%",
        marginLeft: "0%",
      }}
    >
      <Grid container rowSpacing={0} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
        <Grid size={12}>
          <p className="class_id">{id}</p>
        </Grid>
        <Grid
          size={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Avatar
            alt="Foto de perfil"
            src={foto}
            sx={{ width: 150, height: 150 }}
          />
        </Grid>
        <Grid size={12}>
          <p className="class_nombres">
            {nombre} {apellido}
          </p>
        </Grid>
        <Grid size={12}>
          <p className="class_titulo">{titulo}</p>
        </Grid>
        <Grid
          size={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            variant="contained"
            onClick={() => console.log("AGREGAR ACCIÓN")}
            sx={{
              borderRadius: "10px",
              padding: "2%",
              backgroundColor: "#EFF3FA",
              color: "#4f4f4f",
            }}
          >
            <EditOutlinedIcon
              sx={{
                color: "#13296A",
                backgroundColor: "#EFF3FA",
                borderRadius: "25%",
                padding: "3%",
              }}
            />
          </Button>
        </Grid>
        <Grid size={12}>
          <Box sx={{ width: "100%" }}>
            <Grid container spacing={0}>
              <Grid size={12}>
                <p className="class_sobremi">Sobre mi</p>
              </Grid>
              <Grid size={12} sx={{ width: "100%" }}>
                <p className="class_descripcion">{descripcion}</p>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid size={12}>
          <Box sx={{ width: "100%" }}>
            <Grid container spacing={0}>
              <Grid size={6}>
                <Box sx={{ width: "100%" }}>
                  <Grid container spacing={0}>
                    <Grid size={12}>
                      <p className="class_edad_titulo">Edad</p>
                    </Grid>
                    <Grid size={12}>
                      <p className="class_edad">{edad}</p>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
              <Grid size={6}>
                <Box sx={{ width: "100%" }}>
                  <Grid container spacing={0}>
                    <Grid size={12}>
                      <p className="class_genero_titulo">Género</p>
                    </Grid>
                    <Grid size={12}>
                      <p className="class_genero">{genero}</p>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Overview_persona;
