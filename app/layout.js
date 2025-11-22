export const metadata = {
  title: "?? ? Minimal Interactive Playground",
  description: "A tiny Next.js app that plays with Arabic text.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body style={bodyStyle}>
        <div style={containerStyle}>
          <header style={headerStyle}>
            <span style={badgeStyle}>??</span>
            <h1 style={titleStyle}>????? ??? ???? ?????</h1>
            <p style={subtitleStyle}>
              ???? ?? ?? ????? ??????? ?????? ??????.
            </p>
          </header>
          <main>{children}</main>
          <footer style={footerStyle}>
            <span>???? ???????? Next.js</span>
          </footer>
        </div>
      </body>
    </html>
  );
}

const bodyStyle = {
  margin: 0,
  fontFamily:
    "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, 'Noto Sans Arabic', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif",
  background:
    "radial-gradient(1200px 600px at 10% 20%, #0ea5e922, transparent), radial-gradient(800px 400px at 90% 10%, #a855f722, transparent), linear-gradient(180deg, #0b1020, #0b1020)",
  color: "#eef3ff",
  minHeight: "100vh",
};

const containerStyle = {
  maxWidth: 900,
  margin: "0 auto",
  padding: "32px 20px 48px",
};

const headerStyle = {
  textAlign: "center",
  paddingTop: 24,
  paddingBottom: 24,
};

const badgeStyle = {
  display: "inline-block",
  border: "1px solid #334155",
  background: "rgba(2, 6, 23, 0.6)",
  padding: "6px 12px",
  borderRadius: 9999,
  fontSize: 14,
  letterSpacing: 1,
  marginBottom: 12,
};

const titleStyle = {
  margin: "8px 0 6px",
  fontSize: 36,
  lineHeight: 1.2,
};

const subtitleStyle = {
  margin: 0,
  opacity: 0.8,
};

const footerStyle = {
  marginTop: 48,
  borderTop: "1px solid #1f2937",
  paddingTop: 16,
  textAlign: "center",
  opacity: 0.7,
  fontSize: 14,
};
