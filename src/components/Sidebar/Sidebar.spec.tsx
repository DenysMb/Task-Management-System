import { render } from "@testing-library/react";
import Sidebar from "./Sidebar";
import { MemoryRouter } from "react-router-dom";
import { MENU_ITEMS } from "../../shared/constants";

describe("Sidebar", () => {
  const wrapper = (
    <MemoryRouter>
      <Sidebar />
    </MemoryRouter>
  );

  test("should render Sidebar component", () => {
    const { getByText } = render(wrapper);

    const sidebarElement = getByText("Tag Management System");
    expect(sidebarElement).toBeInTheDocument();

    MENU_ITEMS.forEach((item) => {
      const linkElement = getByText(item.name);
      expect(linkElement).toBeInTheDocument();
      expect(linkElement.getAttribute("href")).toBe(item.url);
    });
  });
  
  // Test for change route when click on menu item
});
