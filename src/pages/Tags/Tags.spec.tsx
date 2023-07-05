import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Tags from "./Tags";
import { AppContext, AppContextProps } from "../../context/AppContext";
import { Wrapper, mockContextValues } from "../../setupTests";

describe("Tags", () => {
  const wrapper = (values: AppContextProps = {}): Wrapper => (
    <AppContext.Provider value={{ ...mockContextValues, ...values }}>
      <Tags />
    </AppContext.Provider>
  );

  const wrapperWithTags = wrapper();

  const wrapperWithoutTags = wrapper({ tags: [] });

  test("should render Tags component with tags", () => {
    const { getByText } = render(wrapperWithTags);

    expect(getByText("Tags")).toBeInTheDocument();

    expect(getByText("Tag 1")).toBeInTheDocument();
    expect(getByText("Tag 2")).toBeInTheDocument();
    expect(getByText("Trigger 1")).toBeInTheDocument();
    expect(getByText("Trigger 2")).toBeInTheDocument();
  });

  test("should render Tags component without tags", () => {
    const { getByText } = render(wrapperWithoutTags);

    expect(getByText("No Tags")).toBeInTheDocument();
  });

  test("should open tag editor when 'New Tag' button is clicked", () => {
    const { getByTestId, getByText } = render(wrapperWithTags);

    userEvent.click(getByText("New Tag"));

    expect(getByTestId("tag-editor")).toBeInTheDocument();
  });
});
