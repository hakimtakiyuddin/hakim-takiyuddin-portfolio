"use client";

import { useEffect } from "react";
import { DEFAULT_SECTION, SECTION_IDS } from "@/content/sections";
import { TitleBar } from "@/components/tui/TitleBar";
import { parseHash } from "@/lib/navigation";
import { useHashSection } from "@/lib/useHashSection";
import { TreeNode } from "./TreeNode";

export function TreeLayout() {
  const [section] = useHashSection();

  useEffect(() => {
    function openFromHash(scroll: boolean) {
      const id = parseHash(window.location.hash);
      const node = id && document.getElementById(id);
      if (!(node instanceof HTMLDetailsElement)) return;
      node.open = true;
      // Scroll only for the initial deep link; later changes come from the user, who's already looking at it.
      if (scroll) node.scrollIntoView?.({ block: "start" });
    }

    openFromHash(true);
    const onHashChange = () => openFromHash(false);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  // Sticky bars + normal page scroll: looks like a terminal window without a nested scroll area on phones.
  return (
    <div className="flex min-h-dvh flex-col bg-bg lg:hidden">
      <div className="sticky top-0 z-10 border-b border-line bg-bg-deep pt-[env(safe-area-inset-top)]">
        <TitleBar />
      </div>
      <div className="flex-1 px-4 py-6">
        <p>
          <span className="text-green">hakim-takiyuddin@portfolio</span>:
          <span className="text-cyan">~</span>
          <span className="text-pink">$</span> tree
        </p>
        <p className="text-muted">.</p>
        <ul>
          {SECTION_IDS.map((id, index) => (
            <TreeNode
              key={id}
              id={id}
              last={index === SECTION_IDS.length - 1}
              defaultOpen={id === DEFAULT_SECTION}
            />
          ))}
        </ul>
      </div>
      <div className="sticky bottom-0 flex justify-between border-t border-line bg-bg-deep px-4 py-1.5 pb-[calc(0.375rem+env(safe-area-inset-bottom))] text-muted">
        <span>tap ▸ to open</span>
        <span className="text-pink">{section}</span>
      </div>
    </div>
  );
}
