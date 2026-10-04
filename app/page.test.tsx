import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "./page";

describe("Home", () => {
  it("renders both layouts inside one main landmark", () => {
    const { container } = render(<Home />);
    expect(container.querySelectorAll("main")).toHaveLength(1);
    expect(screen.getByRole("navigation", { name: "Sections" })).toBeInTheDocument();
    expect(container.querySelectorAll("details")).toHaveLength(6);
  });

  it("opening a mobile tree node also moves the desktop TUI to that section", () => {
    render(<Home />);
    const summary = document.querySelector("details#skills > summary") as HTMLElement;
    fireEvent.click(summary);
    expect(window.location.hash).toBe("#skills");
    const current = screen.getByRole("navigation", { name: "Sections" }).querySelector('[aria-current="true"]');
    expect(current?.textContent).toContain("skills");
  });

  it("selecting a section on desktop also opens it in the mobile tree", async () => {
    render(<Home />);
    fireEvent.keyDown(document.body, { key: "4" });
    await waitFor(() => expect((document.getElementById("skills") as HTMLDetailsElement).open).toBe(true));
  });
});
