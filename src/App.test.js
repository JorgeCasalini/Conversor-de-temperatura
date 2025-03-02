import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("Renderização do link para Learn React", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Conversor de temperatura/i);
  expect(linkElement).toBeInTheDocument();
});
