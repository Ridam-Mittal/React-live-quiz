import React, { useState, useContext } from 'react';
import { QuizContext } from '../helpers/Context';
import { fetchquiz } from '../helpers/FetchQuiz';

function MainMenu() {
  const { setGameState, setQuizSettings, setQuestions } = useContext(QuizContext);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('medium');
  const [questionCount, setQuestionCount] = useState(5);

  const handleStartQuiz = async (e) => {
    e.preventDefault();

    const settings = {
      category: selectedCategory,
      difficulty: selectedDifficulty,
      limit: questionCount,
    };

    setQuizSettings(settings);

    const questionsData = await fetchquiz(settings);
    if (questionsData.length > 0) {
      setQuestions(questionsData);
      setGameState("quiz");
    } else {
      alert("Failed to load questions.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-teal-600 px-4">
      <form 
        onSubmit={handleStartQuiz} 
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md flex flex-col gap-4"
      >
        <h2 className="text-2xl font-bold text-center text-teal-700">Start Quiz</h2>

        <div className="flex flex-col">
          <label htmlFor="category" className="text-sm font-medium text-gray-700 mb-1">Category</label>
          <select
            name="category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="p-2 border rounded-md"
          >
            <option value="">-- Select Category --</option>
            <option value="general_knowledge">General Knowledge</option>
            <option value="arts_and_literature">Arts & Literature</option>
            <option value="film_and_tv">Film & TV</option>
            <option value="food_and_drink">Food & Drink</option>
            <option value="history">History</option>
            <option value="music">Music</option>
            <option value="science">Science</option>
            <option value="society_and_culture">Society & Culture</option>
            <option value="sport_and_leisure">Sport & Leisure</option>
            <option value="geography">Geography</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">Difficulty</label>
          <select
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value)}
            className="p-2 border rounded-md"
          >
            <option value="">Any</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">Number of Questions</label>
          <input
            type="number"
            min="1"
            max="20"
            value={questionCount}
            onChange={(e) => setQuestionCount(parseInt(e.target.value))}
            className="p-2 border rounded-md"
          />
        </div>

        <button
          type="submit"
          className="mt-4 bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 rounded-md transition-all duration-200"
        >
          Start Quiz
        </button>
      </form>
    </div>
  );
}

export default MainMenu;
