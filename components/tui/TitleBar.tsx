import type { SectionId } from "@/content/sections";

const DOTS = ["#ff5f56", "#ffbd2e", "#27c93f"];

export function TitleBar({ section }: { section: SectionId }) {
  return (
    <div className="flex items-center gap-2 bg-bg-deep px-4 py-2 text-muted">
      <span aria-hidden="true" className="flex shrink-0 gap-1.5">
        {DOTS.map((color) => (
          <span key={color} className="size-3 rounded-full" style={{ background: color }} />
        ))}
      </span>
      <span className="ml-2 min-w-0 truncate">hakim-takiyuddin@portfolio: ~/{section}</span>
      <span aria-hidden="true" className="cursor-blink inline-block h-4 w-2 shrink-0 bg-fg" />
    </div>
  );
}
