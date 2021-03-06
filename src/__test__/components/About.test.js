import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import About from '../../components/About/About';

Enzyme.configure({ adapter: new Adapter() });
describe("Pruebas Unitarias con Jest", () => {
  test("Render de un componente", () => {
    const wrapper = shallow(<About />);
    expect(wrapper.exists()).toBe(true);
  });
  // test("Recibir propiedades", () => {
  //   const wrapper = mount(<About name="Jhurgen Maraza" />);
  //   expect(wrapper.props().name).toEqual('Jhurgen Maraza');
  // });
});