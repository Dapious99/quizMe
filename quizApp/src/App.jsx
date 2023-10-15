 feat/home
import Home from "./homepage/Home"

function App() {

  return (
    <div>
      <Home />
    </div>
  )

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
 feat/dev
}

export default App;
