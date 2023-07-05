import { render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { MENU_ITEMS } from "../../shared/constants";
import { AppRoutes } from "../../App";
import { Sidebar } from "..";
import { ROUTES } from "../../shared/routes";

describe("Sidebar", () => {
  const wrapper = (
    <MemoryRouter initialEntries={[ROUTES.Home]}>
      <Sidebar />
      <AppRoutes />
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

  test("should navigate to /tags when Tags is clicked", () => {
    const { getByText } = render(wrapper);

    const tagMenuLink = getByText(MENU_ITEMS[1].name);

    userEvent.click(tagMenuLink);

    waitFor(() => {
      expect(getByText("Tags")).toBeInTheDocument();
    });
  });

  test("should navigate to /triggers when Triggers is clicked", () => {
    const { getByText } = render(wrapper);

    const tagMenuLink = getByText(MENU_ITEMS[0].name);

    userEvent.click(tagMenuLink);

    waitFor(() => {
      expect(getByText("Triggers")).toBeInTheDocument();
    });
  });
});
