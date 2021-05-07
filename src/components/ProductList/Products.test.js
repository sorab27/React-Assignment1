import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Products from "./Products";
import Product from "../Product/Product";

configure({ adapter: new Adapter() });

describe("<Products />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Products />);
  });
  it("should render <Product /> when received items", () => {
    expect(wrapper.find(Product));
  });
});
