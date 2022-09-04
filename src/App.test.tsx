import React from 'react';

import { render, screen } from '@testing-library/react';
import { unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";



import App from './App';

test('renders page', () => {
	render(<App />);
});

// tests setup
let container : any = null;
beforeEach(() => {
	container = document.createElement("header");
	document.body.appendChild(container);
});
afterEach(() => {
	unmountComponentAtNode(container);
	container.remove();
	container = null;
});

// it("renders title and intro", () => {
//   act(() => {
//     render(<App />, container);
//   });
//   console.log(container.textContent)
//   expect(container.textContent).toContain("Gold Prices");

// });


it("tests contents", () => {
	render(<App />);
	expect(screen.getByRole("heading")).toHaveTextContent(/Gold Prices/);
	expect(screen.getByRole("dateSelector")).toBeInTheDocument();
});

const mockHis = [{ price : 1 }];
const mockTod = [{ price : 2 }];

it("tests rendering results",() => {
		const opp = render(<App />);

});