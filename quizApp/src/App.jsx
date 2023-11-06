import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./homepage/Home";
import PoliticalQuiz from "./politicalQ";
import RandomQuiz from "./RandomQuiz";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Navbar />} />
        <Route path="/political-quiz" element={<PoliticalQuiz />} />
        <Route path="/" element={<Home />} />
        <Route path="/random-quiz" element={<RandomQuiz />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
