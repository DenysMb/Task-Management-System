import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Home from "./Home";
import { AppContext } from "../../context/AppContext";
import { mockContextValues } from "../../setupTests";

describe("Home component", () => {
  const wrapper = (
    <BrowserRouter>
      <AppContext.Provider value={mockContextValues}>
        <Home />
      </AppContext.Provider>
    </BrowserRouter>
  );

  test("renders total tags and triggers correctly", () => {
    const { getByText, getByTestId } = render(wrapper);

    expect(getByText("Total Tags")).toBeInTheDocument();
    expect(getByText("Total Triggers")).toBeInTheDocument();

    const tagsCard = getByTestId("tags-card") as HTMLHeadingElement;
    const triggersCard = getByTestId("triggers-card") as HTMLHeadingElement;

    expect(tagsCard.textContent).toBe(mockContextValues.tags.length.toString());
    expect(triggersCard.textContent).toBe(
      mockContextValues.triggers.length.toString()
    );
  });
});
