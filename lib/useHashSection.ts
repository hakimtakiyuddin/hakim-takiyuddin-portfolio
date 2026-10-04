"use client";

import { useCallback, useSyncExternalStore } from "react";
import { DEFAULT_SECTION, type SectionId } from "@/content/sections";
import { parseHash } from "@/lib/navigation";

function subscribe(onChange: () => void) {
  window.addEventListener("hashchange", onChange);
  return () => window.removeEventListener("hashchange", onChange);
}

const getHash = () => window.location.hash;
const getServerHash = () => "";

export function useHashSection(): [SectionId, (id: SectionId) => void] {
  const hash = useSyncExternalStore(subscribe, getHash, getServerHash);
  const section = parseHash(hash) ?? DEFAULT_SECTION;

  const select = useCallback((id: SectionId) => {
    window.location.hash = id;
  }, []);

  return [section, select];
}
