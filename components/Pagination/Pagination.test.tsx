import { render, screen, fireEvent } from "@testing-library/react";
import Pagination from "../Pagination";

const onPageChange = jest.fn();

describe("Pagination Component", () => {
  test("renders with correct info and buttons", () => {
    render(
      <Pagination
        pageCount={5}
        currentPage={0}
        onPageChange={onPageChange}
        itemsPerPage={10}
        totalItems={42}
      />
    );

    expect(screen.getByText(/Showing/i)).toBeInTheDocument();
    expect(screen.getByText(/out of 42/i)).toBeInTheDocument();
    expect(screen.getByTestId("pagination-info-btn")).toHaveTextContent("10");
  });

  test("calls onPageChange when a page is clicked", () => {
    render(
      <Pagination
        pageCount={3}
        currentPage={0}
        onPageChange={onPageChange}
        itemsPerPage={10}
        totalItems={25}
      />
    );

    const pageButton = screen.getByRole("button", { name: "Page 2" });
    fireEvent.click(pageButton);
    expect(onPageChange).toHaveBeenCalled();
  });
});
