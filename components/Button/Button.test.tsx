import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import Button from "./index";

describe("Button Component", () => {
  test("renders with label", () => {
    render(<Button label="Click me" />);
    expect(
      screen.getByRole("button", { name: "Click me" })
    ).toBeInTheDocument();
  });

  test("renders with different type props", () => {
    render(<Button label="Submit" type="submit" />);
    expect(screen.getByRole("button")).toHaveAttribute("type", "submit");
  });

  test("applies variant data attribute", () => {
    render(<Button label="Primary" variant="primary" />);
    expect(screen.getByRole("button")).toHaveAttribute(
      "data-variant",
      "primary"
    );
  });

  test("calls handleClick when clicked", () => {
    const handleClick = jest.fn();
    render(<Button label="Click" handleClick={handleClick} />);
    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
