import React from "react";
import { render, screen } from "@testing-library/react";
import Resume from "../../ui/Resume";

describe("Home Page", () => {
  it("renders a heading", () => {
    render(<Resume />);
    const title = screen.getByRole("heading", {
      name: "안녕하세요, 저는 진현덕 입니다 .",
    });
    expect(title).toBeInTheDocument;
  });
});
