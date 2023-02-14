import React from "react";
import { render, screen } from "@testing-library/react";
import Logo from "../../ui/Logo";

describe("Logo Test", () => {
  it("test Logo render ", () => {
    render(<Logo />);
    const logo = screen.getByRole("heading", { name: "Dukjjang" });
    expect(logo).toBeInTheDocument;
  });
});
