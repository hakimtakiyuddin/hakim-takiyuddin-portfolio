import { Fragment, type CSSProperties } from "react";
import type { Contact, Profile } from "@/content/types";

export function WhoAmI({ profile, contact }: { profile: Profile; contact: Contact }) {
  const rows: [string, string][] = [
    ["role", profile.title],
    ["company", `${profile.company} · ${profile.team}`],
    ["location", profile.location],
    ["focus", profile.focus],
  ];
  const action = "border border-line px-3 py-1 text-cyan hover:bg-sel";

  return (
    <div>
      <h1 className="text-[clamp(1.5rem,8vw,1.75rem)] leading-tight font-bold text-purple lg:text-[2rem]">
        <span className="typewriter" style={{ "--chars": profile.name.length } as CSSProperties}>
          {profile.name}
        </span>
      </h1>
      <dl className="mt-4 grid grid-cols-[max-content_1fr] gap-x-4 gap-y-1">
        {rows.map(([key, value]) => (
          <Fragment key={key}>
            <dt className="text-pink">{key}</dt>
            <dd>{value}</dd>
          </Fragment>
        ))}
      </dl>
      <p className="mt-4 max-w-prose">{profile.bio}</p>
      <div className="mt-6 flex flex-wrap gap-3">
        <a href={contact.cvPath} download={contact.cvFilename} className={action}>
          [ ↓ cv.pdf ]
        </a>
        <a href={`mailto:${contact.email}`} className={action}>
          [ ✉ email ]
        </a>
      </div>
    </div>
  );
}
