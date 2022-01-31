import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("name added once submit button is clicked", () => {
  render(<App />);

  const inputElement = screen.getByPlaceholderText(/Add todo here.../i);
  const submitButton = screen.getByRole("button", {
    name: /add/i,
  });
  fireEvent.change(inputElement, { target: { value: "Meditate" } });
  fireEvent.click(submitButton);

  const divElement = screen.getByText(/Meditate/i);
  expect(divElement).toBeInTheDocument();
});
