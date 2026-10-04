import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { MissingPath } from "./MissingPath";

describe("MissingPath", () => {
  it("shows the current pathname", () => {
    window.history.replaceState(null, "", "/does-not-exist");
    const { container } = render(<MissingPath />);
    expect(container.textContent).toBe("/does-not-exist");
  });
});
