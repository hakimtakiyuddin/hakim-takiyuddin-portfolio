import type { Certification, Education as EducationEntry } from "@/content/types";

export function Education({ schools, certifications }: { schools: EducationEntry[]; certifications: Certification[] }) {
  return (
    <div className="space-y-8">
      {schools.map((school) => (
        <article key={school.school}>
          <h3 className="font-bold text-cyan">{school.school}</h3>
          <p className="text-muted">
            {school.location} · {school.period}
          </p>
          <p className="mt-1 font-bold text-purple">{school.degree}</p>
          <dl className="mt-2 grid grid-cols-[max-content_1fr] gap-x-3 gap-y-1">
            <dt className="text-pink">cgpa</dt>
            <dd>{school.cgpa}</dd>
            <dt className="text-pink">subjects</dt>
            <dd>{school.subjects.join(", ")}</dd>
            <dt className="text-pink">awards</dt>
            <dd>{school.awards.join(", ")}</dd>
          </dl>
        </article>
      ))}
      <div>
        <h3 className="font-bold text-purple">certifications/</h3>
        <ul className="mt-2 border-l border-line pl-4">
          {certifications.map((cert) => (
            <li key={cert.credentialId}>
              {cert.name}{" "}
              <span className="text-muted">
                — {cert.issuer} · {cert.issued} · {cert.credentialId}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
