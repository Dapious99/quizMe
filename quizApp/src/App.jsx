import { BrowserRouter, Routes, Route } from "react-router-dom";
import AfricaQuiz from "./views/africaQuiz/AfricaQuiz";
import Fallback from "./components/Fallback";
import Home from "./views/homepage/Home";
import Layout from "./components/Layout";
import PoliticalQuiz from "./views/politicalQ/PoliticalQuiz";
import RandomQuiz from "./views/RandomQuiz";
import Contact from "./views/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/africa-quiz" element={<AfricaQuiz />} />
          <Route path="/political-quiz" element={<PoliticalQuiz />} />
          <Route path="/random-quiz" element={<RandomQuiz />} />
          <Route path="/" element={<Home />} />
          <Route path="/contact-us" element={<Contact />} />
        </Route>
        <Route path="*" element={<Fallback />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
