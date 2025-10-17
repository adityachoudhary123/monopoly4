import { useState } from "react";

/** Colorful, large inline SVGs — no external assets/APIs **/

const SvgCodeGenerations = () => (
  <svg viewBox="0 0 420 260" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs>
      <linearGradient id="grad-code" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#7C3AED"/>
        <stop offset="0.5" stopColor="#06B6D4"/>
        <stop offset="1" stopColor="#22C55E"/>
      </linearGradient>
      <filter id="card" x="-10%" y="-10%" width="120%" height="140%">
        <feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="rgba(0,0,0,.25)" />
      </filter>
    </defs>

    <rect x="14" y="14" rx="22" width="392" height="232" fill="url(#grad-code)" opacity=".1" />
    <rect x="24" y="26" rx="18" width="372" height="210" fill="#fff" filter="url(#card)" />

    {/* Laptop screen */}
    <rect x="54" y="56" rx="12" width="312" height="150" fill="#0F172A" />
    <circle cx="74" cy="76" r="5" fill="#EF4444" />
    <circle cx="92" cy="76" r="5" fill="#F59E0B" />
    <circle cx="110" cy="76" r="5" fill="#10B981" />

    {/* Code lines */}
    <rect x="72" y="98" width="120" height="10" rx="5" fill="#60A5FA"/>
    <rect x="200" y="98" width="130" height="10" rx="5" fill="#A78BFA"/>
    <rect x="72" y="120" width="170" height="10" rx="5" fill="#34D399"/>
    <rect x="246" y="120" width="84"  height="10" rx="5" fill="#F472B6"/>
    <rect x="72" y="142" width="96"  height="10" rx="5" fill="#F59E0B"/>
    <rect x="176" y="142" width="154" height="10" rx="5" fill="#22D3EE"/>

    {/* Wand sparkle */}
    <path d="M320 170l22 22M322 186l18-18" stroke="#FDE68A" strokeWidth="6" strokeLinecap="round"/>
    <circle cx="342" cy="167" r="8" fill="#FDE68A"/>
  </svg>
);

const SvgChatbots = () => (
  <svg viewBox="0 0 420 260" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs>
      <linearGradient id="grad-chat" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#06B6D4"/>
        <stop offset="1" stopColor="#3B82F6"/>
      </linearGradient>
    </defs>

    <rect x="14" y="14" rx="22" width="392" height="232" fill="url(#grad-chat)" opacity=".1" />
    <rect x="24" y="26" rx="18" width="372" height="210" fill="#fff" />

    {/* Bubbles */}
    <rect x="56" y="64" rx="14" width="190" height="64" fill="#DBEAFE"/>
    <circle cx="72" cy="96" r="4" fill="#3B82F6"/>
    <circle cx="84" cy="96" r="4" fill="#3B82F6"/>
    <circle cx="96" cy="96" r="4" fill="#3B82F6"/>

    <rect x="172" y="138" rx="14" width="192" height="64" fill="#E0F2FE"/>
    <rect x="188" y="160" width="120" height="12" rx="6" fill="#0EA5E9"/>
    <rect x="188" y="178" width="160" height="10" rx="5" fill="#38BDF8"/>

    {/* Wave */}
    <path d="M60 210c20-14 40-14 60 0s40 14 60 0s40-14 60 0" fill="none" stroke="#60A5FA" strokeWidth="3" />
  </svg>
);

const SvgAgenticAI = () => (
  <svg viewBox="0 0 420 260" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs>
      <linearGradient id="grad-agent" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#F59E0B"/>
        <stop offset="1" stopColor="#EF4444"/>
      </linearGradient>
    </defs>
    <rect x="14" y="14" rx="22" width="392" height="232" fill="url(#grad-agent)" opacity=".1" />
    <rect x="24" y="26" rx="18" width="372" height="210" fill="#fff" />

    {/* Nodes */}
    <circle cx="110" cy="82" r="16" fill="#F59E0B"/>
    <circle cx="202" cy="62" r="16" fill="#F97316"/>
    <circle cx="304" cy="94" r="16" fill="#EF4444"/>
    <circle cx="150" cy="174" r="16" fill="#84CC16"/>
    <circle cx="270" cy="176" r="16" fill="#10B981"/>

    {/* Edges */}
    <path d="M126 80L186 64" stroke="#FB923C" strokeWidth="4"/>
    <path d="M218 66L288 90" stroke="#F87171" strokeWidth="4"/>
    <path d="M118 98L142 158" stroke="#F59E0B" strokeWidth="4"/>
    <path d="M214 78L262 160" stroke="#10B981" strokeWidth="4"/>
    <path d="M286 110L264 160" stroke="#34D399" strokeWidth="4"/>

    {/* Gear */}
    <circle cx="202" cy="120" r="18" stroke="#111827" strokeWidth="4" fill="none"/>
    <path d="M202 104v8M202 128v8M186 120h8M210 120h8M193 111l6 6M211 129l6 6M193 129l6-6M211 111l6-6" stroke="#111827" strokeWidth="3" />
  </svg>
);

const SvgDocumentAnalyser = () => (
  <svg viewBox="0 0 420 260" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs>
      <linearGradient id="grad-doc" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#22C55E"/>
        <stop offset="1" stopColor="#14B8A6"/>
      </linearGradient>
    </defs>
    <rect x="14" y="14" rx="22" width="392" height="232" fill="url(#grad-doc)" opacity=".1" />
    <rect x="24" y="26" rx="18" width="372" height="210" fill="#fff" />

    {/* Document */}
    <rect x="72" y="56" rx="10" width="200" height="148" fill="#F1F5F9" stroke="#CBD5E1"/>
    <rect x="92" y="80" width="160" height="10" rx="5" fill="#94A3B8"/>
    <rect x="92" y="100" width="130" height="10" rx="5" fill="#64748B"/>
    <rect x="92" y="120" width="150" height="10" rx="5" fill="#94A3B8"/>
    <rect x="92" y="140" width="110" height="10" rx="5" fill="#64748B"/>
    <rect x="92" y="160" width="140" height="10" rx="5" fill="#94A3B8"/>

    {/* Highlights */}
    <rect x="92" y="100" width="80" height="10" rx="5" fill="#FDE68A"/>
    <rect x="92" y="160" width="60" height="10" rx="5" fill="#A7F3D0"/>

    {/* Magnifier */}
    <circle cx="300" cy="142" r="34" fill="none" stroke="#10B981" strokeWidth="6"/>
    <rect x="320" y="168" width="24" height="10" rx="5" transform="rotate(40 320 168)" fill="#10B981"/>
  </svg>
);

const SvgAutomation = () => (
  <svg viewBox="0 0 420 260" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs>
      <linearGradient id="grad-auto" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#38BDF8"/>
        <stop offset="1" stopColor="#A855F7"/>
      </linearGradient>
    </defs>
    <rect x="14" y="14" rx="22" width="392" height="232" fill="url(#grad-auto)" opacity=".1" />
    <rect x="24" y="26" rx="18" width="372" height="210" fill="#fff" />

    {/* Conveyor */}
    <rect x="60" y="178" width="300" height="20" rx="10" fill="#111827"/>
    <circle cx="80" cy="188" r="8" fill="#6B7280"/><circle cx="140" cy="188" r="8" fill="#6B7280"/>
    <circle cx="200" cy="188" r="8" fill="#6B7280"/><circle cx="260" cy="188" r="8" fill="#6B7280"/>
    <circle cx="320" cy="188" r="8" fill="#6B7280"/>

    {/* Boxes */}
    <rect x="86" y="144" width="60" height="34" rx="6" fill="#F59E0B"/>
    <rect x="176" y="144" width="60" height="34" rx="6" fill="#10B981"/>
    <rect x="266" y="144" width="60" height="34" rx="6" fill="#3B82F6"/>

    {/* Robot arm */}
    <circle cx="330" cy="80" r="16" fill="#A855F7"/>
    <rect x="322" y="92" width="16" height="40" rx="8" fill="#8B5CF6"/>
    <rect x="276" y="120" width="60" height="10" rx="5" fill="#4F46E5"/>
    <rect x="268" y="112" width="18" height="18" rx="4" fill="#22D3EE"/>
  </svg>
);

const SLIDES = [
  {
    key: "codegen",
    title: "Code Generations",
    caption: "Boilerplate, tests, refactors — generated safely in seconds.",
    Art: SvgCodeGenerations
  },
  {
    key: "chatbots",
    title: "Chatbots",
    caption: "Helpful assistants with memory, guardrails, and great UX.",
    Art: SvgChatbots
  },
  {
    key: "agentic",
    title: "Agentic AI",
    caption: "Autonomous planning, tool use, and multi-step execution.",
    Art: SvgAgenticAI
  },
  {
    key: "docan",
    title: "Document Analyser",
    caption: "OCR + NLP to extract entities, tables, and insights.",
    Art: SvgDocumentAnalyser
  },
  {
    key: "automation",
    title: "Automation",
    caption: "Trigger workflows, orchestrate systems, close the loop.",
    Art: SvgAutomation
  }
];

export default function ShowcaseSlider() {
  const [index, setIndex] = useState(0);
  const len = SLIDES.length;

  const go = (dir) => setIndex((i) => (i + dir + len) % len);

  return (
    <section className="slider" aria-label="GenAI showcase" aria-roledescription="carousel">
      <div
        className="slider__viewport"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") go(-1);
          if (e.key === "ArrowRight") go(+1);
        }}
      >
        <div className="slider__track" style={{ transform: `translateX(${-index * 100}%)` }}>
          {SLIDES.map(({ key, title, caption, Art }, i) => (
            <article className="slide" key={key} aria-roledescription="slide" aria-label={`${i + 1} of ${len}`}>
              <div className="slide__media"><Art /></div>
              <div className="slide__text">
                <h3 className="slide__title">{title}</h3>
                <p className="slide__caption">{caption}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Manual controls only */}
        <button className="slider__btn prev" onClick={() => go(-1)} aria-label="Previous slide">‹</button>
        <button className="slider__btn next" onClick={() => go(+1)} aria-label="Next slide">›</button>
      </div>

      <div className="slider__dots" role="tablist" aria-label="Slide selector">
        {SLIDES.map((s, i) => (
          <button
            key={s.key}
            role="tab"
            aria-selected={i === index}
            className={`dot ${i === index ? "is-active" : ""}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </section>
  );
}
