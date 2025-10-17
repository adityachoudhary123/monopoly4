import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const TEAMS = ["AI Pioneers", "PromptDNA", "Trail Blazers", "Visionary Vectors", "AINerds"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const nav = useNavigate();

  // Close on outside click
  useEffect(() => {
    function onDocClick(e) {
      if (!menuRef.current || !buttonRef.current) return;
      if (!menuRef.current.contains(e.target) && !buttonRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  // Close on Escape
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="navbar" role="banner">
      <div className="navbar__inner">
        <button
          className="navbar__brand"
          onClick={() => nav("/")}
          aria-label="Go to Home"
        >
          MONOPOLY 4.0
        </button>

        <nav className="navbar__links" aria-label="Main navigation">
          <NavLink to="/" className={({ isActive }) => isActive ? "link active" : "link"}>Home</NavLink>

          <div className="dropdown" ref={menuRef}>
            <button
              ref={buttonRef}
              className="dropdown__button"
              aria-haspopup="menu"
              aria-expanded={open}
              aria-controls="teams-menu"
              onClick={() => setOpen(v => !v)}
              onKeyDown={(e) => {
                if (e.key === " " || e.key === "Enter") {
                  e.preventDefault();
                  setOpen(v => !v);
                }
              }}
            >
              Teams <span className="caret" aria-hidden>▾</span>
            </button>

            <ul
              id="teams-menu"
              role="menu"
              className={`dropdown__menu ${open ? "is-open" : ""}`}
            >
              {TEAMS.map((t) => (
                <li key={t} role="menuitem" tabIndex={-1} className="dropdown__item">
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <NavLink to="/scores" className={({ isActive }) => isActive ? "link active" : "link"}>Scores</NavLink>
          <NavLink to="/usecases" className={({ isActive }) => isActive ? "link active" : "link"}>Use Cases</NavLink>
          <NavLink to="/rules" className={({ isActive }) => isActive ? "link active" : "link"}>Rules</NavLink>
          <NavLink to="/participants" className={({ isActive }) => isActive ? "link active" : "link"}>Participants</NavLink>
          <NavLink to="/dates" className={({ isActive }) => isActive ? "link active" : "link"}>Dates</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "link active" : "link"}>About</NavLink>
        </nav>
      </div>
    </header>
  );
}
