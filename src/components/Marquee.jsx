import { useEffect, useState } from "react";

const MESSAGES = [
  "5 Teams",
  "43 Participants",
  "43 Use Cases",
  "Driving GenAI excellence",
  "Racing for the win",
];

export default function Marquee() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % MESSAGES.length);
    }, 2200); // total per-slide time matches CSS timings below
    return () => clearInterval(id);
  }, []);

  return (
    <div className="marquee marquee--single" aria-live="polite">
      {/* key forces re-run of the CSS animation each swap */}
      <div key={index} className="marquee__slide">
        {MESSAGES[index]}
      </div>
    </div>
  );
}
