import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import { render, cleanup, fireEvent } from "@testing-library/react";
// import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Button>Button</Button>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders children correctly", () => {
  const { getByTestId } = render(<Button>text</Button>);
  expect(getByTestId("button")).toHaveTextContent("text");
});

it("button onClick prop works", () => {
  let count = 0;
  const onClick = () => {
    count = 1;
  };
  const { getByTestId } = render(<Button onClick={onClick}>text</Button>);
  const btn = getByTestId("button");
  fireEvent.click(btn);
  expect(count).toBe(1);
});
