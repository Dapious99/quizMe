import React from "react";

function MissedQuestionsPage({ missedQuestions }) {
  return (
    <div className="py-4">
      <h2 className="text-5xl md:text-3xl mb-3 sm:text-2xl bg-gradient-to-r from-red-500 via-orange-500 to-green-500 inline-block text-transparent bg-clip-text">
        Missed Questions and Correct Answers
      </h2>
      <ul>
        {missedQuestions.map((q) => (
          <li key={q.id} className="mb-2">
            <p className="text-red-400">{q.question}</p>
            <p className="text-green-400">
              Correct Answer: {q.options[q.correctAnswer]}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MissedQuestionsPage;
