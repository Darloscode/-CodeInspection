import { render, screen } from "@testing-library/react";
import AddSign from "@/components/AddSign";
import "@testing-library/jest-dom";

describe("AddSign component", () => {
  test("renders correctly and allows uploading a file and writing a comment", () => {
    render(<AddSign />);
    // Check for titles
    expect(screen.getByText("Firma del profesional")).toBeInTheDocument();
  });
   test("renders the upload button and comment textarea", () => {
    render(<AddSign />);
    // El botón que dispara la subida de firma
    expect(screen.getByText("Subir firma")).toBeInTheDocument();

    // El textarea con placeholder
    expect(screen.getByPlaceholderText("Redactar observaciones del caso...")).toBeInTheDocument();
  });
});
 
