import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Tags from "./Tags";
import { AppContext } from "../../context/AppContext";
import { mockContextValues } from "../../setupTests";

describe("Tags", () => {
  const wrapper = (
    <AppContext.Provider value={mockContextValues}>
      <Tags />
    </AppContext.Provider>
  );

  test("renders Tags component with tags", () => {
    const { getByText } = render(wrapper);

    expect(getByText("Tag 1")).toBeInTheDocument();
    expect(getByText("Tag 2")).toBeInTheDocument();
    expect(getByText("Trigger 1")).toBeInTheDocument();
    expect(getByText("Trigger 2")).toBeInTheDocument();
  });

  test("opens tag editor when 'New Tag' button is clicked", () => {
    const { getByTestId, getByText } = render(wrapper);

    userEvent.click(getByText("New Tag"));

    expect(getByTestId("tag-editor")).toBeInTheDocument();
  });

  // Handle empty tags value and add test here
});
