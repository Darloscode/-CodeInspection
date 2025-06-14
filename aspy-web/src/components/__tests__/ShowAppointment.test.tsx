import { render, screen } from "@testing-library/react";
import ShowAppointment from "@/components/ShowAppointment";
import { Cita } from "@/types/Cita";
import "@testing-library/jest-dom";

describe("ShowAppointment component", () => {
  const mockCitas: Cita[] = [
    {
      id: 1,
      fecha: "2025-06-14",
      horainicio: "10:00",
      horafin: "11:00",
      asistio: true,
      comentario: "Paciente llegó puntual.",
      paciente: {
        id: 1,
        firstName: "Juan",
        lastName: "Pérez",
      },
      doctor: {
        id: 2,
        firstName: "Ana",
        lastName: "Martínez",
      },
    },
  ];

  test("renders appointment data correctly", () => {
    render(<ShowAppointment citas={mockCitas} />);

    // Verifica que el nombre del paciente esté en el documento
    expect(screen.getByText("Paciente: Juan Pérez")).toBeInTheDocument();

    // Verifica que el nombre del doctor esté en el documento
    expect(screen.getByText("Profesional: Ana Martínez")).toBeInTheDocument();

    // Verifica que la hora de inicio esté en el documento
    expect(screen.getByText("10:00")).toBeInTheDocument();

    // Verifica que la fecha esté en el documento
    expect(screen.getByText("2025-06-14")).toBeInTheDocument();
  });

  test("renders multiple appointments", () => {
    const multipleCitas: Cita[] = [
      ...mockCitas,
      {
        id: 2,
        fecha: "2025-06-15",
        horainicio: "12:00",
        horafin: "13:00",
        asistio: false,
        paciente: {
          id: 3,
          firstName: "Laura",
          lastName: "Gómez",
        },
        doctor: {
          id: 4,
          firstName: "Carlos",
          lastName: "Salazar",
        },
      },
    ];

    render(<ShowAppointment citas={multipleCitas} />);

    expect(screen.getByText("Paciente: Juan Pérez")).toBeInTheDocument();
    expect(screen.getByText("Profesional: Ana Martínez")).toBeInTheDocument();
    expect(screen.getByText("10:00")).toBeInTheDocument();
    expect(screen.getByText("2025-06-14")).toBeInTheDocument();

    expect(screen.getByText("Paciente: Laura Gómez")).toBeInTheDocument();
    expect(screen.getByText("Profesional: Carlos Salazar")).toBeInTheDocument();
    expect(screen.getByText("12:00")).toBeInTheDocument();
    expect(screen.getByText("2025-06-15")).toBeInTheDocument();
  });
});
