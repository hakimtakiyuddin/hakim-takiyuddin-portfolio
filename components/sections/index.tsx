import { content } from "@/content/content";
import type { SectionId } from "@/content/sections";
import { Contact } from "./Contact";
import { Education } from "./Education";
import { Experience } from "./Experience";
import { Highlights } from "./Highlights";
import { Skills } from "./Skills";
import { WhoAmI } from "./WhoAmI";

export function SectionView({ id }: { id: SectionId }) {
  switch (id) {
    case "whoami":
      return <WhoAmI profile={content.profile} contact={content.contact} />;
    case "experience":
      return <Experience companies={content.experience} />;
    case "highlights":
      return <Highlights items={content.highlights} />;
    case "skills":
      return <Skills groups={content.skills} languages={content.languages} />;
    case "education":
      return <Education schools={content.education} certifications={content.certifications} />;
    case "contact":
      return <Contact contact={content.contact} />;
  }
}
