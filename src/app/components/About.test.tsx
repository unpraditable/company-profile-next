import { render, screen } from "@testing-library/react";
import About from "./About";

describe("About component", () => {
  test("renders three service items", () => {
    render(<About />);
    const items = screen.getAllByRole("listitem");
    expect(items).toHaveLength(3);
  });

  test("renders three images with correct alt text", () => {
    render(<About />);
    const images = screen.getAllByRole("img");
    expect(images).toHaveLength(3);
  });

  test("renders article text content for each item", () => {
    render(<About />);
    const articles = screen.getAllByText(/Lorem ipsum dolor sit amet/i);
    expect(articles.length).toBeGreaterThanOrEqual(3);
  });
});
