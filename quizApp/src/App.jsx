import { BrowserRouter, Routes, Route } from "react-router-dom";
// import AfricaQuiz from "./views/africaQuiz/AfricaQuiz";
import Fallback from "./components/Fallback";
import Home from "./views/homepage/Home";
import Layout from "./components/Layout";
// import PoliticalQuiz from "./views/politicalQ/PoliticalQuiz";
// import RandomQuiz from "./views/RandomQuiz";
import Contact from "./views/Contact";
import About from "./views/About";
import africaQuestions from "./views/Quiz/components/africaQuestions";
import Quiz from "./views/Quiz";
import politicalQuestions from "./views/Quiz/components/politicalQuestions";
import RandomQuestions from "./views/Quiz/components/RandomQuestions";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/africa-quiz"
            element={<Quiz questions={africaQuestions} />}
          />
          <Route
            path="/political-quiz"
            element={<Quiz questions={politicalQuestions} />}
          />
          <Route
            path="/general-quiz"
            element={<Quiz questions={RandomQuestions} />}
          />
          <Route path="/" element={<Home />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/about-us" element={<About />} />
        </Route>
        <Route path="*" element={<Fallback />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
