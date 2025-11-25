import { render, screen } from "@testing-library/react";
import HeroSection from "./HeroSection";

describe("HeroSection component", () => {
  test("renders heading with correct text and role", () => {
    render(<HeroSection />);
    const heading = screen.getByRole("heading", {
      name: /Welcome to Cifera Shop!/i,
    });
    expect(heading).toBeInTheDocument();
    expect(heading.tagName.toLowerCase()).toBe("h1");
  });

  test("renders paragraph with welcome text", () => {
    render(<HeroSection />);
    expect(
      screen.getByText(/Selamat datang di toko serba ada/i)
    ).toBeInTheDocument();
  });
});
