import React from "react";
import questions from "./questions";

function MissedQuestionsPage({ selectedAnswers }) {
  return (
    <div className="missed-questions-container">
      <h2>Missed Questions and Correct Answers</h2>
      <ul>
        {questions.map((q, id) => (
          <li key={id}>
            Question {id + 1}:
            {selectedAnswers[id] === q.correctAnswer ? (
              <span className="text-green-500">
                You got the question right.
              </span>
            ) : (
              <>
                Incorrect: Correct answer:
                <span className="text-yellow-500">
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
