import { render } from "@testing-library/react";
import Triggers from "./Triggers";
import { AppContext } from "../../context/AppContext";
import { mockContextValues } from "../../setupTests";

describe("Triggers", () => {
  const wrapper = (
    <AppContext.Provider value={mockContextValues}>
      <Triggers />
    </AppContext.Provider>
  );

  test("renders Triggers component with trigger data", () => {
    const { getByText } = render(wrapper);

    expect(getByText("Triggers")).toBeInTheDocument();

    expect(getByText("Trigger 1")).toBeInTheDocument();
    expect(getByText("Trigger 2")).toBeInTheDocument();
  });

  // Handle empty triggers value and add test here
});
