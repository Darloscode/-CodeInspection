export interface Data {
    id?: string;
    nombre?: string;
    apellido?: string;
    foto?: string;
    edad?: string;
    titulo?: string;
    descripcion?: string;
    genero?: string;
    citas: Array<{
      paciente: string;
      profesional: string;
      hora: string;
      fecha: string;
    }>;
    tipo?: string;
    correo?: string;
    cedula?: string;
  }
  