// import React, { useState } from "react";
// import africaQuestions from "./components/africaQuestions";
// import AfricaMissedQuestionsPage from "./Components/AfricaMissedQuestion";

// function AfricaQuiz() {
//   const [currentPage, setCurrentPage] = useState("quiz"); // "quiz", "score", or "missed-questions"
//   const [page, setPage] = useState(0);
//   const questionsPerPage = 8;
//   const totalPages = Math.ceil(africaQuestions.length / questionsPerPage);
//   const startIndex = page * questionsPerPage;
//   const endIndex = startIndex + questionsPerPage;
//   const currentQuestions = africaQuestions.slice(startIndex, endIndex);
//   const [selectedAnswers, setSelectedAnswers] = useState(
//     new Array(africaQuestions.length).fill(null)
//   );
//   const [showScore, setShowScore] = useState(false);

//   const handleNextPage = () => {
//     if (
//       !currentQuestions.some(
//         (_, index) => selectedAnswers[startIndex + index] === null
//       )
//     ) {
//       setPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
//       setCurrentPage("quiz");
//     } else {
//       alert("Please answer all questions before proceeding to the next page.");
//     }
//   };

//   const handlePrevPage = () => {
//     setPage((prevPage) => Math.max(prevPage - 1, 0));
//     setCurrentPage("quiz");
//   };

//   const handleOptionClick = (questionIndex, optionIndex) => {
//     const newSelectedAnswers = [...selectedAnswers];
//     newSelectedAnswers[questionIndex] = optionIndex;
//     setSelectedAnswers(newSelectedAnswers);
//   };

//   const calculateScore = () => {
//     let correctAnswers = 0;
//     selectedAnswers.forEach((selectedOption, index) => {
//       if (
//         selectedOption !== null &&
//         africaQuestions[index].correctAnswer === selectedOption
//       ) {
//         correctAnswers++;
//       }
//     });
//     return correctAnswers;
//   };

//   const handleSubmit = () => {
//     setShowScore(true);
//     setIsCompleted(true);
//   };

//   const handleViewMissedQuestions = () => {
//     setCurrentPage("missed-questions");
//   };

//   return (
//     <div className="AfricaQuiz-container mb-3 px-12 md:px-5 sm:px-3">
//       {currentPage === "quiz" && (
//         <div>
//           {currentQuestions.map((q) => (
//             <div key={q.id} className={`question border p-4 rounded-lg mb-4 $`}>
//               <h3 className="text-xl font-semibold mb-2">{q.question}</h3>
//               <ul>
//                 {q.options?.map((option, optionIndex) => (
//                   <li
//                     key={optionIndex}
//                     className={`cursor-pointer p-2  transition-colors ${
//                       selectedAnswers[q.id - 1] === optionIndex
//                         ? "bg-green-500 text-white"
//                         : "bg-gray-200"
//                     }`}
//                     onClick={() => handleOptionClick(q.id - 1, optionIndex)}
//                   >
//                     {option}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//           <div className="mt-4">
//             <button
//               onClick={handlePrevPage}
//               disabled={page === 0}
//               className="mr-2 px-4 py-2 bg-blue-500 text-white rounded"
//             >
//               Previous Page
//             </button>
//             {page === totalPages - 1 ? (
//               <button
//                 onClick={handleSubmit}
//                 className="px-4 py-2 bg-blue-500 text-white rounded"
//               >
//                 Submit
//               </button>
//             ) : (
//               <button
//                 onClick={handleNextPage}
//                 disabled={page === totalPages - 1}
//                 className="px-4 py-2 bg-blue-500 text-white rounded"
//               >
//                 Next Page
//               </button>
//             )}

//     </div>
//   </div>
// )}

//     </div>
//   );
// }

// export default AfricaQuiz;

// import React, { useState } from "react";
// import africaQuestions from "./components/africaQuestions";
// import AfricaMissedQuestionsPage from "./Components/AfricaMissedQuestion";

// function AfricaQuiz() {
//   const [currentPage, setCurrentPage] = useState("quiz"); // "quiz", "score", or "missed-questions"
//   const [page, setPage] = useState(0);
//   const questionsPerPage = 8;
//   const totalPages = Math.ceil(africaQuestions.length / questionsPerPage);
//   const startIndex = page * questionsPerPage;
//   const endIndex = startIndex + questionsPerPage;
//   const currentQuestions = africaQuestions.slice(startIndex, endIndex);
//   const [selectedAnswers, setSelectedAnswers] = useState(
//     new Array(africaQuestions.length).fill(null)
//   );
//   const [showScore, setShowScore] = useState(false);
//   const [answeredCount, setAnsweredCount] = useState(0);
//   const [iscompleted, setIsCompleted] = useState(false);

//   const handleNextPage = () => {
//     setPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
//     setCurrentPage("quiz");
//   };

//   const handlePrevPage = () => {
//     setPage((prevPage) => Math.max(prevPage - 1, 0));
//     setCurrentPage("quiz");
//   };

//   const handleOptionClick = (questionIndex, optionIndex) => {
//     const newSelectedAnswers = [...selectedAnswers];
//     newSelectedAnswers[questionIndex] = optionIndex;
//     setSelectedAnswers(newSelectedAnswers);
//     setAnsweredCount(answeredCount + 1);
//   };

//   const calculateScore = () => {
//     let correctAnswers = 0;
//     selectedAnswers.forEach((selectedOption, index) => {
//       if (
//         selectedOption !== null &&
//         africaQuestions[index].correctAnswer === selectedOption
//       ) {
//         correctAnswers++;
//       }
//     });
//     return correctAnswers;
//   };

//   const handleSubmit = () => {
//     if (selectedAnswers.includes(null)) {
//       alert("Please answer all questions before submitting.");
//     } else {
//       setShowScore(true);
//       setIsCompleted(true);
//     }
//   };

//   return (
//     <div className="AfricaQuiz-container mb-3 px-12 md:px-5 sm:px-3">
//       <div className="fixed top-9 right-3 p-4 bg-blue-500 text-white px-2 py-1 rounded-full">
//         {`${answeredCount}/${africaQuestions.length} answered`}
//       </div>
//       {currentPage === "quiz" && (
//         <div>
//           {currentQuestions.map((q) => (
//             <div key={q.id} className={`question border p-4 rounded-lg mb-4 $`}>
//               <h3 className="text-xl font-semibold mb-2">{q.question}</h3>
//               <ul>
//                 {q.options?.map((option, optionIndex) => (
//                   <li
//                     key={optionIndex}
//                     className={`cursor-pointer p-2  transition-colors ${
//                       selectedAnswers[q.id - 1] === optionIndex
//                         ? "bg-green-500 text-white"
//                         : "bg-gray-200"
//                     }`}
//                     onClick={() => handleOptionClick(q.id - 1, optionIndex)}
//                   >
//                     {option}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//           <div className="mt-4">
//             <button
//               onClick={handlePrevPage}
//               disabled={page === 0}
//               className="mr-2 px-4 py-2 bg-blue-500 text-white rounded"
//             >
//               Previous Page
//             </button>
//             {page === totalPages - 1 ? (
//               <button
//                 onClick={handleSubmit}
//                 className="px-4 py-2 bg-blue-500 text-white rounded"
//                 disabled={selectedAnswers.includes(null)}
//               >
//                 Submit
//               </button>
//             ) : (
//               <button
//                 onClick={handleNextPage}
//                 disabled={page === totalPages - 1}
//                 className="px-4 py-2 bg-blue-500 text-white rounded"
//               >
//                 Next Page
//               </button>
//             )}
//           </div>
//         </div>
//       )}

//       {iscompleted && (
//         <div className="fixed inset-0 flex items-center justify-center bg-gray-950 bg-opacity-50">
//           <div className="bg-blue-300 p-8 rounded shadow-lg">
//             {showScore && (
//               <div className="mt-4">
//                 <p className="text-3xl font-semibold text-center">
//                   {calculateScore()} / {questions.length}
//                 </p>
//                 <p>
//                   {calculateScore() === questions.length ? (
//                     <span className="">
//                       You answered all questions correctly!
//                     </span>
//                   ) : (
//                     <span>Keep practicing to improve your score.</span>
//                   )}
//                 </p>
//               </div>
//             )}
//             {showScore && (
//               <button
//                 onClick={handleViewMissedQuestions}
//                 className="ml-2 px-4 py-2 bg-red-500 text-white rounded"
//               >
//                 View Missed Questions
//               </button>
//             )}
//           </div>
//         </div>
//       )}
//       {currentPage === "missed-questions" && (
//         <AfricaMissedQuestionsPage selectedAnswers={selectedAnswers} />
//       )}
//     </div>
//   );
// }

// export default AfricaQuiz;

import React, { useState } from "react";
import AfricaMissedQuestionsPage from "./Components/AfricaMissedQuestion";
import africaQuestions from "./components/africaQuestions";

function AfricaQuiz() {
  const [currentPage, setCurrentPage] = useState("quiz"); // "quiz", "score", or "missed-questions"
  const [page, setPage] = useState(0);
  const questionsPerPage = 8;
  const totalPages = Math.ceil(africaQuestions.length / questionsPerPage);
  const startIndex = page * questionsPerPage;
  const endIndex = startIndex + questionsPerPage;
  const currentQuestions = africaQuestions.slice(startIndex, endIndex);
  const [selectedAnswers, setSelectedAnswers] = useState(
    new Array(africaQuestions.length).fill(null)
  );
  const [showScore, setShowScore] = useState(false);
  const [answeredCount, setAnsweredCount] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

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
        africaQuestions[index].correctAnswer === selectedOption
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

  return (
    <div className="AfricaQuiz-container mb-3 px-12 md:px-5 sm:px-3">
      <div className="fixed top-9 right-3 p-4 bg-blue-500 text-white px-2 py-1 rounded-full">
        {`${answeredCount}/${africaQuestions.length} answered`}
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
          <div className="mt-4">
            <button
              onClick={handlePrevPage}
              disabled={page === 0}
              className="mr-2 px-4 py-2 bg-blue-500 text-white rounded"
            >
              Previous Page
            </button>
            {page === totalPages - 1 ? (
              <button
                onClick={handleSubmit}
                className="px-4 py-2 bg-blue-500 text-white rounded"
                disabled={selectedAnswers.includes(null)}
              >
                Submit
              </button>
            ) : (
              <button
                onClick={handleNextPage}
                disabled={page === totalPages - 1}
                className="px-4 py-2 bg-blue-500 text-white rounded"
              >
                Next Page
              </button>
            )}
          </div>
        </div>
      )}

      {isCompleted && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-950 bg-opacity-50">
          <div className="bg-blue-300 p-8 rounded shadow-lg">
            {showScore && (
              <div className="mt-4">
                <p className="text-3xl font-semibold text-center">
                  {calculateScore()} / {africaQuestions.length}
                </p>
                <p>
                  {calculateScore() === africaQuestions.length ? (
                    <span className="">
                      You answered all questions correctly!
                    </span>
                  ) : (
                    <span>Keep practicing to improve your score.</span>
                  )}
                </p>
              </div>
            )}
            {showScore && (
              <button
                onClick={() => setCurrentPage("missed-questions")}
                className="ml-2 px-4 py-2 bg-red-500 text-white rounded"
              >
                View Missed Questions
              </button>
            )}
          </div>
        </div>
      )}
      {currentPage === "missed-questions" && (
        <AfricaMissedQuestionsPage selectedAnswers={selectedAnswers} />
      )}
    </div>
  );
}

export default AfricaQuiz;
