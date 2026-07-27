module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",
        muted: "var(--color-muted)",
        "muted-foreground": "var(--color-muted-foreground)",
        card: "var(--color-card)",
        border: "var(--color-border)",
        "border-strong": "var(--color-border-strong)",
        ring: "var(--color-ring)",
        accent: "var(--color-accent)",
        paper: "var(--archive-paper)",
        "paper-deep": "var(--archive-paper-deep)",
        mount: "var(--archive-mount)",
        rule: "var(--archive-rule)"
      },
      fontFamily: {
        sans: ['"Space Grotesk"', "ui-sans-serif", "system-ui", "sans-serif"],
        display: ['"Space Grotesk"', "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "SFMono-Regular", "Menlo", "monospace"]
      }
    }
  },
  plugins: []
};
