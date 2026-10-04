import type { Highlight } from "@/content/types";

export function Highlights({ items }: { items: Highlight[] }) {
  return (
    <ol aria-label="highlights" className="space-y-6">
      {items.map((item) => (
        <li key={item.title}>
          <p>
            <span className="text-orange">[{item.year}]</span>{" "}
            <span className="font-bold text-purple">{item.title}</span>{" "}
            <span className={item.kind === "work" ? "text-pink" : "text-orange"}>{item.kind}</span>
          </p>
          <dl className="mt-1 grid grid-cols-[max-content_1fr] gap-x-3 gap-y-0.5">
            <dt className="text-muted">problem</dt>
            <dd>{item.problem}</dd>
            <dt className="text-muted">built</dt>
            <dd>{item.built}</dd>
            <dt className="text-muted">{item.kind === "work" ? "stack" : "skills"}</dt>
            <dd className="text-green">{item.stack.join(" · ")}</dd>
          </dl>
        </li>
      ))}
    </ol>
  );
}
