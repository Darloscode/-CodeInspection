import axios from 'axios';
import apiURL from './apiConfig';

const usuarioAPI = {
    getAllUsuarios: () =>
        axios.get(`${apiURL}/usuarios`),

    getUsuarioById: (id: string) =>
        axios.get(`${apiURL}/usuarios/${id}`),

    getUsuariosByRol: (rol: string) =>
        axios.get(`${apiURL}/usuarios?rol=${encodeURIComponent(rol)}`),

    createUsuario: (usuarioData: {
        nombre: string;
        cedula: string;
        rol: string;
        email: string;
        telefono: string;
        direccion: string;
        contrasena: string;
    }) =>
        axios.post(`${apiURL}/usuarios`, usuarioData),

    updateUsuario: (id: string, usuarioData: {
        nombre?: string;
        cedula?: string;
        rol?: string;
        email?: string;
        telefono?: string;
        direccion?: string;
        contrasena?: string;
        fechaNacimiento?: string;
        estado?: string;
        foto?: string;
        sobreMi?: string;
        genero?: string;
    }) =>
        axios.put(`${apiURL}/usuarios/${id}`, usuarioData),
};

export default usuarioAPI;