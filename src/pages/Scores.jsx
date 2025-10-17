import race from "../assets/scores-race.jpg";

const SCORES = [
  { team: "AI Pioneers", points: 275 },
  { team: "PromptDNA", points: 675 },
  { team: "Trail Blazers", points: 655 },
  { team: "Visionary Vectors", points: 1035 },
  { team: "AINerds", points: 770 },
];

const ordered = [...SCORES].sort((a, b) => b.points - a.points);

const pillClass = (team) => ({
  "AI Pioneers": "pill pill--orange",
  "PromptDNA": "pill pill--blue",
  "Trail Blazers": "pill pill--green",
  "Visionary Vectors": "pill pill--yellow",
  "AINerds": "pill pill--purple",
}[team] || "pill");

export default function Scores() {
  return (
    <section className="container">
      {/* Marquee pills with team colors */}
      <div className="score-ticker" aria-label="Current team standings">
        <div className="score-ticker__track">
          {ordered.concat(ordered).map((s, i) => (
            <span className={pillClass(s.team)} key={i}>
              {s.team} — {s.points} pts
            </span>
          ))}
        </div>
      </div>

      {/* Image (already reduced to 80% via CSS) */}
      <div className="score-photo">
        <img
          src={race}
          alt="Leaderboard visual with team yachts at sunset"
        />
      </div>
    </section>
  );
}
