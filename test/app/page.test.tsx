import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Resume from "../../ui/Resume";

describe("Home Page", () => {
  it("renders a heading", () => {
    render(<Resume />);
    const title = screen.getByRole("heading", {
      name: "안녕하세요, 저는 진현덕 입니다 .",
    });
    // @ts-expect-error - jest-dom types not fully compatible with strict mode
    expect(title).toBeInTheDocument();
  });
});
