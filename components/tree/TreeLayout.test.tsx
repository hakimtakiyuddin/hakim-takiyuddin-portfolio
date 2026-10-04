import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { TreeLayout } from "./TreeLayout";

const details = (id: string) => document.getElementById(id) as HTMLDetailsElement;
const summary = (id: string) => details(id).querySelector("summary") as HTMLElement;

describe("TreeLayout", () => {
  it("renders six nodes with only whoami open", () => {
    render(<TreeLayout />);
    expect(screen.getByText("tree", { exact: false })).toBeInTheDocument();
    const nodes = document.querySelectorAll("details");
    expect(nodes).toHaveLength(6);
    expect(details("whoami").open).toBe(true);
    for (const id of ["experience", "highlights", "skills", "education", "contact"]) {
      expect(details(id).open).toBe(false);
    }
  });

  it("opens the node named in the hash on mount, and keeps the hash", () => {
    window.history.replaceState(null, "", "#skills");
    render(<TreeLayout />);
    expect(details("skills").open).toBe(true);
    expect(window.location.hash).toBe("#skills");
  });

  it("ignores an unknown hash", () => {
    window.history.replaceState(null, "", "#nope");
    render(<TreeLayout />);
    expect(details("whoami").open).toBe(true);
    expect(document.querySelectorAll("details[open]")).toHaveLength(1);
  });

  it("opening a node writes its id to the hash", () => {
    render(<TreeLayout />);
    fireEvent.click(summary("experience"));
    expect(window.location.hash).toBe("#experience");
  });

  it("closing an open node leaves the hash alone", () => {
    window.history.replaceState(null, "", "#contact");
    render(<TreeLayout />);
    fireEvent.click(summary("whoami"));
    expect(window.location.hash).toBe("#contact");
  });

  it("opens the node when the hash changes after mount (desktop selection)", () => {
    render(<TreeLayout />);
    window.history.replaceState(null, "", "#skills");
    fireEvent(window, new HashChangeEvent("hashchange"));
    expect(details("skills").open).toBe(true);
  });

  it("tapping a closed node leaves it open (hash sync doesn't fight the toggle)", () => {
    render(<TreeLayout />);
    fireEvent.click(summary("experience"));
    expect(details("experience").open).toBe(true);
    expect(window.location.hash).toBe("#experience");
  });

  it("tapping an open node closes it", () => {
    render(<TreeLayout />);
    fireEvent.click(summary("whoami"));
    expect(details("whoami").open).toBe(false);
  });

  it("summary rows meet the 44px tap target class", () => {
    render(<TreeLayout />);
    expect(summary("skills")).toHaveClass("min-h-11");
  });
});
