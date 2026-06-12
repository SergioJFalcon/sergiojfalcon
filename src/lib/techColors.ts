export const techGroups = [
  { label: "JavaScript / TypeScript", color: "#dcdcaa", techs: ["Angular", "React", "React Native", "Svelte", "SvelteKit", "Vue", "JavaScript", "TypeScript"] },
  { label: "Rust",                    color: "#d4976a", techs: ["Actix", "Axum", "Rust"] },
  { label: "Python",                  color: "#4fc1ff", techs: ["Django", "FastAPI", "Python"] },
  { label: "C# / .NET",              color: "#c586c0", techs: [".NET Core", "Quartz.NET", "C#"] },
  { label: "Database",               color: "#4ec9b0", techs: ["MySQL", "PostgreSQL", "Redis", "SQLite"] },
  { label: "Web",                    color: "#e8945a", techs: ["CSS", "HTML5"] },
  { label: "Infrastructure",         color: "#85a5c8", techs: ["Azure", "Docker"] },
  { label: "UI Libraries",           color: "#9cdcfe", techs: ["Kendo UI", "SyncFusion", "Material UI"] },
  { label: "Other",                  color: "#dcdcdc", techs: ["Git", "GitHub Actions", "YOLOv8"] },
];

const techColorMap = new Map<string, string>(
  techGroups.flatMap(({ color, techs }) => techs.map((t) => [t, color]))
);

export function techColor(tech: string): string {
  return techColorMap.get(tech) ?? '#858585';
}
