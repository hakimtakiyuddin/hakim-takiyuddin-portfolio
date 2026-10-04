import { Fragment, useEffect, useRef } from "react";
import { SECTION_IDS } from "@/content/sections";

const SHORTCUTS: [string, string][] = [
  ["↑ / k", "previous section"],
  ["↓ / j", "next section"],
  [`1–${SECTION_IDS.length}`, "jump to section"],
  ["d", "download cv"],
  ["?", "toggle this help"],
  ["esc", "close"],
];

export function HelpOverlay({ onClose }: { onClose: () => void }) {
  const closeButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    closeButton.current?.focus();
    return () => previous?.focus();
  }, []);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Keyboard shortcuts"
      className="fixed inset-0 flex items-center justify-center bg-bg-deep/80"
      onClick={onClose}
    >
      <div className="rounded-lg border border-line bg-bg p-6" onClick={(e) => e.stopPropagation()}>
        <h2 className="mb-4 font-bold text-purple">keyboard shortcuts</h2>
        <dl className="grid grid-cols-[max-content_1fr] gap-x-6 gap-y-1">
          {SHORTCUTS.map(([key, action]) => (
            <Fragment key={key}>
              <dt className="text-pink">{key}</dt>
              <dd>{action}</dd>
            </Fragment>
          ))}
        </dl>
        <button ref={closeButton} type="button" onClick={onClose} className="mt-6 text-cyan hover:underline">
          [ esc ] close
        </button>
      </div>
    </div>
  );
}
