"use client";

import { useMemo, useState } from "react";

export default function Page() {
  const [text, setText] = useState("??");

  const stats = useMemo(() => summarize(text), [text]);
  const unicodePoints = useMemo(() => toCodepoints(text), [text]);

  return (
    <section style={sectionStyle}>
      <div style={cardStyle}>
        <label htmlFor="input" style={labelStyle}>
          ???? ????
        </label>
        <textarea
          id="input"
          style={textareaStyle}
          rows={5}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="???? ???..."
        />

        <div style={gridStyle}>
          <div style={panelStyle}>
            <h3 style={panelTitleStyle}>????????</h3>
            <ul style={listStyle}>
              <li>??? ??????: {stats.totalChars}</li>
              <li>??? ???????: {stats.totalWords}</li>
              <li>???? ?????: {stats.arabicLetters}</li>
              <li>?????: {stats.digits}</li>
              <li>??????: {stats.spaces}</li>
            </ul>
          </div>

          <div style={panelStyle}>
            <h3 style={panelTitleStyle}>???? ???????</h3>
            <code style={codeBoxStyle}>{unicodePoints}</code>
          </div>
        </div>
      </div>
    </section>
  );
}

function summarize(input) {
  const totalChars = input.length;
  const totalWords = input.trim() ? input.trim().split(/\s+/).length : 0;
  const arabicLetters = [...input].filter((ch) => /[\u0600-\u06FF]/.test(ch)).length;
  const digits = [...input].filter((ch) => /[0-9?-?]/.test(ch)).length;
  const spaces = [...input].filter((ch) => ch === " ").length;
  return { totalChars, totalWords, arabicLetters, digits, spaces };
}

function toCodepoints(input) {
  if (!input) return "?";
  return [...input]
    .map((ch) => "U+" + ch.codePointAt(0).toString(16).toUpperCase().padStart(4, "0"))
    .join(" ");
}

const sectionStyle = {
  display: "flex",
  justifyContent: "center",
};

const cardStyle = {
  width: "100%",
  background: "rgba(2, 6, 23, 0.5)",
  border: "1px solid #1f2937",
  borderRadius: 16,
  padding: 20,
  boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
};

const labelStyle = {
  display: "block",
  marginBottom: 8,
  fontWeight: 600,
};

const textareaStyle = {
  width: "100%",
  borderRadius: 12,
  padding: 12,
  background: "#0b1325",
  color: "#eef3ff",
  border: "1px solid #23314a",
  outline: "none",
  resize: "vertical",
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: 16,
  marginTop: 16,
};

const panelStyle = {
  border: "1px solid #1f2937",
  borderRadius: 12,
  padding: 16,
  background: "rgba(2, 6, 23, 0.35)",
};

const panelTitleStyle = {
  marginTop: 0,
  marginBottom: 10,
  fontSize: 16,
  opacity: 0.9,
};

const listStyle = {
  lineHeight: 1.9,
  margin: 0,
  paddingLeft: 18,
};

const codeBoxStyle = {
  display: "block",
  whiteSpace: "pre-wrap",
  wordBreak: "break-word",
  background: "#0b1325",
  color: "#c7d2fe",
  border: "1px solid #23314a",
  borderRadius: 12,
  padding: 12,
  fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
  fontSize: 13,
};
