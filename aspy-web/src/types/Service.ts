type TipoServicio =
  | ""
  | "Consulta Médica"
  | "Terapia Psicológica"
  | "Terapia de Lenguaje";

export interface Servicio {
  id: number;
  name: string;
  description: string;
  price: number;
  durationMinutes: number;
  serviceType: TipoServicio;
  active: boolean;
  ccreatingIn: string;
  updated_on: string;
}
