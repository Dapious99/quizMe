import Home from "./homepage/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PoliticalQuiz from "./politicalQ";
import RandomQuiz from "./RandomQuiz";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/political-quiz" element={<PoliticalQuiz />} />
        <Route path="/" element={<Home />} />
        <Route path="/random-quiz" element={<RandomQuiz />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
