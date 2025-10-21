import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Logo from "../../ui/Logo";

describe("Logo Test", () => {
  it("test Logo render ", () => {
    render(<Logo />);
    const logo = screen.getByRole("heading", { name: "Dukjjang" });
    // @ts-expect-error - jest-dom types not fully compatible with strict mode
    expect(logo).toBeInTheDocument();
  });
});
