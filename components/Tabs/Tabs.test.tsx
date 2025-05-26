import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Tabs from "./index";

describe("Tabs component", () => {
  const tabList = {
    Home: <div>Home content</div>,
    Profile: <div>Profile content</div>,
    Settings: <div>Settings content</div>,
  };

  const handleTabClick = jest.fn();

  beforeEach(() => {
    handleTabClick.mockClear();
  });

  test("renders all tabs and highlights the active tab", () => {
    render(
      <Tabs
        tabList={tabList}
        activeTab="Profile"
        handleTabClick={handleTabClick}
      />
    );

    Object.keys(tabList).forEach((tabName) => {
      const button = screen.getByRole("button", { name: tabName });
      expect(button).toBeInTheDocument();

      if (tabName === "Profile") {
        expect(button).toHaveAttribute("data-active", "true");
      } else {
        expect(button).toHaveAttribute("data-active", "false");
      }
    });
  });

  test("calls handleTabClick with correct tab name on click", () => {
    render(
      <Tabs
        tabList={tabList}
        activeTab="Home"
        handleTabClick={handleTabClick}
      />
    );

    const settingsButton = screen.getByRole("button", { name: "Settings" });
    fireEvent.click(settingsButton);

    expect(handleTabClick).toHaveBeenCalledTimes(1);
    expect(handleTabClick).toHaveBeenCalledWith("Settings");
  });
});
