import React from "react";
import { render, screen } from "@testing-library/react";
import Agenda from "@/components/Agenda";
import "@testing-library/jest-dom";
import { Cita } from "@/types/Cita";

// Mock específico solo para este test file
jest.mock('@aldabil/react-scheduler', () => ({
  Scheduler: ({ events }: { events: any[] }) => (
    <div data-testid="scheduler-mock">
      {events.map((event, idx) => (
        <div key={idx}>
          Paciente: {event.title} <br />
          Profesional: {event.professional}
        </div>
      ))}
    </div>
  ),
}));


describe("Agenda component", () => {
  const mockCitas: Cita[] = [
    {
      id: 1,
      fecha: "2025-06-15",
      horainicio: "09:00",
      horafin: "10:00",
      asistio: true,
      comentario: "Paciente puntual",
      paciente: {
        id: 101,
        firstName: "Carlos",
        lastName: "Salazar",
        email: "carlos@example.com",
        rol: "paciente",
      },
      doctor: {
        id: 201,
        firstName: "Dayse",
        lastName: "Valverde",
        email: "dayse@example.com",
        rol: "doctor",
      },
    },
  ];

  test("renders scheduler mock", () => {
    render(<Agenda citas={mockCitas} />);
    expect(screen.getByTestId("scheduler-mock")).toBeInTheDocument();
  });

  test("renders event titles from citas", () => {
    render(<Agenda citas={mockCitas} />);
    // Aquí pruebas que el texto que generas está en el DOM
    expect(screen.getByText(/Paciente: Carlos Salazar/i)).toBeInTheDocument();
    expect(screen.getByText(/Profesional: Dayse Valverde/i)).toBeInTheDocument();
  });
});
