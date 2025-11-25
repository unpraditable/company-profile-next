import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header component", () => {
  test("renders the header element", () => {
    const { container } = render(<Header />);
    const header = container.querySelector("header");
    expect(header).toBeInTheDocument();
  });

  test("renders navigation with correct aria-label", () => {
    render(<Header />);
    const nav = screen.getByRole("navigation", { name: /global/i });
    expect(nav).toBeInTheDocument();
  });

  test("renders three navigation links", () => {
    render(<Header />);

    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(3);

    expect(screen.getByRole("link", { name: /about/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /product/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /location/i })).toBeInTheDocument();
  });
});
