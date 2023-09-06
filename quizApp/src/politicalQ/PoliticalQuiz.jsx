import React, { useState } from "react";
import questions from "./questions";
import MissedQuestionsPage from "./MissedQuestionsPage";

function PoliticalQuiz() {
  const [currentPage, setCurrentPage] = useState("quiz");
  const [page, setPage] = useState(0);
  const questionsPerPage = 10;
  const totalPages = Math.ceil(questions.length / questionsPerPage);
  const [selectedAnswers, setSelectedAnswers] = useState(
    new Array(totalPages).fill(new Array(questionsPerPage).fill(null))
  );
  const [isAnsweredCorrectly, setIsAnsweredCorrectly] = useState(false);
  const [showScore, setShowScore] = useState(false);

  const currentQuestions = questions.slice(
    page * questionsPerPage,
    (page + 1) * questionsPerPage
  );

  const handleNextPage = () => {
    setPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
    setIsAnsweredCorrectly(false);
  };

  const handlePrevPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 0));
    setIsAnsweredCorrectly(false);
  };

  const handleOptionClick = (questionIndex, optionIndex) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[page][questionIndex % questionsPerPage] = optionIndex; // Store selected answer for the current page
    setSelectedAnswers(newSelectedAnswers);

    const isCorrect =
      questions[questionIndex + page * questionsPerPage].correctAnswer ===
      optionIndex;
    setIsAnsweredCorrectly(isCorrect);
  };

  const calculateScore = () => {
    let correctAnswers = 0;
    selectedAnswers.forEach((pageAnswers, pageIndex) => {
      pageAnswers.forEach((selectedOption, questionIndex) => {
        const globalQuestionIndex =
          questionIndex + pageIndex * questionsPerPage;
        if (
          selectedOption !== null &&
          questions[globalQuestionIndex].correctAnswer === selectedOption
        ) {
          correctAnswers++;
        }
      });
    });
    return correctAnswers;
  };

  const handleSubmit = () => {
    setShowScore(true);
  };

  const handleViewMissedQuestions = () => {
    setCurrentPage("missed-questions");
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
                {q.options?.map((option, optionIndex) => (
                  <li
                    key={optionIndex}
                    className={`cursor-pointer p-2  transition-colors ${
                      selectedAnswers[page][
                        questionIndex % questionsPerPage
                      ] === optionIndex
                        ? questions[questionIndex + page * questionsPerPage]
                            .correctAnswer === optionIndex
                          ? "bg-green-500 text-white"
                          : "bg-red-500 text-white"
                        : "bg-gray-200"
                    }`}
                    onClick={() =>
                      handleOptionClick(
                        questionIndex + page * questionsPerPage,
                        optionIndex
                      )
                    }
                  >
                    {option}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="mt-4">
            {page > 0 && (
              <button
                onClick={handlePrevPage}
                className="mr-2 px-4 py-2 bg-blue-500 text-white rounded"
              >
                Previous Page
              </button>
            )}
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
                className="px-4 py-2 bg-blue-500 text-white rounded"
              >
                Next Page
              </button>
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

      {currentPage === "score" && (
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

      {currentPage === "missed-questions" && (
        <MissedQuestionsPage selectedAnswers={selectedAnswers[page]} />
      )}
    </div>
  );
}

export default PoliticalQuiz;
