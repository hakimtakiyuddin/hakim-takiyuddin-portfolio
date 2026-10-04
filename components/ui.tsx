export function Tags({ items, label = "stack" }: { items: string[]; label?: string }) {
  return (
    <ul aria-label={label} className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-green">
      {items.map((item) => (
        <li key={item} className="after:ml-3 after:text-muted after:content-['·'] last:after:content-none">
          {item}
        </li>
      ))}
    </ul>
  );
}
