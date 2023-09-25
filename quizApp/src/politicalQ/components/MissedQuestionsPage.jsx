import React from "react";
import questions from "./questions";

function MissedQuestionsPage({ selectedAnswers }) {
  return (
    <div className="">
      <h1 className="bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 inline-block text-transparent bg-clip-text">
        Missed Questions and Correct Answers
      </h1>
      <ul>
        {questions.map((q, id) => (
          <li key={id}>
            Question {id + 1}:
            {selectedAnswers[id] === q.correctAnswer ? (
              <span className="text-green-500 text-4xl">
                You got the question right.
              </span>
            ) : (
              <>
                <span className="text-red-500 text-4xl">Incorrect.</span>
                <span className="text-green-500 text-4xl">
                  {q.options?.[q.correctAnswer]} is the correct answer.
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
