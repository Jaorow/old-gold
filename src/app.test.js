import React from "react";
import Enzyme, { shallow,mount } from "enzyme";
import App from "./App";
import Adapter from "enzyme-adapter-react-16";

import { render, screen } from '@testing-library/react';
import { unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

Enzyme.configure({ adapter: new Adapter()});

const mockHis = [{ price : 1 }];
const mockTod = [{ price : 2 }];
const mockNone = [{ price : 0 }];


describe("App",() => {
    test("renders", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.exists()).toBe(true);    
    });
    test("renders app", () => {
        const wrapper = shallow(<App getHistorical={mockHis} getToday={mockTod}/>);
        expect(wrapper).toMatchSnapshot();
    });

    test("tests date", () => {
        const wrapper = shallow(<App  getHistorical={mockNone} getToday={mockNone} />);

        wrapper.setProps({
        getHistorical : { mockHis },
        getToday : { mockTod }
        });
    });

    test("fake api call", () => {
        const wrapper = shallow(<App getHistorical={mockHis} getToday={mockTod}/>)
        expect(wrapper.find("displayResult"))    
    });
})

test('renders page', () => {
	render(<App />);
});

// tests setup
let container = null;
beforeEach(() => {
	container = document.createElement("header");
	document.body.appendChild(container);
});
afterEach(() => {
	unmountComponentAtNode(container);
	container.remove();
	container = null;
});


it("tests contents", () => {
	render(<App />);
	expect(screen.getByRole("heading")).toHaveTextContent(/Gold Prices/);
	expect(screen.getByRole("dateSelector")).toBeInTheDocument();
});


// tests search button
describe("tests input",()=>{
    test("checks loader",() =>{
        const wrapper = shallow(<App/>)
        const item = wrapper.find('#loader')
        expect(item.exists())
    })

    test("clicks button", () =>{
        const wrapper = shallow(<App />);
        wrapper.find('#search-button').simulate('click');
        expect(wrapper.find('#result'))
        expect(wrapper.find('#loader'))
        // we know the button clicks from the console log 
    })
    test("Tests date input", () =>{
        const wrapper = shallow(<App />);
        const date = wrapper.find('#date');
        date.simulate('change', { target: { value: '2020-10-11' } })
        wrapper.find('#search-button').simulate('click');
        expect(wrapper.find('#result'))
        // we know the button clicks from the console log 
    })
});