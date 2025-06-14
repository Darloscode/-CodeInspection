import { render, screen } from "@testing-library/react";
import CreateService from "../CreateService";

// Mock del componente ServiceForm
jest.mock("../forms/ServiceForm", () => {
  return ({ isEditMode }: { isEditMode: boolean }) => (
    <div>ServiceForm - isEditMode: {isEditMode ? "true" : "false"}</div>
  );
});

describe("CreateService", () => {
  it("renderiza el título y el formulario correctamente", () => {
    render(<CreateService />);

    // Verifica que el título se muestre
    expect(screen.getByText("Crear Servicio")).toBeInTheDocument();

    // Verifica que el formulario se renderice con isEditMode = false
    expect(screen.getByText("ServiceForm - isEditMode: false")).toBeInTheDocument();
  });
});
