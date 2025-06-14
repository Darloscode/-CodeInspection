import { render, screen } from "@testing-library/react";
import CreateUser from "../CreateUser";

// Mock del componente UserForm
jest.mock("@forms/UserForm", () => {
  return ({ isEditMode, role }: { isEditMode: boolean; role: string }) => (
    <div>
      UserForm - isEditMode: {isEditMode ? "true" : "false"}, role: {role}
    </div>
  );
});

describe("CreateUser", () => {
  it("renderiza correctamente con el rol proporcionado", () => {
    render(<CreateUser role="admin" />);

    expect(screen.getByText("Crear Usuario")).toBeInTheDocument();
    expect(
      screen.getByText("UserForm - isEditMode: false, role: admin")
    ).toBeInTheDocument();
  });
});
