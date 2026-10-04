import { ImageResponse } from "next/og";
import { content } from "@/content/content";

export const dynamic = "force-static";
export const alt = "Hakim Takiyuddin — Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const DOTS = ["#ff5f56", "#ffbd2e", "#27c93f"];

export default function OpengraphImage() {
  const { name, title, company, focus } = content.profile;
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#13141c" }}>
        <div style={{ width: 1000, height: 480, display: "flex", flexDirection: "column", background: "#1a1b26", border: "2px solid #2a2f45", borderRadius: 16, overflow: "hidden" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "18px 24px", background: "#13141c", color: "#6272a4", fontSize: 24 }}>
            {DOTS.map((color) => (
              <div key={color} style={{ width: 16, height: 16, borderRadius: 8, background: color }} />
            ))}
            <div style={{ marginLeft: 12 }}>hakim-takiyuddin@portfolio: ~/whoami</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16, padding: "48px 56px" }}>
            <div style={{ color: "#ff79c6", fontSize: 28 }}>$ whoami</div>
            <div style={{ color: "#bd93f9", fontSize: 72, fontWeight: 700 }}>{name}</div>
            <div style={{ color: "#f8f8f2", fontSize: 34 }}>{`${title} @ ${company}`}</div>
            <div style={{ color: "#8be9fd", fontSize: 28 }}>{focus}</div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
