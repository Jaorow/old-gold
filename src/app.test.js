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

//get button working
describe("App after input",()=>{
    test("checks loader",() =>{
        const wrapper = shallow(<App/>)
        expect(wrapper.find('#loader'))
    })
    test("clicks button", () =>{
        const wrapper = shallow(<App />);
        wrapper.find('#search-button').simulate('click');
        expect(wrapper.find('#result'))
        expect(wrapper.find('loader'))
    })
});

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

it("renders title and intro", () => {
  act(() => {
    render(<App />, container);
  });
//   expect(container.textContent).toContain("Gold Prices");
});

it("tests contents", () => {
	render(<App />);
	expect(screen.getByRole("heading")).toHaveTextContent(/Gold Prices/);
	expect(screen.getByRole("dateSelector")).toBeInTheDocument();
});

it("tests rendering results",() => {
		const opp = render(<App />);
        
});