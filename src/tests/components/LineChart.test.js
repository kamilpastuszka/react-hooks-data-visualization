import React from "react";
import { shallow } from "enzyme";
import LineChart from "../../LineChart";
import { data } from "../fixtures/testData";

test("should render LineChart component with data and title props", () => {
  const wrapper = shallow(
    <LineChart chartData={data} chartTitle={"Average temperature for London"} />
  );
  expect(wrapper).toMatchSnapshot();
});
