type TipoServicio =
  | ""
  | "Consulta Médica"
  | "Terapia Psicológica"
  | "Terapia de Lenguaje";

export interface Servicio {
  id: number;
  nombre: string;
  descripcion: string;
  costo: number;
  duracion_minutos: number;
  tipo_servicio: TipoServicio;
  activo: boolean;
  creado_en: string;
  actualizado_en: string;
}
