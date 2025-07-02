import { useState } from 'react';
import MainMenu from './components/MainMenu';
import Quiz from './components/Quiz';
import EndScreen from './components/EndScreen';
import { QuizContext } from './helpers/Context';
import './App.css';

function App() {
  const [gameState, setGameState] = useState("menu");
  const [score, setScore] = useState(0);
  const [quizSettings, setQuizSettings] = useState({});
  const [questions, setQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4 py-4">
      <h1 className="text-3xl font-semibold text-gray-800 mb-1">Quiz App</h1>

      <div className="w-full max-w-xl bg-white rounded-lg shadow">
        <QuizContext.Provider
          value={{
            gameState,
            setGameState,
            score,
            setScore,
            quizSettings,
            setQuizSettings,
            questions,
            setQuestions,
            userAnswers,
            setUserAnswers,
          }}
        >
          {gameState === 'menu' && <MainMenu />}
          {gameState === 'quiz' && <Quiz />}
          {gameState === 'endScreen' && <EndScreen />}
        </QuizContext.Provider>
      </div>
    </div>
  );
}

export default App;
