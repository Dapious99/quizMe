import Home from "./homepage/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PoliticalQuiz from "./politicalQ/PoliticalQuiz";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/political-quiz" element={<PoliticalQuiz />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
  feat / dev;
}

export default App;
