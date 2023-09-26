import { BrowserRouter, Routes, Route } from "react-router-dom";
import PoliticalQuiz from "./politicalQ/PoliticalQuiz";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/political-quiz" element={<PoliticalQuiz />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
