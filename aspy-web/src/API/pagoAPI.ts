import axios from 'axios';
import apiURL from './apiConfig';

const pagoAPI = {
    getPagosByPaciente: (nombre: string) =>
        axios.get(`${apiURL}/pagos?paciente=${encodeURIComponent(nombre)}`),

    getPagoByCita: (citaId: string) =>
        axios.get(`${apiURL}/pagos?citaId=${citaId}`),

    getPagosByEstado: (estado: string) =>
        axios.get(`${apiURL}/pagos?estado=${encodeURIComponent(estado)}`),

    getPagosByServicio: (servicio: string) =>
        axios.get(`${apiURL}/pagos?servicio=${encodeURIComponent(servicio)}`),

    createPago: (pagoData: {
        citaId: string;
        metodoPago: string;
        fechaPago: string;
        comprobante: string;
    }) =>
        axios.post(`${apiURL}/pagos`, pagoData),

    updateEstadoPago: (
        idCita: string,
        estado: string,
    ) =>
        axios.put(`${apiURL}/pagos/${idCita}`, { estado }),
};

export default pagoAPI;