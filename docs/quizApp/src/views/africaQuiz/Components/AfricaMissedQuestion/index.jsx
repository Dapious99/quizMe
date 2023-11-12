import React from "react";
import africaQuestions from "../africaQuestions";
function Index({ selectedAnswers }) {
  // Filter questions based on incorrect answers
  const incorrectQuestions = africaQuestions.filter(
    (q) => selectedAnswers[q.id - 1] !== q.correctAnswer
  );

  return (
    <div className="missed-questions-container flex flex-col justify-center items-center h-screen px-12 md:px-5 sm:px-3">
      <h2 className="text-5xl md:text-3xl sm:text-2xl bg-gradient-to-r from-red-500 via-orange-500 to-green-500 inline-block text-transparent bg-clip-text">
        Missed Questions and Correct Answers
      </h2>
      <ul>
        {incorrectQuestions.map((q) => (
          <li key={q.id}>
            {selectedAnswers[q.id - 1] !== q.correctAnswer && (
              // Don't display "Correct" for correctly answered questions
              <>
                Incorrect: Correct answer:{" "}
                <span className="text-green-500">
                  {q.options?.[q.correctAnswer]}
                </span>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Index;
