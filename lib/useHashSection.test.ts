import { act, renderHook, waitFor } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { useHashSection } from "./useHashSection";

describe("useHashSection", () => {
  it("defaults to whoami with no hash", () => {
    const { result } = renderHook(() => useHashSection());
    expect(result.current[0]).toBe("whoami");
  });

  it("reads the initial hash", () => {
    window.history.replaceState(null, "", "#skills");
    const { result } = renderHook(() => useHashSection());
    expect(result.current[0]).toBe("skills");
  });

  it("falls back to whoami for an unknown hash", () => {
    window.history.replaceState(null, "", "#nope");
    const { result } = renderHook(() => useHashSection());
    expect(result.current[0]).toBe("whoami");
  });

  it("select() updates the hash and the section", async () => {
    const { result } = renderHook(() => useHashSection());
    act(() => result.current[1]("education"));
    await waitFor(() => expect(result.current[0]).toBe("education"));
    expect(window.location.hash).toBe("#education");
  });

  it("follows external hashchange events (back/forward)", async () => {
    const { result } = renderHook(() => useHashSection());
    act(() => {
      window.history.replaceState(null, "", "#contact");
      window.dispatchEvent(new HashChangeEvent("hashchange"));
    });
    await waitFor(() => expect(result.current[0]).toBe("contact"));
  });
});
