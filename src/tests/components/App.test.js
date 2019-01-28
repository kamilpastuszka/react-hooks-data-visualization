import React from "react";
import { render } from "enzyme";
import App from "../../App";

test("should render App component correctly", () => {
  const wrapper = render(<App />);
  expect(wrapper).toMatchSnapshot();
});
