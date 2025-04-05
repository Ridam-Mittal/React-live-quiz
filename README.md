# React Custom Quiz App

A responsive and interactive Quiz Application built using **React.js** and **Tailwind CSS**. This project allows users to take a quiz, keep track of their scores, and review their answers at the end.

## 🚀 Features

- Start quiz with custom properties - category, difficulty, number of questions.
- Answer multiple-choice questions
- Instant scoring
- Review answers with indication of correctness
- Smooth transitions between components
- Responsive and modern UI using Tailwind CSS

## 📦 Tech Stack

- **Frontend**: React.js, Context API
- **Styling**: Tailwind CSS (fully responsive and utility-first design)
- **Bundler**: Vite

## 🧠 Components Overview

### App.jsx

- Root component containing the game state and global context provider
- Renders: MainMenu, Quiz, EndScreen based on `gameState`

### MainMenu.jsx

- Lets users start the quiz (can be extended to include settings)

### Quiz.jsx

- Displays quiz questions and handles answer selection logic

### EndScreen.jsx

- Displays the score
- Button to restart the quiz (returns to MainMenu)
- Button to review questions and answers
- Scrollable UI for answer review section

### helpers/Context.js

- Provides a central context for sharing quiz state across components

## 🛠 Setup Instructions

1. **Clone the repository**

```bash
https://github.com/your-username/quiz-app.git
cd quiz-app
```

2. **Install dependencies**

```bash
npm install
```

3. **Setup Tailwind CSS**

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

4. **Configure Tailwind**
   Edit `tailwind.config.js`:

```js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

5. **Import Tailwind in CSS**
   Create or modify `src/styles.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

6. **Include styles in App**
   Import `styles.css` in `main.jsx`:

```js
import './styles.css';
```

7. **Run the app**

```bash
npm run dev
```

## 📝 Usage

- Visit the homepage
- Click "Start Quiz" (MainMenu)
- Answer questions (Quiz)
- View results and review your answers (EndScreen)
- Return to home using the "Home" button

##
