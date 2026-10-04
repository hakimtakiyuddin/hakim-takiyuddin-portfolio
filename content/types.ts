export interface Profile {
  name: string;
  title: string;
  company: string;
  team: string;
  location: string;
  focus: string;
  bio: string;
}

export interface Role {
  title: string;
  team: string;
  /** Omitted when the CV only gives a period for the whole company. */
  period?: string;
  bullets: string[];
  stack: string[];
}

export interface Company {
  name: string;
  location: string;
  period: string;
  roles: Role[];
}

export type HighlightKind = "work" | "activity";

export interface Highlight {
  year: string;
  title: string;
  kind: HighlightKind;
  problem: string;
  built: string;
  /** Tech stack for work; skills for activities. */
  stack: string[];
}

export interface SkillGroup {
  name: string;
  items: string[];
}

export interface SpokenLanguage {
  name: string;
  level: string;
}

export interface Education {
  school: string;
  location: string;
  degree: string;
  period: string;
  cgpa: string;
  subjects: string[];
  awards: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  issued: string;
  credentialId: string;
}

export interface Contact {
  email: string;
  linkedin: string;
  github: string;
  cvPath: string;
  cvFilename: string;
}

export interface Content {
  profile: Profile;
  experience: Company[];
  highlights: Highlight[];
  skills: SkillGroup[];
  languages: SpokenLanguage[];
  education: Education[];
  certifications: Certification[];
  contact: Contact;
}
