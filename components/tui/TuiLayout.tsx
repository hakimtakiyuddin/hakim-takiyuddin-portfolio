"use client";

import { useEffect, useRef, useState } from "react";
import { SectionView } from "@/components/sections";
import { content } from "@/content/content";
import { DEFAULT_SECTION } from "@/content/sections";
import { nextSection, parseHash } from "@/lib/navigation";
import { useHashSection } from "@/lib/useHashSection";
import { HelpOverlay } from "./HelpOverlay";
import { SectionList } from "./SectionList";
import { StatusBar } from "./StatusBar";
import { TitleBar } from "./TitleBar";

function isTypingTarget(target: EventTarget | null) {
  return (
    target instanceof HTMLElement &&
    (target.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName))
  );
}

export function TuiLayout() {
  const [section, select] = useHashSection();
  const [helpOpen, setHelpOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const pane = useRef<HTMLDivElement>(null);
  const cvLink = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (root.current && getComputedStyle(root.current).display === "none") return;
      if (event.ctrlKey || event.metaKey || event.altKey || isTypingTarget(event.target)) return;

      if (event.key === "?" || (helpOpen && event.key === "Escape")) {
        event.preventDefault();
        setHelpOpen((open) => !open);
        return;
      }
      if (helpOpen) return;

      const isArrow = event.key === "ArrowUp" || event.key === "ArrowDown";
      if (isArrow && pane.current?.contains(event.target as Node)) return;

      if (event.key === "d") {
        cvLink.current?.click();
        return;
      }

      // Read the live hash: React state lags until hashchange re-renders, so fast repeats would be lost.
      const current = parseHash(window.location.hash) ?? DEFAULT_SECTION;
      const next = nextSection(current, event.key);
      if (next) {
        event.preventDefault();
        select(next);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [select, helpOpen]);

  useEffect(() => {
    if (pane.current) pane.current.scrollTop = 0;
  }, [section]);

  return (
    <div ref={root} className="hidden min-h-dvh items-center justify-center p-8 lg:flex">
      <div inert={helpOpen} className="flex h-[min(700px,calc(100dvh-4rem))] w-full max-w-[1100px] flex-col overflow-hidden rounded-lg border border-line bg-bg shadow-2xl">
        <TitleBar section={section} />
        <div className="flex min-h-0 flex-1 gap-2 p-2">
          <SectionList current={section} />
          <div
            ref={pane}
            role="region"
            aria-label={`${section} content`}
            tabIndex={0}
            className="min-w-0 flex-1 overflow-y-auto rounded-sm border border-line p-6"
          >
            <h2 className="mb-4 text-muted">{`// ${section}`}</h2>
            <SectionView id={section} />
          </div>
        </div>
        <StatusBar section={section} />
      </div>

      {helpOpen && <HelpOverlay onClose={() => setHelpOpen(false)} />}

      <a ref={cvLink} href={content.contact.cvPath} download={content.contact.cvFilename} hidden tabIndex={-1} aria-hidden="true">
        cv
      </a>
    </div>
  );
}
