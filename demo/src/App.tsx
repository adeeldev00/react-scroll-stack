import { ScrollStack } from "react-scroll-stack";

const cards = [
  {
    title: "Full Stack Development",
    subtitle: "React · Node.js · TypeScript",
    description:
      "Building end-to-end web applications with modern tools and best practices.",
    color: "#6366f1",
  },
  {
    title: "AI Implementation",
    subtitle: "LLMs · RAG · Agents",
    description:
      "Integrating large language models and intelligent automation into real products.",
    color: "#ec4899",
  },
  {
    title: "Cloud Engineering",
    subtitle: "AWS · Docker · CI/CD",
    description:
      "Scalable infrastructure, containerization, and automated deployment pipelines.",
    color: "#14b8a6",
  },
  {
    title: "UI / UX Design",
    subtitle: "Figma · Motion · Systems",
    description:
      "Crafting clean interfaces with attention to detail and interaction design.",
    color: "#f59e0b",
  },
];

function Card({
  title,
  subtitle,
  description,
  color,
}: {
  title: string;
  subtitle: string;
  description: string;
  color: string;
}) {
  return (
    <div
      style={{
        maxWidth: 800,
        margin: "0 auto",
        padding: "60px 40px",
        display: "flex",
        flexDirection: "column",
        gap: 16,
      }}
    >
      <div
        style={{
          width: 48,
          height: 4,
          backgroundColor: color,
          borderRadius: 2,
        }}
      />
      <h2
        style={{
          margin: 0,
          fontSize: 36,
          fontWeight: 700,
          color: "#ffffff",
          letterSpacing: "-0.5px",
        }}
      >
        {title}
      </h2>
      <p style={{ margin: 0, fontSize: 14, color: color, fontWeight: 600 }}>
        {subtitle}
      </p>
      <p
        style={{
          margin: 0,
          fontSize: 18,
          color: "#9ca3af",
          lineHeight: 1.6,
          maxWidth: 480,
        }}
      >
        {description}
      </p>
    </div>
  );
}

export default function App() {
  return (
    <div
      style={{
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        backgroundColor: "#000210",
        minHeight: "100vh",
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: "80px 40px",
          maxWidth: 800,
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h1 style={{ color: "#fff", fontSize: 48, margin: "0 0 12px" }}>
          react-scroll-stack
        </h1>
        <p style={{ color: "#6b7280", fontSize: 18, margin: 0 }}>
          Scroll down to see the animation ↓
        </p>
      </div>

      {/* ScrollStack Demo */}
      <ScrollStack
        items={cards.map((card) => ({
          children: <Card {...card} />,
        }))}
        stickyTop={0}
        cardBackground="#000210"
        dividerColor="#1f2937"
        cardShadow="0px -8px 40px 0px rgba(0,0,0,0.8)"
        cardPaddingY={20}
      />

      {/* Footer */}
      <div
        style={{
          padding: "80px 40px",
          textAlign: "center",
          color: "#374151",
          fontSize: 14,
        }}
      >
        End of stack
      </div>
    </div>
  );
}
