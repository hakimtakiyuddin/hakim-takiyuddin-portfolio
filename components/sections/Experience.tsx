import type { Company } from "@/content/types";
import { Tags } from "@/components/ui";

export function Experience({ companies }: { companies: Company[] }) {
  return (
    <div className="space-y-8">
      {companies.map((company) => (
        <article key={company.name}>
          <h3 className="font-bold text-cyan">{company.name}</h3>
          <p className="text-muted">
            {company.location} · {company.period}
          </p>
          <div className={company.roles.length > 1 ? "mt-3 space-y-5 border-l border-line pl-4" : "mt-3"}>
            {company.roles.map((role) => (
              <div key={`${role.title}-${role.team}`}>
                <h4 className="font-bold text-purple">{role.title}</h4>
                <p className="text-muted">{[role.team, role.period].filter(Boolean).join(" · ")}</p>
                <ul className="mt-2 space-y-1">
                  {role.bullets.map((bullet) => (
                    <li key={bullet} className="pl-4 -indent-4">
                      • {bullet}
                    </li>
                  ))}
                </ul>
                <Tags items={role.stack} />
              </div>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
