import React, { useEffect, useState } from "react";
import MissedQuestionsPage from "./components/MissedQuestionsPage";
import { Link } from "react-router-dom";

function Quiz({ questions }) {
  const [currentPage, setCurrentPage] = useState("quiz");
  const [page, setPage] = useState(0);
  const questionsPerPage = 8;
  const totalPages = Math.ceil(questions.length / questionsPerPage);
  const startIndex = page * questionsPerPage;
  const endIndex = startIndex + questionsPerPage;
  const currentQuestions = questions.slice(startIndex, endIndex);
  const [selectedAnswers, setSelectedAnswers] = useState(
    new Array(questions.length).fill(null)
  );
  const [showScore, setShowScore] = useState(false);
  const [answeredCount, setAnsweredCount] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [remainingTime, setRemainingTime] = useState(15 * 60);

  useEffect(() => {
    // Start the timer when the component mounts
    const timer = setInterval(() => {
      if (remainingTime > 0) {
        setRemainingTime((prevTime) => prevTime - 1);
      } else {
        clearInterval(timer);
        // Handle what happens when the timer reaches zero
        handleTimeUp();
      }
    }, 1000);

    // Clean up the timer when the component unmounts
    return () => clearInterval(timer);
  }, [remainingTime]);
  useEffect(() => {
    // Reset the timer whenever the questions change
    setRemainingTime(15 * 60);
  }, [questions]);

  const handleTimeUp = () => {
    // Handle what happens when the timer reaches zero
    alert("Time's up! Submitting the quiz now!");
    // handleSubmit();
    setShowScore(true);
    setIsCompleted(true);
  };
  const handleNextPage = () => {
    setPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
    setCurrentPage("quiz");
  };

  const handlePrevPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 0));
    setCurrentPage("quiz");
  };

  const handleOptionClick = (questionIndex, optionIndex) => {
    if (selectedAnswers[questionIndex] === null) {
      setAnsweredCount(answeredCount + 1);
    }
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[questionIndex] = optionIndex;
    setSelectedAnswers(newSelectedAnswers);
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
    if (selectedAnswers.includes(null)) {
      alert("Please answer all questions before submitting.");
    } else {
      setShowScore(true);
      setIsCompleted(true);
    }
  };

  const handleViewMissedQuestions = () => {
    setCurrentPage("missed-questions");
    setIsCompleted(false);
  };

  // Function to filter missed questions
  const getMissedQuestions = () => {
    return questions.filter(
      (q) => selectedAnswers[q.id - 1] !== q.correctAnswer
    );
  };

  return (
    <div className="Quiz-container mb-3 px-12 md:px-5 sm:px-3">
      {/* Display remaining time and question answered*/}
      <div className="fixed top-9 right-3 p-4 w-40 inline-flex flex-col items-center bg-blue-500 text-white px-2 py-1 rounded-full">
        {`${Math.floor(remainingTime / 60)
          .toString()
          .padStart(2, "0")}:${(remainingTime % 60)
          .toString()
          .padStart(2, "0")} remaining`}
        <div className="mt-2">{`${answeredCount}/${questions.length} answered`}</div>
      </div>
      {currentPage !== "missed-questions" && (
        <div>
          {currentQuestions.map((q, index) => (
            <div key={index} className="question border p-4 rounded-lg mb-4">
              <h3 className="text-xl font-semibold mb-2">{q.question}</h3>
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
          </div>
        </div>
      )}

      {isCompleted && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-950 bg-opacity-50">
          <div className="bg-blue-300 p-8 rounded shadow-lg text-center">
            {showScore && (
              <div className="mt-4">
                <p className="text-3xl font-semibold text-center">
                  {calculateScore()} / {questions.length}
                </p>
                <p>
                  {calculateScore() === questions.length ? (
                    <span className="bg-gradient-to-r from-[#C25D41] via-orange-500 to-[#00C2FF] inline-block text-transparent bg-clip-text">
                      You answered all questions correctly!
                    </span>
                  ) : (
                    <span>Keep practicing to improve your score.</span>
                  )}
                </p>
              </div>
            )}
            {showScore && calculateScore() !== questions.length ? (
              <button
                onClick={handleViewMissedQuestions}
                className="ml-2 px-4 py-2 bg-red-500 text-white rounded"
              >
                View Missed Questions
              </button>
            ) : (
              <Link to="/" className="text-blue-400 mt-2 italic decoration-2">
                Go back to Homepage
              </Link>
            )}
          </div>
        </div>
      )}

      {currentPage === "missed-questions" && (
        <MissedQuestionsPage missedQuestions={getMissedQuestions()} />
      )}
    </div>
  );
}

export default Quiz;
