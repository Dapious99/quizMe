import React, { useState } from "react";
import questions from "./questions";
import MissedQuestionsPage from "./MissedQuestionsPage";

function PoliticalQuiz() {
  const [currentPage, setCurrentPage] = useState("quiz"); // "quiz", "score", or "missed-questions"
  const [page, setPage] = useState(0);
  const questionsPerPage = 10;
  const totalPages = Math.ceil(questions.length / questionsPerPage);
  const startIndex = page * questionsPerPage;
  const endIndex = startIndex + questionsPerPage;
  const currentQuestions = questions.slice(startIndex, endIndex);
  const [selectedAnswers, setSelectedAnswers] = useState(
    new Array(questions.length).fill(null)
  );
  const [isAnsweredCorrectly, setIsAnsweredCorrectly] = useState(false);
  const [showScore, setShowScore] = useState(false);
  const [showButtons, setShowButtons] = useState(true);

  const handleNextPage = () => {
    setPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
    setIsAnsweredCorrectly(false);
    const [showButtons, setShowButtons] = useState(true); // New state for button visibility
    setShowButtons(true);
  };

  const handlePrevPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 0));
    setIsAnsweredCorrectly(false);
    setShowButtons(true);
  };

  const handleOptionClick = (questionIndex, optionIndex) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[questionIndex] = optionIndex;
    setSelectedAnswers(newSelectedAnswers);

    const isCorrect = questions[questionIndex].correctAnswer === optionIndex;
    setIsAnsweredCorrectly(isCorrect);
  };

  const calculateScore = () => {
    let correctAnswers = 0;
    selectedAnswers.forEach((selectedOption, index) => {
      if (
        selectedOption !== null &&
        questions[index].correctAnswer === selectedOption
      ) {
        correctAnswers++;
      }
    });
    return correctAnswers;
  };

  const handleSubmit = () => {
    setShowScore(true);
    setShowButtons(true); 
  };

  const handleViewMissedQuestions = () => {
    setCurrentPage("missed-questions");
    setShowButtons(true);
  };
  return (
    <div className="PoliticalQuiz-container">
      {currentPage === "quiz" && (
        <div>
          {currentQuestions.map((q, questionIndex) => (
            <div
              key={questionIndex}
              className={`question border p-4 rounded-lg mb-4 ${
                isAnsweredCorrectly ? "" : ""
              }`}
            >
              <h3 className="text-xl font-semibold mb-2">{q.question}</h3>
              <ul>
                {q.options.map((option, optionIndex) => (
                  <li
                    key={optionIndex}
                    className={`cursor-pointer p-2  transition-colors ${
                      selectedAnswers[questionIndex] === optionIndex
                        ? questions[questionIndex].correctAnswer === optionIndex
                          ? "bg-green-500 text-white"
                          : "bg-red-500 text-white"
                        : "bg-gray-200"
                    }`}
                    onClick={() =>
                      handleOptionClick(questionIndex, optionIndex)
                    }
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

            {showScore && (
              <div className="mt-4">
                <p className="text-lg font-semibold">
                  {calculateScore()} / {questions.length}
                </p>
                <p>
                  {calculateScore() === questions.length
                    ? "You answered all questions correctly!"
                    : "Keep practicing to improve your score."}
                </p>
              </div>
            )}
            {showButtons && showScore && (
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
      {currentPage === "missed-questions" && (
        <MissedQuestionsPage selectedAnswers={selectedAnswers} />
      )}
    </div>
  );
}

export default PoliticalQuiz;
