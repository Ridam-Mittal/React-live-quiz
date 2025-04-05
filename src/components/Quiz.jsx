import { useState, useContext } from 'react';
import { QuizContext } from '../helpers/Context';

function Quiz() {
  const [currQuestion, setCurrQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");
  const { setGameState, setScore, questions, userAnswers, setUserAnswers } = useContext(QuizContext);

  const nextQuestion = () => {
    setUserAnswers(prev => [...prev, optionChosen]);
    if (questions[currQuestion].answer === optionChosen) {
      setScore(prev => prev + 1);
    }
    setOptionChosen("");
    setCurrQuestion(prev => prev + 1);
  };

  const finishQuiz = () => {
    setUserAnswers(prev => [...prev, optionChosen]);
    if (questions[currQuestion].answer === optionChosen) {
      setScore(prev => prev + 1);
    }
    setGameState('endScreen');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-teal-600 px-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-xl flex flex-col gap-6">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
          Q{currQuestion + 1}. {questions[currQuestion].text}
        </h2>

        <div className="grid gap-3">
          {questions[currQuestion].options.map((opt, index) => (
            <button
              key={index}
              onClick={() => setOptionChosen(opt)}
              className={`p-3 rounded-md border text-left font-medium transition-all duration-150 ${
                optionChosen === opt
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>

        {currQuestion === questions.length - 1 ? (
          <button
            onClick={finishQuiz}
            className="mt-4 bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded-md font-semibold"
          >
            Submit
          </button>
        ) : (
          <button
            onClick={nextQuestion}
            className="mt-4 bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded-md font-semibold"
          >
            Next Question
          </button>
        )}
      </div>
    </div>
  );
}

export default Quiz;
