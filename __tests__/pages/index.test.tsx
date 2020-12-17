import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import Main from "../../pages/index";
import userEvent from "@testing-library/user-event";

afterEach(cleanup);

describe("Index test", () => {
  it("text content test", () => {
    const { getByTestId, debug } = render(<Main />);
    const result = getByTestId("result");
    expect(result).toHaveTextContent("hi");
    debug();
  });
});
