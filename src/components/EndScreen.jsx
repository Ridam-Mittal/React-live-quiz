import React, { useState, useContext } from 'react';
import { QuizContext } from '../helpers/Context';

function EndScreen() {
  const {
    score,
    setScore,
    setGameState,
    setQuestions,
    setUserAnswers,
    questions,
    userAnswers,
  } = useContext(QuizContext);

  const [showReview, setShowReview] = useState(false);

  const restartquiz = () => {
    setScore(0);
    setQuestions([]);
    setUserAnswers([]);
    setGameState('menu');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-teal-600 px-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-xl text-center space-y-6">
        <h1 className="text-3xl font-bold text-gray-800">Quiz Finished</h1>
        <h3 className="text-xl font-medium text-gray-700">
          {score} / {questions.length}
        </h3>

        <div className="flex flex-col md:flex-row justify-center gap-4">
          <button
            onClick={restartquiz}
            className="bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded-md font-semibold"
          >
            Home
          </button>
          <button
            onClick={() => setShowReview((prev) => !prev)}
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md font-semibold"
          >
            {showReview ? 'Close Review' : 'Review Answers'}
          </button>
        </div>

        {showReview && (
          <div className="text-left mt-6 space-y-4">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Review:</h4>
            <div className="max-h-80 overflow-y-auto pr-2 space-y-4">
              {questions.map((q, index) => (
                <div key={index} className="p-4 bg-gray-100 rounded-md">
                  <p className="font-medium text-gray-800">
                    <span className="text-teal-700 font-semibold">Q{index + 1}:</span> {q.text}
                  </p>
                  <p>
                    Your Answer:{' '}
                    <span
                      className={`font-semibold ${
                        userAnswers[index] === q.answer ? 'text-green-600' : 'text-red-600'
                      }`}
                    >
                      {userAnswers[index] || 'Not Answered'}
                    </span>
                  </p>
                  {userAnswers[index] !== q.answer && (
                    <p>
                      Correct Answer:{' '}
                      <span className="text-green-700 font-semibold">{q.answer}</span>
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default EndScreen;
