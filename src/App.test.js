// src/App.test.js
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Job Listings heading", () => {
  render(<App />);
  const headingElement = screen.getByText(/Job Listings/i);
  expect(headingElement).toBeInTheDocument();
});

test("renders loading text when jobs are being fetched", () => {
  render(<App />);
  // Simulate loading state by setting jobs to an empty array
  expect(screen.getByText(/Loading jobs.../i)).toBeInTheDocument();
});
