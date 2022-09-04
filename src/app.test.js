import React from "react";
import Enzyme, { shallow,mount } from "enzyme";
import App from "./App";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter()});

const mockHis = [{ price : 1 }];
const mockTod = [{ price : 2 }];


describe("App",() => {
    test("renders", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.exists()).toBe(true);    
    });

    test("renders app", () => {
        const wrapper = shallow(<App getHistorical={mockHis} getToday={mockTod}/>);

        expect(wrapper).toMatchSnapshot();
    });
    

})