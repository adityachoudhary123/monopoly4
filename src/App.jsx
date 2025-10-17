import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Scores from "./pages/Scores.jsx";
import UseCases from "./pages/UseCases.jsx";
import Rules from "./pages/Rules.jsx";
import Participants from "./pages/Participants.jsx";
import Dates from "./pages/Dates.jsx";
import About from "./pages/About.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="page" role="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/scores" element={<Scores />} />
          <Route path="/usecases" element={<UseCases />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/participants" element={<Participants />} />
          <Route path="/dates" element={<Dates />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </>
  );
}
