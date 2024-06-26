import React, { useEffect, useState } from "react";
import MissedQuestionsPage from "./components/MissedQuestionsPage";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import { ToastContainer, toast } from "react-toastify";

function Quiz({ questions }) {
  const [showModal, setShowModal] = useState(true);
  const [currentPage, setCurrentPage] = useState("quiz");
  const [page, setPage] = useState(0);
  const questionsPerPage = 8;
  const totalPages = Math.ceil(questions.length / questionsPerPage);
  const startIndex = page * questionsPerPage;
  const endIndex = startIndex + questionsPerPage;
  const currentQuestions = questions.slice(startIndex, endIndex);
  const [selectedAnswers, setSelectedAnswers] = useState(
    Array(questions.length).fill(null)
  );
  const [showScore, setShowScore] = useState(false);
  const [answeredCount, setAnsweredCount] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [remainingTime, setRemainingTime] = useState(30 * 60);
  const [timerId, setTimerId] = useState(null);

  useEffect(() => {
    // Clean up the timer when the component unmounts
    return () => clearInterval(timerId);
  }, [timerId]);

  useEffect(() => {
    // Reset the timer whenever the questions change
    setShowModal(true);
    setRemainingTime(30 * 60);
  }, [questions]);

  useEffect(() => {
    let newTimerId;
    if (!showModal && remainingTime > 0) {
      newTimerId = setInterval(() => {
        setRemainingTime((prevTime) => {
          if (prevTime > 0) {
            return prevTime - 1;
          } else {
            clearInterval(newTimerId);
          }
        });
      }, 1000);
      setTimerId(newTimerId);
    } else if (!showModal && remainingTime === 0) {
      handleTimeUp(); // Handle time up if initial time is 0
    }
    return () => {
      clearInterval(newTimerId);
    };
  }, [showModal, remainingTime, showScore]); // Include showScore dependency

  const handleTimeUp = () => {
    if (!showScore) {
      // Check if score hasn't been shown yet to avoid multiple submissions
      toast.info("Time's up! Submitting the quiz now!");
      setShowScore(true);
      setIsCompleted(true);
    }
  };

  const handleStartQuiz = () => {
    // Hide the modal and start the quiz
    setShowModal(false);
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

  const getMissedQuestions = () => {
    return questions.filter(
      (q) => selectedAnswers[q.id - 1] !== q.correctAnswer
    );
  };

  return (
    <div className="pt-16 mb-3 px-12 md:px-5 sm:px-3">
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90">
          <div className="text-white font-fontFamily flex flex-col items-center gap-2">
            <h2>
              All quiz questions must be answered between the set time, if the
              quiz is not completed within the allocated time, it will
              automatically submit.
            </h2>
            <p>Click the Start button to begin the quiz.</p>
            <Button
              title="Start"
              onClick={handleStartQuiz}
              size="sm"
              variant="primary"
            />
          </div>
        </div>
      )}

      <div className="fixed top-12 md:top-8 sm:top-6 md:right-2 sm:right-1 z-30 right-3 p-4 w-40 inline-flex flex-col items-center bg-blue-500 text-white px-2 py-1 rounded-full">
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
          {!showModal ? (
            <div className="mt-4 flex gap-3">
              <Button
                title="Previous Page"
                onClick={handlePrevPage}
                size="sm"
                variant="primary"
                disabled={page === 0}
              />
              {page === totalPages - 1 ? (
                <Button
                  title="Submit"
                  onClick={handleSubmit}
                  size="sm"
                  variant="primary"
                />
              ) : (
                <Button
                  title="Next Page"
                  onClick={handleNextPage}
                  size="sm"
                  variant="primary"
                  disabled={page === totalPages - 1}
                />
              )}
            </div>
          ) : (
            ""
          )}
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
              <Button
                title="View Missed Questions"
                onClick={handleViewMissedQuestions}
                size="sm"
                variant="secondary"
              />
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
      <ToastContainer />
    </div>
  );
}

export default Quiz;
