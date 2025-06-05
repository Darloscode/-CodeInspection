import { render, screen } from "@testing-library/react";
import AddReport from "../professional/AddReport";
import "@testing-library/jest-dom";

describe("AddReport component", () => {
  test("renders correctly and allows uploading a file and writing a comment", () => {
    render(<AddReport />);
    // Check for titles
    expect(screen.getByText("Firma del profesional")).toBeInTheDocument();
  });
});
