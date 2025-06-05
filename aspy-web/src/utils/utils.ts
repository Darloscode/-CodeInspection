import { usuarios } from "@data/Usuarios";
import type { User } from "@/types/User";
import type { Cita } from "@/types/Cita";
import { citas } from "@data/Citas";
import jsPDF from "jspdf";
import "jspdf-autotable";
import autoTable from "jspdf-autotable";
import logoBase64 from "@assets/logo mediano.png";
import { Invoice } from "@/types/Invoice";
import { ReceiptRevisionData } from "@/types/ReceiptRevisionData";
import { recibos } from "@data/Recibos";
import { facturas } from "@data/Facturas";

type TendenciaDiaria = {
  promedioPorcentual: number;
};

type TotalIngresosMensual = {
  total: number;
};

interface jsPDFWithAutoTable extends jsPDF {
  lastAutoTable?: {
    finalY: number;
    [key: string]: number;
  };
}

export function CalcularTendenciaDiaria(data: number[]): TendenciaDiaria {
  if (data.length < 2) {
    return {
      promedioPorcentual: 0,
    };
  }

  let sumaPorcentajes = 0;

  for (let i = 1; i < data.length; i++) {
    const actual = data[i];
    const anterior = data[i - 1];

    const cambio = actual - anterior;

    if (anterior !== 0) {
      const porcentaje = (cambio / anterior) * 100;
      sumaPorcentajes += porcentaje;
    }
  }

  const totalCambios = data.length - 1;

  return {
    promedioPorcentual: +(sumaPorcentajes / totalCambios).toFixed(2),
  };
}

export function TotalIngresosMensual(data: number[]): TotalIngresosMensual {
  return { total: data.reduce((total, numero) => total + numero, 0) };
}

export function getProfesionales(): User[] {
  return usuarios.filter((u: User) => u.role === "Profesional");
}

export function getCitasProfesional(id: number): Cita[] {
  if (!id) {
    return citas;
  }
  return citas.filter((cita) => cita.doctor?.id === id);
}

export function handleDownloadInvoice(invoice: Invoice) {
  const doc = new jsPDF("p", "mm", "a4") as jsPDFWithAutoTable; // Vertical, milímetros, tamaño A4

  // Insertar logo
  doc.addImage(logoBase64, "PNG", 10, 10, 50, 30);

  // Nombre empresa
  doc.setFontSize(18);
  doc.text("Fundación ASPY Ecuador", 105, 20, { align: "center" });

  // Info Empresa
  doc.setFontSize(10);
  doc.text("Av.Miguel H Alcivar, y Av.Alberto Borges, Guayaquil", 105, 28, {
    align: "center",
  });
  doc.text(
    "Teléfono: 0999616051 | Email: fundacionaspyecuador@gmail.com",
    105,
    34,
    { align: "center" }
  );

  // Línea divisoria
  doc.setLineWidth(0.5);
  doc.line(10, 45, 200, 45);

  // Datos de Factura
  doc.setFontSize(12);
  doc.text(`Comprobante de Pago Nº: ${invoice.number}`, 10, 52);
  doc.text(`Fecha de Emisión: ${invoice.issueDate}`, 142, 52);
  doc.text(`Cliente: ${invoice.clientName}`, 10, 59);
  doc.text(`Dirección: ${invoice.address}`, 10, 66);

  // Tabla de servicios
  const servicios = [
    [invoice.serviceName, `$${invoice.servicePrice.toFixed(2)}`],
  ];

  autoTable(doc, {
    startY: 75,
    head: [["Descripción del Servicio", "Precio"]],
    body: servicios,
    theme: "grid",
    headStyles: { fillColor: [0, 102, 204], textColor: 255 },
    styles: { fontSize: 11 },
    columnStyles: {
      0: { halign: "left" },
      1: { halign: "right" },
    },
  });

  // Tabla de totales
  const totales = [
    ["Subtotal:", `$${invoice.subtotal.toFixed(2)}`],
    ["IVA 15%:", `$${invoice.tax.toFixed(2)}`],
    ["Total:", `$${invoice.total.toFixed(2)}`],
  ];

  autoTable(doc, {
    startY: 100,
    body: totales,
    theme: "plain",
    styles: { fontSize: 11 },
    tableWidth: 60, // ancho pequeño para que no sea gigante
    margin: { left: 145 }, // mueve la tabla a la derecha en el eje X
    columnStyles: {
      0: { halign: "right", fontStyle: "bold" },
      1: { halign: "left" },
    },
  });

  // Totales
  const finalY = (doc.lastAutoTable?.finalY ?? 0) + 15;

  // Método de pago
  doc.setFontSize(11);
  doc.text(`Método de Pago: ${invoice.paymentMethod}`, 10, finalY);

  // Datos de contacto
  doc.text(`Email: ${invoice.contactEmail}`, 10, finalY + 7);
  doc.text(`Teléfono: ${invoice.contactPhone}`, 10, finalY + 14);

  // Pie de página

  doc.setLineWidth(0.5);
  doc.line(10, 285, 200, 285);
  doc.setFontSize(9);
  doc.text("Gracias por confiar en nosotros.", 105, 290, { align: "center" });

  doc.save(`Factura-${invoice.number}-${invoice.clientName}.pdf`);
}

export function getRecibo(id: number): ReceiptRevisionData {
  const recibo = recibos.find((recibo) => recibo.idFactura === id);
  if (!recibo) {
    throw new Error(`Factura con ID ${id} no encontrada`);
  }
  return recibo;
}

export function getFactura(id: number): Invoice {
  const factura = facturas.find((factura) => factura.id === id);
  if (!factura) {
    throw new Error(`Factura con ID ${id} no encontrada`);
  }
  return factura;
}
