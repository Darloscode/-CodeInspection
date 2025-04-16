import axios from 'axios';
import apiURL from './apiConfig';

const reporteAPI = {
    getReporteById: (id: string) =>
        axios.get(`${apiURL}/reportes/${id}`),

    getReportesByPaciente: (nombre: string) =>
        axios.get(`${apiURL}/reportes?paciente=${encodeURIComponent(nombre)}`),

    getReportesEntreFechas: (fechaInicio: string, fechaFin: string) =>
        axios.get(`${apiURL}/reportes?fechaInicio=${fechaInicio}&fechaFin=${fechaFin}`),

    //TODO VER QUE TAN NECESARIO ES ESTA
    getReportesByProfesional: (profesional: string) =>
        axios.get(`${apiURL}/reportes?profesional=${encodeURIComponent(profesional)}`),

    createReporte: (reporteData: {
        cedulaPaciente: string;
        profesional: string;
        idCita: string;
        fecha: string;
        hora: string;
        comentarios: string;
        firma: string;
    }) =>
        axios.post(`${apiURL}/reportes`, reporteData),
};

export default reporteAPI;