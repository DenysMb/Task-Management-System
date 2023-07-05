import { render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { AppContext, AppContextProps } from "../../context/AppContext";
import { Wrapper, mockContextValues } from "../../setupTests";
import { ROUTES } from "../../shared/routes";
import { AppRoutes } from "../../App";

describe("Home component", () => {
  const wrapper = (values: AppContextProps = mockContextValues): Wrapper => (
    <AppContext.Provider value={values}>
      <MemoryRouter initialEntries={[ROUTES.Home]}>
        <AppRoutes />
      </MemoryRouter>
    </AppContext.Provider>
  );

  const wrapperWithTagsAndTriggers = wrapper();

  const wrapperWithoutTagsAndTriggers = wrapper({
    tags: undefined,
    triggers: undefined,
  });

  test("should render total tags and triggers correctly", () => {
    const { getByText } = render(wrapperWithTagsAndTriggers);

    expect(getByText("Total Tags")).toBeInTheDocument();
    expect(getByText("Total Triggers")).toBeInTheDocument();

    expect(
      getByText(
        (mockContextValues.tags?.length ?? 0).toString()
      ) as HTMLHeadingElement
    ).toBeInTheDocument();
    expect(
      getByText(
        (mockContextValues.triggers?.length ?? 0).toString()
      ) as HTMLHeadingElement
    ).toBeInTheDocument();
  });

  test("should render loader placeholder", () => {
    const { getByText, getAllByText } = render(wrapperWithoutTagsAndTriggers);

    expect(getByText("Total Tags")).toBeInTheDocument();
    expect(getByText("Total Triggers")).toBeInTheDocument();

    expect(getAllByText("...")).toHaveLength(2);
  });

  test("should navigate to /tags when Total Tags card is clicked", () => {
    const navigate = jest.fn();

    const { getByText } = render(wrapperWithTagsAndTriggers);

    const totalTagsCard = getByText("Total Tags");

    userEvent.click(totalTagsCard);

    waitFor(() => {
      expect(navigate).toHaveBeenCalledWith(ROUTES.Tags);
    });
  });

  test("should navigate to /triggers when Total Triggers card is clicked", () => {
    const navigate = jest.fn();

    const { getByText } = render(wrapperWithTagsAndTriggers);

    const totalTagsCard = getByText("Total Triggers");

    userEvent.click(totalTagsCard);

    waitFor(() => {
      expect(navigate).toHaveBeenCalledWith(ROUTES.Triggers);
    });
  });
});
