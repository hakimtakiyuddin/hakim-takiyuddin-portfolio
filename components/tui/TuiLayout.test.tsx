import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { TuiLayout } from "./TuiLayout";

const current = () => screen.getByRole("navigation", { name: "Sections" }).querySelector('[aria-current="true"]')?.textContent;
const press = (key: string, init: KeyboardEventInit = {}, target: Element = document.body) =>
  fireEvent.keyDown(target, { key, ...init });

afterEach(() => vi.restoreAllMocks());

describe("TuiLayout", () => {
  it("renders six section links with whoami selected by default", () => {
    render(<TuiLayout />);
    const nav = screen.getByRole("navigation", { name: "Sections" });
    expect(nav.querySelectorAll("a")).toHaveLength(6);
    expect(current()).toContain("whoami");
    expect(screen.getByText("hakim-takiyuddin@portfolio: ~/whoami")).toBeInTheDocument();
  });

  it("opens on the section in the initial hash", () => {
    window.history.replaceState(null, "", "#skills");
    render(<TuiLayout />);
    expect(current()).toContain("skills");
  });

  it("j moves to the next section and updates the hash", async () => {
    render(<TuiLayout />);
    press("j");
    await waitFor(() => expect(current()).toContain("experience"));
    expect(window.location.hash).toBe("#experience");
  });

  it("rapid key presses are not lost before re-render", async () => {
    render(<TuiLayout />);
    press("j");
    press("j");
    await waitFor(() => expect(current()).toContain("highlights"));
  });

  it("number keys jump to a section", async () => {
    render(<TuiLayout />);
    press("3");
    await waitFor(() => expect(current()).toContain("highlights"));
  });

  it("clicking a section link selects it", async () => {
    render(<TuiLayout />);
    fireEvent.click(screen.getByRole("link", { name: /education/ }));
    await waitFor(() => expect(current()).toContain("education"));
  });

  it("ignores keys with modifiers", async () => {
    render(<TuiLayout />);
    press("j", { metaKey: true });
    press("j", { ctrlKey: true });
    press("d", { metaKey: true });
    await new Promise((r) => setTimeout(r, 20));
    expect(current()).toContain("whoami");
  });

  it("ignores keys typed into an input", async () => {
    render(<TuiLayout />);
    const input = document.createElement("input");
    document.body.appendChild(input);
    press("j", {}, input);
    await new Promise((r) => setTimeout(r, 20));
    expect(current()).toContain("whoami");
    input.remove();
  });

  it("arrow keys inside the focused pane do not change section, but j still does", async () => {
    render(<TuiLayout />);
    const pane = screen.getByRole("region", { name: "whoami content" });
    pane.focus();
    press("ArrowDown", {}, pane);
    await new Promise((r) => setTimeout(r, 20));
    expect(current()).toContain("whoami");
    press("j", {}, pane);
    await waitFor(() => expect(current()).toContain("experience"));
  });

  it("? opens help, section keys are inert while open, Escape closes it", async () => {
    render(<TuiLayout />);
    press("?");
    expect(screen.getByRole("dialog", { name: "Keyboard shortcuts" })).toBeInTheDocument();
    press("j");
    await new Promise((r) => setTimeout(r, 20));
    expect(current()).toContain("whoami");
    press("Escape");
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("makes the terminal behind the help dialog inert", () => {
    render(<TuiLayout />);
    const nav = screen.getByRole("navigation", { name: "Sections" });
    expect(nav.closest("[inert]")).toBeNull();
    press("?");
    expect(nav.closest("[inert]")).not.toBeNull();
    expect(screen.getByRole("dialog").closest("[inert]")).toBeNull();
  });

  it("d triggers the CV download link", () => {
    const click = vi.spyOn(HTMLAnchorElement.prototype, "click").mockImplementation(() => {});
    render(<TuiLayout />);
    press("d");
    expect(click).toHaveBeenCalledTimes(1);
    expect(click.mock.contexts[0]).toHaveAttribute("href", "/cv.pdf");
  });

  it("status bar shows position", () => {
    render(<TuiLayout />);
    expect(screen.getByText("1/6")).toBeInTheDocument();
  });
});
