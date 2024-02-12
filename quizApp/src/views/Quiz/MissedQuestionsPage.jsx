// import React from "react";

// function MissedQuestionsPage({ questions, selectedAnswers }) {
//   // Filter questions based on incorrect answers
//   const incorrectQuestions = questions.filter(
//     (q) => selectedAnswers[q.id - 1] !== q.correctAnswer
//   );

//   return (
//     <div className="missed-questions-container flex flex-col justify-center items-center h-screen">
//       <h2 className="text-5xl md:text-3xl sm:text-2xl bg-gradient-to-r from-red-500 via-orange-500 to-green-500 inline-block text-transparent bg-clip-text">
//         Missed Questions and Correct Answers
//       </h2>
//       <ul>
//         {incorrectQuestions.map((q) => (
//           <li key={q.id}>
//             {selectedAnswers[q.id - 1] !== q.correctAnswer && (
//               // Don't display "Correct" for correctly answered questions
//               <>
//                 Incorrect: Correct answer:{" "}
//                 <span className="text-green-500">
//                   {q.options?.[q.correctAnswer]}
//                 </span>
//               </>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default MissedQuestionsPage;
// MissedQuestionsPage.js
import React from "react";

function MissedQuestionsPage({ missedQuestions }) {
  return (
    <div className="missed-questions-container">
      <h2>Missed Questions and Correct Answers</h2>
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
