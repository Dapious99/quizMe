import React from "react";
import questions from "./questions";

function MissedQuestionsPage({ selectedAnswers }) {
  return (
    <div className="">
      <h1 className="text-5xl md:text-3xl sm:text-2xl bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 inline-block text-transparent bg-clip-text">
        Missed Questions and Correct Answers
      </h1>
      <ul>
        {questions.map((q, id) => (
          <li key={id}>
            Question {id + 1}:
            {selectedAnswers[id] === q.correctAnswer ? (
              <span className="text-green-500 text-2xl sm:text-lg md:text-xl">
                You got the question right.
              </span>
            ) : (
              <>
                Incorrect:{" "}
                <span className="text-green-400">Correct answer</span>:{" "}
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
