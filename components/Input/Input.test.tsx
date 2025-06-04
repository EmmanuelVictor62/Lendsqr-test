import { render, screen, fireEvent } from "@testing-library/react";
import Input from "../Input";

const mockRegister = {
  name: "testInput",
  onChange: jest.fn(),
  onBlur: jest.fn(),
  ref: jest.fn(),
};

describe("Input Component", () => {
  test("renders input with label and placeholder", () => {
    render(
      <Input
        label="Email"
        placeholder="Enter your email"
        type="email"
        register={mockRegister}
      />
    );

    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter your email")).toBeInTheDocument();
  });

  test("displays error message when error is passed", () => {
    render(
      <Input
        label="Email"
        placeholder="Enter your email"
        type="email"
        error="Invalid email"
        register={mockRegister}
      />
    );

    expect(screen.getByText("Invalid email")).toBeInTheDocument();
  });

  test("toggles password visibility", () => {
    render(
      <Input
        label="Password"
        placeholder="Enter password"
        type="password"
        register={mockRegister}
      />
    );

    const toggleButton = screen.getByRole("button");
    expect(toggleButton).toHaveTextContent("SHOW");

    fireEvent.click(toggleButton);
    expect(toggleButton).toHaveTextContent("HIDE");
  });
});
