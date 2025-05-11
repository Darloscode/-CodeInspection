import { Invoice } from "@/types/Invoice";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";

export default function InvoiceView({ info }: { info: Invoice }) {
  return (
    <Box
      maxWidth={500}
      mx="auto"
      p={3}
      bgcolor="#fff"
      borderRadius={1}
      border={1}
      borderColor="#000000"
    >
      <Typography variant="h6" fontWeight="bold">
        Invoice
      </Typography>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        #{info.number || "N/A"}
      </Typography>

      <Typography fontWeight="bold">Issue Date:</Typography>
      <Typography gutterBottom>{info.issueDate || "N/A"}</Typography>

      <Typography fontWeight="bold">Client Name:</Typography>
      <Typography gutterBottom>{info.clientName || "N/A"}</Typography>

      <Typography fontWeight="bold">Address:</Typography>
      <Typography gutterBottom>{info.address || "N/A"}</Typography>

      <Box mt={4}>
        <TableContainer component={Paper} variant="outlined">
          <Table>
            <TableBody>
              <TableRow>
                <TableCell
                  colSpan={2}
                  sx={{ fontWeight: "bold", backgroundColor: "#f5f5f5" }}
                >
                  Services
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{info.serviceName || "N/A"}</TableCell>
                <TableCell align="right">
                  ${info.servicePrice ? info.servicePrice.toFixed(2) : "0.00"}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <TableContainer
          component={Paper}
          variant="outlined"
          sx={{ marginTop: "2%" }}
        >
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>Subtotal</TableCell>
                <TableCell align="right">
                  ${info.subtotal ? info.subtotal.toFixed(2) : "0.00"}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Tax 12%</TableCell>
                <TableCell align="right">
                  ${info.tax ? info.tax.toFixed(2) : "0.00"}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ fontWeight: "bold" }}>Total</TableCell>
                <TableCell align="right" sx={{ fontWeight: "bold" }}>
                  ${info.total ? info.total.toFixed(2) : "0.00"}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Grid container mt={4} spacing={2}>
        <Grid size={6}>
          <Typography fontWeight="bold">Payment Method:</Typography>
          <Typography>{info.paymentMethod || "N/A"}</Typography>
        </Grid>
        <Grid size={6}>
          <Typography fontWeight="bold">Contact Info:</Typography>
          <Typography>{info.contactEmail || "N/A"}</Typography>
          <Typography>{info.contactPhone || "N/A"}</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
