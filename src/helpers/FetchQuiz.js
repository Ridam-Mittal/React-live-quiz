import axios from 'axios';

export const fetchquiz = async ({ category, difficulty, limit }) => {
  const url = 'https://the-trivia-api.com/v2/questions';

  try {
    const response = await axios.get(url, {
      params: {
        categories: category,
        difficulty,
        limit,
        type: 'multiple_choice'
      }
    });

    const questionset = response.data.map((q) => ({
      text: q.question.text,
      options: [...q.incorrectAnswers, q.correctAnswer].sort(() => Math.random() - 0.5),
      answer: q.correctAnswer
    }));

    console.log("API Response:", questionset[0].text);
    return questionset;

  } catch (err) {
    console.error("Error fetching quiz questions:", err);
    return [];
  }
};
