import { SECTION_IDS, type SectionId } from "@/content/sections";

// Plain hash links: the browser updates location.hash, and useHashSection
// picks it up through hashchange. This also works before hydration.
export function SectionList({ current }: { current: SectionId }) {
  return (
    <nav aria-label="Sections" className="w-[28%] shrink-0 rounded-sm border border-line py-2">
      <p className="px-3 pb-2 text-muted">{"// sections"}</p>
      <ol>
        {SECTION_IDS.map((id, index) => {
          const active = id === current;
          return (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={active ? "true" : undefined}
                className={`flex gap-3 border-l-2 px-3 py-1 ${
                  active ? "border-pink bg-sel text-fg" : "border-transparent text-fg/70 hover:bg-sel/50"
                }`}
              >
                <span className="text-muted">{index + 1}</span>
                {id}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
