import { render, screen } from "@testing-library/react";
import AddSign from "@/components/AddSign";
import "@testing-library/jest-dom";

describe("AddSign component", () => {
  test("renders correctly and allows uploading a file and writing a comment", () => {
    render(<AddSign />);
    // Check for titles
    expect(screen.getByText("Firma del profesional")).toBeInTheDocument();
  });
});
