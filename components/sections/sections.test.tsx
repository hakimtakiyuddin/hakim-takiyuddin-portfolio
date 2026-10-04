import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { content } from "@/content/content";
import { SectionView } from ".";

describe("SectionView", () => {
  it("whoami shows the name, profile rows and a CV download", () => {
    render(<SectionView id="whoami" />);
    expect(screen.getByRole("heading", { level: 1, name: content.profile.name })).toBeInTheDocument();
    expect(screen.getByText(content.profile.focus)).toBeInTheDocument();
    const cv = screen.getByRole("link", { name: /cv\.pdf/ });
    expect(cv).toHaveAttribute("href", "/cv.pdf");
    expect(cv).toHaveAttribute("download", "Hakim_Takiyuddin_CV.pdf");
  });

  it("experience lists every company and Setel's three teams", () => {
    render(<SectionView id="experience" />);
    for (const company of content.experience) {
      expect(screen.getByRole("heading", { level: 3, name: company.name })).toBeInTheDocument();
    }
    expect(screen.getByText(/Treasury Team/)).toBeInTheDocument();
    expect(screen.getByText(/Payment Engine Team/)).toBeInTheDocument();
    expect(screen.getByText(/Acquiring Team/)).toBeInTheDocument();
  });

  it("highlights renders all entries with their kind", () => {
    render(<SectionView id="highlights" />);
    const list = screen.getByRole("list", { name: "highlights" });
    expect(within(list).getAllByRole("listitem")).toHaveLength(content.highlights.length);
    expect(within(list).getAllByText("work")).toHaveLength(5);
    expect(within(list).getAllByText("activity")).toHaveLength(3);
  });

  it("skills lists groups and items without proficiency ratings", () => {
    const { container } = render(<SectionView id="skills" />);
    expect(screen.getByRole("heading", { name: "frameworks" })).toBeInTheDocument();
    expect(screen.getByText("NestJS")).toBeInTheDocument();
    expect(container.textContent).not.toMatch(/proficient|novice|█|░/);
    expect(screen.getByText("Malay")).toBeInTheDocument();
  });

  it("education includes the ISTQB certification", () => {
    render(<SectionView id="education" />);
    expect(screen.getByText(/ISTQB Certified Tester Foundation Level/)).toBeInTheDocument();
    expect(screen.getByText(/MY0061-21/)).toBeInTheDocument();
  });

  it("contact links are safe, wrap on small screens, and contain no phone", () => {
    const { container } = render(<SectionView id="contact" />);
    const email = screen.getByRole("link", { name: content.contact.email });
    expect(email).toHaveAttribute("href", `mailto:${content.contact.email}`);
    expect(email).toHaveClass("break-all");

    const linkedin = screen.getByRole("link", { name: "linkedin.com/in/hakimtakiyuddin" });
    expect(linkedin).toHaveAttribute("target", "_blank");
    expect(linkedin).toHaveAttribute("rel", "noopener noreferrer");
    expect(linkedin).toHaveClass("break-all");

    expect(container.textContent).not.toMatch(/2335146/);
  });
});
