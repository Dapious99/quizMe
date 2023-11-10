import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AfricaMissedQuestion from "./Components/AfricaMissedQuestion";
import africaQuestions from "./Components/africaQuestions";

function AfricaQuiz() {
  const [currentPage, setCurrentPage] = useState("quiz"); // "quiz", "score", or "missed-questions"
  const [page, setPage] = useState(0);
  const questionsPerPage = 8;
  const totalPages = Math.ceil(africaQuestions.length / questionsPerPage);
  const startIndex = page * questionsPerPage;
  const endIndex = startIndex + questionsPerPage;
  const currentQuestions = africaQuestions.slice(startIndex, endIndex);
  const [selectedAnswers, setSelectedAnswers] = useState(
    new Array(africaQuestions.length).fill(null)
  );
  const [showScore, setShowScore] = useState(false);
  const [iscompleted, setIsCompleted] = useState(false);

  const handleNextPage = () => {
    if (
      !currentQuestions.some(
        (_, index) => selectedAnswers[startIndex + index] === null
      )
    ) {
      setPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
      setCurrentPage("quiz");
    } else {
      alert("Please answer all questions before proceeding to the next page.");
    }
  };

  const handlePrevPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 0));
    setCurrentPage("quiz");
  };

  const handleOptionClick = (questionIndex, optionIndex) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[questionIndex] = optionIndex;
    setSelectedAnswers(newSelectedAnswers);
  };

  const calculateScore = () => {
    let correctAnswers = 0;
    selectedAnswers.forEach((selectedOption, index) => {
      if (
        selectedOption !== null &&
        africaQuestions[index].correctAnswer === selectedOption
      ) {
        correctAnswers++;
      }
    });
    return correctAnswers;
  };

  const handleSubmit = () => {
    setShowScore(true);
    setIsCompleted(true);
    toast.success("You are doing great, you just complete the quiz");
  };

  const handleViewMissedQuestions = () => {
    setCurrentPage("missed-questions");
  };

  return (
    <div className="AfricaQuiz-container">
      {currentPage === "quiz" && (
        <div>
          {currentQuestions.map((q) => (
            <div key={q.id} className="border p-4 rounded-lg mb-4">
              <h3 className="text-xl font-semibold sm:font-normal md:font-medium mb-2">
                {q.question}
              </h3>
              <ul>
                {q.options?.map((option, optionIndex) => (
                  <li
                    key={optionIndex}
                    className={`cursor-pointer p-2  transition-colors ${
                      selectedAnswers[q.id - 1] === optionIndex
                        ? "bg-green-500 text-white"
                        : "bg-gray-200"
                    }`}
                    onClick={() => handleOptionClick(q.id - 1, optionIndex)}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="mt-4">
            <button
              onClick={handlePrevPage}
              disabled={page === 0}
              className="mr-2 px-4 py-2 bg-blue-500 text-white rounded"
            >
              Previous Page
            </button>
            {page === totalPages - 1 ? (
              <button
                onClick={handleSubmit}
                className="px-4 py-2 bg-blue-500 text-white rounded"
              >
                Submit
              </button>
            ) : (
              <button
                onClick={handleNextPage}
                disabled={page === totalPages - 1}
                className="px-4 py-2 bg-blue-500 text-white rounded"
              >
                Next Page
              </button>
            )}
            {iscompleted && (
              <div className="fixed inset-0 flex items-center justify-center bg-gray-950 bg-opacity-50">
                <div className="bg-blue-300 p-8 rounded shadow-lg">
                  {showScore && (
                    <div className="mt-4">
                      <p className="text-3xl font-semibold text-center">
                        {calculateScore()} / {randomQuestions.length}
                      </p>
                      <p>
                        {calculateScore() === randomQuestions.length ? (
                          <span className="bg-gradient-to-r from-[#C25D41] via-orange-500 to-[#00C2FF] inline-block text-transparent bg-clip-text">
                            You answered all questions correctly!
                          </span>
                        ) : (
                          <span>Keep practicing to improve your score.</span>
                        )}
                      </p>
                    </div>
                  )}
                  {showScore && (
                    <button
                      onClick={handleViewMissedQuestions}
                      className="ml-2 px-4 py-2 bg-red-500 text-white rounded"
                    >
                      View Missed Questions
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {currentPage === "missed-questions" && (
        <AfricaMissedQuestion selectedAnswers={selectedAnswers} />
      )}
      <ToastContainer />
    </div>
  );
}

export default AfricaQuiz;
