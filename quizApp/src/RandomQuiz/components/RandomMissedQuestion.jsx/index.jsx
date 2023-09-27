import React from "react";
import randomQuestions from "../../randomQuestions";

function index({ selectedAnswers }) {
  return (
    <div className="missed-questions-container">
      <h2>Missed Questions and Correct Answers</h2>
      <ul>
        {randomQuestions.map((q, id) => (
          <li key={id}>
            Question {id + 1}:
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

export default index;
