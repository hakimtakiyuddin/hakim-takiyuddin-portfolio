import type { SkillGroup, SpokenLanguage } from "@/content/types";
import { Tags } from "@/components/ui";

export function Skills({ groups, languages }: { groups: SkillGroup[]; languages: SpokenLanguage[] }) {
  return (
    <div className="space-y-6">
      {groups.map((group) => (
        <div key={group.name}>
          <h3 className="font-bold text-purple">{group.name}</h3>
          <Tags items={group.items} label={group.name} />
        </div>
      ))}
      <div>
        <h3 className="font-bold text-purple">spoken</h3>
        <ul className="mt-1">
          {languages.map((language) => (
            <li key={language.name}>
              <span>{language.name}</span> <span className="text-muted">— {language.level}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
