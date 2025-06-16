import axios from "axios";
import apiURL from "./apiConfig";

const reporteAPI = {
  getReporteById: (id: string) => axios.get(`${apiURL}/reportes/${id}`),

  createReporte: (reporteData: {
    idPaciente: string;
    idProfesional: string;
    idCita: string;
    fecha: string;
    hora: string;
    comentarios: string;
    firma: string;
  }) => axios.post(`${apiURL}/reportes`, reporteData),

  // Added updateReporte method (PUT request)
  updateReporte: (id: string, reporteData: {
    idPaciente: string;
    idProfesional: string;
    idCita: string;
    fecha: string;
    hora: string;
    comentarios: string;
    firma: string;
  }) => axios.put(`${apiURL}/reportes/${id}`, reporteData),

  // Added deleteReporte method (DELETE request)
  deleteReporte: (id: string) => axios.delete(`${apiURL}/reportes/${id}`),

  getReportesByPaciente: (nombre: string) =>
    axios.get(`${apiURL}/reportes/paciente/${encodeURIComponent(nombre)}`),

  getReportesEntreFechas: (fechaInicio: string, fechaFin: string) =>
    axios.get(
      `${apiURL}/reportes/entreFechas/${fechaInicio}/${fechaFin}`
    ),

  getReportesByProfesional: (profesional: string) =>
    axios.get(
      `${apiURL}/reportes/profesional/${encodeURIComponent(profesional)}`
    ),
};

export default reporteAPI;
