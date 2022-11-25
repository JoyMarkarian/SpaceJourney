import React, { useState } from 'react';
import './superQuizz.css'

export default function SuperQuizz({ setPath }) {
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: "What is the capital of France?",
      options: [
        { id: 0, text: "Brest", isCorrect: false },
        { id: 1, text: "New York (why not ?)", isCorrect: false },
        { id: 2, text: "Tours", isCorrect: false },
        { id: 3, text: "Paris", isCorrect: true },
      ],
    },
    {
      text: "What is the world food day?",
      options: [
        { id: 0, text: "16 Octobre", isCorrect: true },
        { id: 1, text: "25 Novembre", isCorrect: false },
        { id: 2, text: "16 Décembre", isCorrect: false },
        { id: 3, text: "25 Octobre", isCorrect: false },
      ],
    },
    {
      text: "What is the fastest object on earth?",
      options: [
        { id: 0, text: "a manhole cover", isCorrect: true },
        { id: 1, text: "a plane", isCorrect: false },
        { id: 2, text: "man running for his survival", isCorrect: false },
        { id: 3, text: "a very fast rocket", isCorrect: false },
      ],
    },
    {
      text: "Who is the best former of the Wild Code School?",
      options: [
        { id: 0, text: "Anthony Gorsky", isCorrect: false },
        { id: 1, text: "Julien richard", isCorrect: true },
        { id: 2, text: "Jean-François Morin", isCorrect: false },
        { id: 3, text: "D answer", isCorrect: false },
      ],
    },
    {
      text: "What was the previous D answer?",
      options: [
        { id: 0, text: "D answer", isCorrect: true },
        { id: 1, text: "D answer", isCorrect: true },
        { id: 2, text: "D answer", isCorrect: true },
        { id: 3, text: "D answer", isCorrect: true },
      ],
    },
  ];

  // Helper Functions

  /* A possible answer was clicked */
  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  /* Resets the game back to default */
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };
  return (
    <div>
        {/* 1. Header  */}
        <h1>SuperQuizz</h1>
        {/* 2. Current Score  */}
        <h2>Score: {score}</h2>

        {/* 3. Show results or show the question game  */}
        {showResults ? (
        /* 4. Final Results */
        <div className="final-results">
            <h1>Final Results</h1>
            <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
            </h2>
            <button className='buttonQuizz' onClick={() => restartGame()}>Restart game</button>
        </div>
        ) : (
        /* 5. Question Card  */
        <div className="question-card">
            {/* Current Question  */}
            <h2>
            Question: {currentQuestion + 1} out of {questions.length}
            </h2>
            <h3 className="question-text">{questions[currentQuestion].text}</h3>

            {/* List of possible answers  */}
            <ul>
            {questions[currentQuestion].options.map((option) => {
                return (
                <li
                    key={option.id}
                    onClick={() => optionClicked(option.isCorrect)}
                >
                    {option.text}
                </li>
                );
            })}
            </ul>
        </div>
        )}
        { score === 5 ? <div>
                <h3>Wow, i'm impress by D answer</h3>
                <button onClick={() => setPath('/AreYou')}>Next</button>
                </div> : ""}
    </div>
  )
}

