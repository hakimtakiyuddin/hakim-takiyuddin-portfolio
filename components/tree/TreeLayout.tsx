"use client";

import { useEffect } from "react";
import { DEFAULT_SECTION, SECTION_IDS } from "@/content/sections";
import { parseHash } from "@/lib/navigation";
import { TreeNode } from "./TreeNode";

export function TreeLayout() {
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

  return (
    <div className="px-4 py-6 lg:hidden">
      <p>
        <span className="text-green">hakim-takiyuddin@portfolio</span>:<span className="text-cyan">~</span>
        <span className="text-pink">$</span> tree
      </p>
      <p className="text-muted">.</p>
      <ul>
        {SECTION_IDS.map((id, index) => (
          <TreeNode key={id} id={id} last={index === SECTION_IDS.length - 1} defaultOpen={id === DEFAULT_SECTION} />
        ))}
      </ul>
    </div>
  );
}
