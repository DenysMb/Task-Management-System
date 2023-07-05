import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Home from "./Home";
import { AppContext, AppContextProps } from "../../context/AppContext";
import { Wrapper, mockContextValues } from "../../setupTests";

describe("Home component", () => {
  const wrapper = (values: AppContextProps = mockContextValues): Wrapper => (
    <BrowserRouter>
      <AppContext.Provider value={values}>
        <Home />
      </AppContext.Provider>
    </BrowserRouter>
  );

  const wrapperWithTagsAndTriggers = wrapper();

  const wrapperWithoutTagsAndTriggers = wrapper({
    tags: undefined,
    triggers: undefined,
  });

  test("should render total tags and triggers correctly", () => {
    const { getByText, getByTestId } = render(wrapperWithTagsAndTriggers);

    expect(getByText("Total Tags")).toBeInTheDocument();
    expect(getByText("Total Triggers")).toBeInTheDocument();

    const tagsCard = getByTestId("tags-card") as HTMLHeadingElement;
    const triggersCard = getByTestId("triggers-card") as HTMLHeadingElement;

    expect(tagsCard.textContent).toBe(
      mockContextValues.tags?.length.toString()
    );
    expect(triggersCard.textContent).toBe(
      mockContextValues.triggers?.length.toString()
    );
  });

  test("should render loader placeholder", () => {
    const { getByText, getByTestId } = render(wrapperWithoutTagsAndTriggers);

    expect(getByText("Total Tags")).toBeInTheDocument();
    expect(getByText("Total Triggers")).toBeInTheDocument();

    const tagsCard = getByTestId("tags-card") as HTMLHeadingElement;
    const triggersCard = getByTestId("triggers-card") as HTMLHeadingElement;

    expect(tagsCard.textContent).toBe("...");
    expect(triggersCard.textContent).toBe("...");
  });
});
