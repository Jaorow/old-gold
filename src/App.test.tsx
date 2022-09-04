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
        console.log(screen.getByRole("dateSelector"))
        expect(screen.getByRole("heading")).toHaveTextContent(/Gold Prices/);
        // expect(screen.getByRole("dateSelector")).toHaveDisplayValue("1995-10-11");
        // expect(screen.getByRole("button", { name: "Search" })).toBeDisabled();
        // expect(screen.getByRole("img")).toBeInTheDocument();

});
