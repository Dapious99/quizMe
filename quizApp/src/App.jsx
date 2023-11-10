import { BrowserRouter, Routes, Route } from "react-router-dom";
import AfricaQuiz from "./africaQuiz/AfricaQuiz";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/africa-quiz" element={<AfricaQuiz />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
