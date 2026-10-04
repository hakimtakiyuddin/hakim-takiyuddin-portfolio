import type { ReactNode } from "react";
import { SECTION_IDS, type SectionId } from "@/content/sections";

const Key = ({ children }: { children: ReactNode }) => <kbd className="text-pink">{children}</kbd>;

export function StatusBar({ section }: { section: SectionId }) {
  const position = SECTION_IDS.indexOf(section) + 1;
  return (
    <div className="flex justify-between bg-bg-deep px-4 py-1.5 text-muted">
      <span>
        <Key>↑↓</Key> nav · <Key>1-{SECTION_IDS.length}</Key> jump · <Key>d</Key> cv · <Key>?</Key> help
      </span>
      <span>
        <span>
          {position}/{SECTION_IDS.length}
        </span>{" "}
        <span className="text-pink">{section}</span>
      </span>
    </div>
  );
}
