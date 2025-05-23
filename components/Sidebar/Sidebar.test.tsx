import { render, screen } from "@testing-library/react";
import Sidebar from "../Sidebar";
import { usePathname } from "next/navigation";

jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
}));

jest.mock("constants/routes", () => ({
  routes: [
    { label: "Dashboard", path: "/dashboard", icon: "home" },
    {
      label: "Users",
      children: [
        { label: "Admins", path: "/users/admins", icon: "users" },
        { label: "Guests", path: "/users/guests", icon: "users" },
      ],
    },
  ],
}));

describe("Sidebar", () => {
  beforeEach(() => {
    (usePathname as jest.Mock).mockReturnValue("/users/admins");
  });

  it("renders main and nested routes", () => {
    render(<Sidebar />);

    expect(screen.getByText("Switch Organization")).toBeInTheDocument();
    expect(screen.getByText("Dashboard")).toBeInTheDocument();
    expect(screen.getByText("Users")).toBeInTheDocument();
    expect(screen.getByText("Admins")).toBeInTheDocument();
    expect(screen.getByText("Guests")).toBeInTheDocument();
  });

  it("highlights the active link", () => {
    render(<Sidebar />);
    const activeLink = screen.getByText("Admins").closest("a");
    expect(activeLink).toHaveAttribute("data-active", "true");
  });
});
