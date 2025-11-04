import { render, screen } from "@testing-library/react";
import { AppButton } from "./AppButton";
describe("AppButton", () => {
  test("AppButton", () => {
    render(<AppButton>AppButton</AppButton>);
    expect(screen.getByText("AppButton")).toBeInTheDocument();
  });
  test("AppButton variant outlined", () => {
    render(<AppButton variant="outlined">AppButton</AppButton>);
    expect(screen.getByText("AppButton")).toHaveClass("outlined");
    screen.debug();
  });
});
