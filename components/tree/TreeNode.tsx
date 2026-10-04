import type { MouseEvent } from "react";
import { SectionView } from "@/components/sections";
import type { SectionId } from "@/content/sections";

export function TreeNode({ id, last, defaultOpen }: { id: SectionId; last: boolean; defaultOpen: boolean }) {
  // Toggle here instead of natively: the hashchange below makes TreeLayout open this node, and the
  // browser's own toggle would then run after us and close it again.
  function onSummaryClick(event: MouseEvent<HTMLElement>) {
    const node = event.currentTarget.parentElement;
    if (!(node instanceof HTMLDetailsElement)) return;
    event.preventDefault();
    node.open = !node.open;
    if (node.open) {
      window.history.replaceState(null, "", `#${id}`);
      // replaceState fires no hashchange; notify useHashSection (TUI) and TreeLayout so both layouts stay in sync.
      window.dispatchEvent(new HashChangeEvent("hashchange"));
    }
  }

  return (
    <li className="relative pl-6">
      <span aria-hidden="true" className={`absolute top-0 left-0 w-px bg-line ${last ? "h-[1.375rem]" : "h-full"}`} />
      <span aria-hidden="true" className="absolute top-[1.375rem] left-0 h-px w-4 bg-line" />
      <details id={id} open={defaultOpen} className="group scroll-mt-14">
        <summary
          onClick={onSummaryClick}
          className="flex min-h-11 cursor-pointer list-none items-center gap-2 [&::-webkit-details-marker]:hidden"
        >
          <span aria-hidden="true" className="inline-block text-green transition-transform group-open:rotate-90 group-open:text-pink">
            ▸
          </span>
          <span>{id}</span>
        </summary>
        <div className="pt-2 pb-6">
          <SectionView id={id} />
        </div>
      </details>
    </li>
  );
}
