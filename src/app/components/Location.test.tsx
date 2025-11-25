import { render, screen } from "@testing-library/react";
import Location from "./Location";

describe("Location component", () => {
  test("renders the address block with expected text", () => {
    const { container } = render(<Location />);
    const addressEl = container.querySelector("address");
    expect(addressEl).toBeInTheDocument();

    expect(screen.getByText(/Jl\. Cendrawasih Raya/i)).toBeInTheDocument();
    expect(screen.getByText(/Kota Tangerang Selatan/i)).toBeInTheDocument();
  });

  test("renders the phone number", () => {
    render(<Location />);
    expect(screen.getByText(/\+628123123123/)).toBeInTheDocument();
  });

  test("renders location image with correct alt and src", () => {
    render(<Location />);

    const img = screen.getByAltText(
      /The Picture of Location/i
    ) as HTMLImageElement;
    expect(img).toBeInTheDocument();

    expect(img.src).toContain("location.png");
  });
});
