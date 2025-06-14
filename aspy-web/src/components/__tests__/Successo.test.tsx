import { render, screen, fireEvent } from "@testing-library/react";
jest.mock("@assets/visto.png", () => "test-file-stub"); // Mockea la importación de la imagen visto.png para que Jest no intente procesar el archivo real durante las pruebas
import Successo from "../Successo";

describe("Successo component", () => {
  const handleClose = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders success message for card=true", () => {
    render(<Successo open={true} handleClose={handleClose} card={true} />);
    
    expect(screen.getByAltText("Success")).toBeInTheDocument();
    expect(screen.getByText("Cita agendada con éxito")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /aceptar/i })).toBeInTheDocument();
  });

  test("renders success message for card=false", () => {
    render(<Successo open={true} handleClose={handleClose} card={false} />);
    
    expect(screen.getByText("Cita registrada con éxito")).toBeInTheDocument();
  });

  test("does not render dialog when open is false", () => {
    render(<Successo open={false} handleClose={handleClose} card={true} />);
    
    expect(screen.queryByText("Cita agendada con éxito")).not.toBeInTheDocument();
  });

  test("calls handleClose when clicking Aceptar button", () => {
    render(<Successo open={true} handleClose={handleClose} card={true} />);
    
    const button = screen.getByRole("button", { name: /aceptar/i });
    fireEvent.click(button);

    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
