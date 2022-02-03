import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("Add todo item to list", () => {
  render(<App />);

  const inputElement = screen.getByPlaceholderText(/Add todo here.../i);
  const buttonElement = screen.getByRole("button", {
    name: /add/i,
  });
  fireEvent.change(inputElement, { target: { value: "Meditate" } });
  fireEvent.click(buttonElement);

  const listItemElement = screen.getByText(/Meditate/i);

  expect(listItemElement).toBeInTheDocument();
});
