import { fireEvent, render, screen } from "@testing-library/react";
import { Sidebar } from "./Sidebar";
import { MemoryRouter } from "react-router";
describe("Sidebar", () => {
  test("Sidebar", () => {
    render(
      <MemoryRouter>
        <Sidebar />
      </MemoryRouter>
    );
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });
  test("Sidebar collapsed", () => {
    render(
      <MemoryRouter>
        <Sidebar />
      </MemoryRouter>
    );
    const toggleBtn = screen.getByTestId("sidebar-toggle");
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
  });
});
