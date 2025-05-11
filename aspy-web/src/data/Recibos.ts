import { ReceiptRevisionData } from "@/types/ReceiptRevisionData";

export const recibos: ReceiptRevisionData[] = [
  {
    id: 1,
    idFactura: 1,
    paciente: "Carlos Flores",
    representante: "María Flores",
    cedula_paciente: "0951234567",
    url_comprobante_pago: "https://example.com/comprobante1.pdf",
  },
  {
    id: 2,
    idFactura: 2,
    paciente: "Ana Torres",
    representante: "Luis Torres",
    cedula_paciente: "0957654321",
    url_comprobante_pago: "https://example.com/comprobante2.pdf",
  },
  {
    id: 3,
    idFactura: 3,
    paciente: "Pedro García",
    representante: "Carmen García",
    cedula_paciente: "0959876543",
    url_comprobante_pago: "https://example.com/comprobante3.pdf",
  },
  {
    id: 4,
    idFactura: 4,
    paciente: "Lucía Rodríguez",
    representante: "Carlos Rodríguez",
    cedula_paciente: "0954567890",
    url_comprobante_pago: "https://example.com/comprobante4.pdf",
  },
  {
    id: 5,
    idFactura: 5,
    paciente: "Miguel Pérez",
    representante: "Ana Pérez",
    cedula_paciente: "0956543210",
    url_comprobante_pago: "https://example.com/comprobante5.pdf",
  },
];
