import type { Contact as ContactInfo } from "@/content/types";

const stripScheme = (url: string) => url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
const link = "break-all text-cyan hover:underline";

export function Contact({ contact }: { contact: ContactInfo }) {
  return (
    <ul className="space-y-2">
      <li>
        <span className="inline-block w-20 text-pink">email</span>
        <span className="text-muted">→ </span>
        <a href={`mailto:${contact.email}`} className={link}>
          {contact.email}
        </a>
      </li>
      <li>
        <span className="inline-block w-20 text-pink">linkedin</span>
        <span className="text-muted">→ </span>
        <a href={contact.linkedin} className={link} target="_blank" rel="noopener noreferrer">
          {stripScheme(contact.linkedin)}
        </a>
      </li>
      <li>
        <span className="inline-block w-20 text-pink">github</span>
        <span className="text-muted">→ </span>
        <a href={contact.github} className={link} target="_blank" rel="noopener noreferrer">
          {stripScheme(contact.github)}
        </a>
      </li>
      <li>
        <span className="inline-block w-20 text-pink">cv</span>
        <span className="text-muted">→ </span>
        <a href={contact.cvPath} download={contact.cvFilename} className={link}>
          {contact.cvPath}
        </a>
      </li>
    </ul>
  );
}
