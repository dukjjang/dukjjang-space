import { render, screen } from "@testing-library/react";
import { logRoles } from "@testing-library/dom";
import Resume from "../ui/Resume";
import "@testing-library/jest-dom";

describe("Home", () => {
  it("renders a heading", () => {
    const { container } = render(<Resume />);
    const title = screen.getByRole("heading", {
      name: "안녕하세요, 저는 진현덕 입니다 .",
    });
    expect(title).toBeInTheDocument();
  });
});
