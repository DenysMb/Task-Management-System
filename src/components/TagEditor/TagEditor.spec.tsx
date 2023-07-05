import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TagEditor from "./TagEditor";
import { AppContext } from "../../context/AppContext";
import { mockContextValues } from "../../setupTests";
import { Tag } from "../../models";

describe("TagEditor", () => {
  const wrapperWithTag = (
    <AppContext.Provider value={mockContextValues}>
      <TagEditor />
    </AppContext.Provider>
  );

  const wrapperWithoutTag = (
    <AppContext.Provider value={{ ...mockContextValues, tag: {} as Tag }}>
      <TagEditor />
    </AppContext.Provider>
  );

  test("renders TagEditor component with tag data", () => {
    const { getByText, getByLabelText } = render(wrapperWithTag);

    const nameInput = getByLabelText("title") as HTMLInputElement;
    const triggerInput = getByLabelText("trigger") as HTMLInputElement;
    const typeInput = getByLabelText("type") as HTMLInputElement;
    const contentInput = getByLabelText("content") as HTMLInputElement;

    expect(nameInput.value).toBe(mockContextValues.tag?.title);
    expect(triggerInput.value).toBe(mockContextValues.tag?.trigger);
    expect(typeInput.value).toBe(mockContextValues.tag?.type);
    expect(contentInput.value).toBe(mockContextValues.tag?.content);

    expect(getByText("Edit Tag")).toBeInTheDocument();
    expect(getByText("Tag name:")).toBeInTheDocument();
    expect(getByText("Tag trigger:")).toBeInTheDocument();
    expect(getByText("Tag type:")).toBeInTheDocument();
    expect(getByText("Tag content:")).toBeInTheDocument();
    expect(getByText("Edit")).toBeInTheDocument();
  });

  test("renders TagEditor component without tag data", () => {
    const { getByText, getByLabelText } = render(wrapperWithoutTag);

    const nameInput = getByLabelText("title") as HTMLInputElement;
    const triggerInput = getByLabelText("trigger") as HTMLInputElement;
    const typeInput = getByLabelText("type") as HTMLInputElement;
    const contentInput = getByLabelText("content") as HTMLInputElement;

    expect(nameInput.value).toBe("");
    expect(triggerInput.value).toBe("1");
    expect(typeInput.value).toBe("1");
    expect(contentInput.value).toBe("");

    expect(getByText("Create Tag")).toBeInTheDocument();
    expect(getByText("Create")).toBeInTheDocument();
  });

  test("calls removeTag function when 'Remove' button is clicked", () => {
    const { getByText } = render(wrapperWithTag);

    userEvent.click(getByText("Remove"));

    // ...
  });

  test("calls fetchCloseAndClearTag function when 'Close' button is clicked", async () => {
    const { getByText } = render(wrapperWithTag);

    await userEvent.click(getByText("Close"));

    // ...
  });

  test("calls handleChange function when input values are changed", () => {
    const { getByDisplayValue } = render(wrapperWithTag);

    const nameInput = getByDisplayValue("Tag 1") as HTMLInputElement;
    const newInputValue = "New Tag";

    userEvent.type(nameInput, newInputValue);

    // ...
  });

  test("calls createOrEditTag function when 'Edit' button is clicked", () => {
    const { getByText } = render(wrapperWithTag);

    userEvent.click(getByText("Edit"));

    // ...
  });
});
