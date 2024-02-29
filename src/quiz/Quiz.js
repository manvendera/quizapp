import React, { useState } from 'react';

const questions = [
    {
        id: 1,
        question: 'Which language is often used for creating web pages?',
        options: ['HTML', 'CSS', 'JavaScript', 'Python'],
        answer: 'HTML'
      },
      {
        id: 2,
        question: 'Which programming language is known for its use in machine learning and data science?',
        options: ['Java', 'C++', 'Python', 'JavaScript'],
        answer: 'Python'
      },
      {
        id: 3,
        question: 'Which language is often used for building dynamic and interactive websites?',
        options: ['HTML', 'CSS', 'JavaScript', 'Python'],
        answer: 'JavaScript'
      },
      {
        id: 4,
        question: 'Which language is considered a high-level programming language?',
        options: ['Assembly', 'C', 'Python', 'Java'],
        answer: 'Python'
      },
      {
        id: 5,
        question: 'Which language is often used for server-side programming?',
        options: ['JavaScript', 'Ruby', 'PHP', 'Swift'],
        answer: 'PHP'
      },
      {
        id: 6,
        question: 'Which language is often used for developing Android applications?',
        options: ['Java', 'Python', 'C#', 'Kotlin'],
        answer: 'Java'
      },
      {
        id: 7,
        question: 'Which language is used for creating stylish and responsive web designs?',
        options: ['HTML', 'CSS', 'JavaScript', 'Ruby'],
        answer: 'CSS'
      },
      {
        id: 8,
        question: 'Which language is known for its use in system programming and operating systems?',
        options: ['C', 'Python', 'JavaScript', 'Java'],
        answer: 'C'
      },
      {
        id: 9,
        question: 'Which language is often used for scripting and automation?',
        options: ['Java', 'Python', 'C#', 'Swift'],
        answer: 'Python'
      },
      {
        id: 10,
        question: 'Which language is often used for game development?',
        options: ['C++', 'Python', 'JavaScript', 'Ruby'],
        answer: 'C++'
      }
  // Add more questions here
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  
  const handleAnswerOptionClick = (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md">
        {showScore ? (
          <div>
            <h2 className="text-2xl mb-4">You scored {score} out of {questions.length}!</h2>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={() => {
                setCurrentQuestion(0);
                setScore(0);
                setShowScore(false);
              }}
            >
              Restart Quiz
            </button>
          </div>
        ) : (
          <div>
            <h2 className="text-2xl mb-4">{questions[currentQuestion].question}</h2>
            <div>
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  className="bg-blue-500 text-white px-4 py-2 rounded mr-2 mb-2"
                  onClick={() => handleAnswerOptionClick(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
