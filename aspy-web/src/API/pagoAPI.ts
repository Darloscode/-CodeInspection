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
        monto: number;
        servicio: string;
        metodoPago: string;
        fechaPago: string;
        estado: string;
    }) =>
        axios.post(`${apiURL}/pagos`, pagoData),

    updateEstado: (
        id: string,
        estado: string,
    ) =>
        axios.put(`${apiURL}/pagos/${id}`, { estado }),
};

export default pagoAPI;