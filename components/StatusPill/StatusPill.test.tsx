import { render, screen } from "@testing-library/react";
import StatusPill, { StatusType } from "../StatusPill";

describe("StatusPill", () => {
  const statuses: StatusType[] = [
    "Active",
    "Inactive",
    "Pending",
    "Blacklisted",
  ];

  it("renders the correct status and data-status attribute", () => {
    statuses.forEach((status) => {
      render(<StatusPill status={status} />);
      const pill = screen.getByRole("button", { name: status });
      expect(pill).toBeInTheDocument();
      expect(pill).toHaveAttribute("data-status", status.toLowerCase());
    });
  });
});
