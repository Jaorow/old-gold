import React from "react";
import Enzyme, { shallow,mount } from "enzyme";
import App from "./App";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter()});

describe("App",() => {
    test("renders", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.exists()).toBe(true);    
    });

    test("renders app", () => {
        const wrapper = shallow(<App />);
        console.log(wrapper);
        // expect(wrapper.children(App).length).toEqual(1);
    });

//     test("date input", () => {
//     // tests date_input
//     const wrapper = shallow(<App />);
//     wrapper.find("date").simulate("change",{
//         target: {value: "1995-10-01" }
//     });

//     expect(wrapper.find("date").props.value).toEqual("1995-10-01");
// });


})