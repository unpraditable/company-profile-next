import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer component", () => {
  test("renders copyright text", () => {
    render(<Footer />);
    const footerText = screen.getAllByText(
      /© 2025 Cifera Shop. All rights reserved./i
    );
    expect(footerText).toHaveLength(1);
  });
});
