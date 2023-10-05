import React from "react";
import randomQuestions from "../../randomQuestions";

function Index({ selectedAnswers }) {
  // Filter questions based on incorrect answers
  const incorrectQuestions = randomQuestions.filter(
    (q, id) => selectedAnswers[id] !== q.correctAnswer
  );

  return (
    <div className="missed-questions-container">
      <h2>Missed Questions and Correct Answers</h2>
      <ul>
        {incorrectQuestions.map((q, id) => (
          <li key={id}>
            Question {id + 1}:
            {selectedAnswers[id] === q.correctAnswer ? (
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

export default Index;
