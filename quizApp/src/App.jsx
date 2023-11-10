import { BrowserRouter, Routes, Route } from "react-router-dom";
import AfricaQuiz from "./views/africaQuiz/AfricaQuiz";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/africa-quiz" element={<AfricaQuiz />} />
        <Route path="" element={<Navbar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
