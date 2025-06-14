import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import AppointmentCreation from "../AppointmentCreation";

// Mock de useNavigate con Jest
const mockedNavigate = jest.fn();

jest.mock("react-router-dom", () => {
  const actual = jest.requireActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => mockedNavigate,
  };
});

// Mock de DateCalendarValue para evitar problemas con módulos no transformados
jest.mock("../DateCalendarValue", () => () => <div>Mocked Calendar</div>);

describe("AppointmentCreation", () => {
  beforeEach(() => {
    mockedNavigate.mockClear();
  });

  it("renders all form inputs and calendar", () => {
    render(
      <MemoryRouter>
        <AppointmentCreation />
      </MemoryRouter>
    );

    expect(screen.getByLabelText("Escoja el servicio")).toBeInTheDocument();
    expect(screen.getByLabelText("Escoja el profesional")).toBeInTheDocument();
    expect(screen.getByLabelText("Cédula del paciente")).toBeInTheDocument();
    expect(screen.getByLabelText("Nombre del paciente")).toBeInTheDocument();
    expect(screen.getByLabelText("Presencial")).toBeInTheDocument();
    expect(screen.getByLabelText("Virtual")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /proceder a pagar/i })
    ).toBeInTheDocument();

    // Aseguramos que el mock del calendario está presente
    expect(screen.getByText("Mocked Calendar")).toBeInTheDocument();
  });

  it("navigates to /pago when clicking the button", () => {
    render(
      <MemoryRouter>
        <AppointmentCreation />
      </MemoryRouter>
    );

    const button = screen.getByRole("button", { name: /proceder a pagar/i });
    fireEvent.click(button);

    expect(mockedNavigate).toHaveBeenCalledWith("/pago");
  });
});
