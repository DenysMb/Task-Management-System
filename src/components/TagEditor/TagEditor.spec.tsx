import { render, waitFor } from "@testing-library/react";
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

  test("should render TagEditor component with tag data", () => {
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

  test("should render TagEditor component without tag data", () => {
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

  test("should call removeTag function when 'Remove' button is clicked", () => {
    const removeTag = jest.fn();

    const { getByText } = render(wrapperWithTag);

    userEvent.click(getByText("Remove"));

    waitFor(() => {
      expect(removeTag).toHaveBeenCalledTimes(1);
    });
  });

  test("should call fetchCloseAndClearTag function when 'Close' button is clicked", async () => {
    const fetchCloseAndClearTag = jest.fn();

    const { getByText } = render(wrapperWithTag);

    userEvent.click(getByText("Close"));

    waitFor(() => {
      expect(fetchCloseAndClearTag).toHaveBeenCalledTimes(1);
    });
  });

  test("should call createOrEditTag function when 'Edit' button is clicked", () => {
    const createOrEditTag = jest.fn();

    const { getByText } = render(wrapperWithTag);

    userEvent.click(getByText("Edit"));

    waitFor(() => {
      expect(createOrEditTag).toHaveBeenCalledTimes(1);
    });
  });

  test("should call handleChange function when input values are changed", () => {
    const { getByLabelText } = render(wrapperWithTag);

    const nameInput = getByLabelText("title") as HTMLInputElement;
    const triggerInput = getByLabelText("trigger") as HTMLInputElement;
    const typeInput = getByLabelText("type") as HTMLInputElement;
    const contentInput = getByLabelText("content") as HTMLInputElement;

    const newNameValue = "New Tag";
    const newTriggerValue = "2";
    const newTypeValue = "2";
    const newContentValue = "New Content";

    userEvent.type(nameInput, newNameValue);
    userEvent.type(triggerInput, newTriggerValue);

    waitFor(() => {
      expect(nameInput.value).toBe(newNameValue);
      expect(triggerInput.value).toBe(newTriggerValue);
      expect(typeInput.value).toBe(newTypeValue);
      expect(contentInput.value).toBe(newContentValue);
    });
  });
});
