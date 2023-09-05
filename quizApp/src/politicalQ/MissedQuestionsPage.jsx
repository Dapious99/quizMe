import React from "react";
import questions from "./questions";

function MissedQuestionsPage({ selectedAnswers }) {
  return (
    <div className="missed-questions-container">
      <h2>Missed Questions and Correct Answers</h2>
      <ul>
        {questions.map((q, index) => (
          <li key={index}>
            Question {index + 1}:
            {selectedAnswers[index] === q.correctAnswer ? (
              <span className="text-green-500">Correct</span>
            ) : (
              <>
                Incorrect: Correct answer:
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

export default MissedQuestionsPage;
