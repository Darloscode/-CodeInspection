import axios from 'axios';
import apiURL from './apiConfig';

const citaAPI = {
    getCitaById: (id: string) =>
        axios.get(`${apiURL}/citas/${id}`),

    getCitasByPaciente: (nombre: string) =>
        axios.get(`${apiURL}/citas?paciente=${encodeURIComponent(nombre)}`),

    getCitasEntreFechas: (fechaInicio: string, fechaFin: string) =>
        axios.get(`${apiURL}/citas?fechaInicio=${fechaInicio}&fechaFin=${fechaFin}`),

    getCitasByProfesional: (profesional: string) =>
        axios.get(`${apiURL}/citas?profesional=${encodeURIComponent(profesional)}`),

    getCitasByEstado: (estado: string) =>
        axios.get(`${apiURL}/citas?estado=${encodeURIComponent(estado)}`),
    
    createCita: (citaData: {
        cedulaPaciente: string;
        profesional: string;
        servicio: string;
        tipoConsulta: string;
        fecha: string;
        horainicio: string;
        horafin: string;
    }) =>
        axios.post(`${apiURL}/citas`, citaData),
};

export default citaAPI;
