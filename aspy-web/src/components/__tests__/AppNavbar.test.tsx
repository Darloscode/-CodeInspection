import { render, screen, fireEvent } from "@testing-library/react";
import AppNavbar from "@/components/AppNavbar";

jest.mock('../../shared-theme/ColorModeSelect', () => () => <div data-testid="color-mode-dropdown" />);

jest.mock('../SideMenuMobile', () => (props: { open?: boolean }) => (
  <div data-testid="side-menu-mobile" data-open={props.open ? 'true' : 'false'}>
    SideMenuMobile
  </div>
));
jest.mock('../MenuContent', () => () => <div data-testid="menu-content" />);

describe("AppNavbar", () => {
  test("renders dashboard title and menu button", () => {
    render(<AppNavbar />);
    expect(screen.getByText(/dashboard/i)).toBeInTheDocument();
    const menuButton = screen.getByLabelText("menu");
    expect(menuButton).toBeInTheDocument();
  });

  test("opens SideMenuMobile when menu button is clicked", () => {
    render(<AppNavbar />);
    const menuButton = screen.getByLabelText("menu");
    fireEvent.click(menuButton);
    expect(screen.getByTestId("side-menu-mobile")).toHaveAttribute("data-open", "true");
  });
});