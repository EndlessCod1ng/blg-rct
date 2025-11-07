import { render, screen } from "@testing-library/react";
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
});
