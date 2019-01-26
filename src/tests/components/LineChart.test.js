import React from "react";
import { render } from "enzyme";
import LineChart from "../../LineChart";

test("should render component wtih no props provided", () => {
  const wrapper = render(<LineChart chartData={[]} chartTitle={""} />);
  expect(wrapper).toMatchSnapshot();
});
