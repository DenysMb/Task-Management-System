import { render } from "@testing-library/react";
import Loader from "./Loader";

describe("Loader", () => {
  const wrapper = <Loader />;

  test("should render Loader component", () => {
    const { getByTestId } = render(wrapper);

    const loaderElement = getByTestId("loader");
    expect(loaderElement).toBeInTheDocument();
  });
});
