import { render } from "@testing-library/react";
import Triggers from "./Triggers";
import { AppContext, AppContextProps } from "../../context/AppContext";
import { Wrapper, mockContextValues } from "../../setupTests";

describe("Triggers", () => {
  const wrapper = (values: AppContextProps = {}): Wrapper => (
    <AppContext.Provider value={{ ...mockContextValues, ...values }}>
      <Triggers />
    </AppContext.Provider>
  );

  const wrapperWithTriggers = wrapper();

  const wrapperWithoutTriggers = wrapper({ triggers: [] });

  const wrapperWithLoader = wrapper({ triggers: undefined });

  test("should render Triggers component with trigger data", () => {
    const { getByText } = render(wrapperWithTriggers);

    expect(getByText("Triggers")).toBeInTheDocument();

    expect(getByText("Trigger 1")).toBeInTheDocument();
    expect(getByText("Trigger 2")).toBeInTheDocument();
  });

  test("should render Triggers component without trigger data", () => {
    const { getByText } = render(wrapperWithoutTriggers);

    expect(getByText("No Triggers")).toBeInTheDocument();
  });

  test("should render Triggers component with Loader", () => {
    const { getByTestId } = render(wrapperWithLoader);

    expect(getByTestId("loader")).toBeInTheDocument();
  });
});
