// quizData.js - Quizzes database for Lab 5
export const quizzes = [
  {
    id: 'react-hooks',
    title: 'React Hooks Quiz',
    description: 'Test your understanding of React hooks (useState, useEffect, useContext).',
    questions: [
      {
        question: 'What is ReactJS?',
        answers: [
          'A JavaScript library for building user interfaces',
          'A programming language',
          'A database management system',
        ],
        correctAnswer: 'A JavaScript library for building user interfaces',
      },
      {
        question: 'What is JSX?',
        answers: [
          'A programming language',
          'A file format',
          'A syntax extension for JavaScript',
        ],
        correctAnswer: 'A syntax extension for JavaScript',
      },
      {
        question: 'Which hook is used to manage state in a functional React component?',
        answers: ['useEffect', 'useContext', 'useState'],
        correctAnswer: 'useState',
      },
      {
        question: 'What does the useEffect hook replace in class components?',
        answers: [
          'constructor and render',
          'componentDidMount, componentDidUpdate, and componentWillUnmount',
          'setState and forceUpdate',
        ],
        correctAnswer: 'componentDidMount, componentDidUpdate, and componentWillUnmount',
      },
      {
        question: 'What is the correct way to pass data from a parent to a child component in React?',
        answers: [
          'Using state',
          'Using props',
          'Using context only',
        ],
        correctAnswer: 'Using props',
      },
    ]
  },
  {
    id: 'javascript-basics',
    title: 'JavaScript Essentials',
    description: 'Verify your proficiency with JS variables, arrays, scope, and basic functions.',
    questions: [
      {
        question: 'Which keyword is used to define a constant variable in JavaScript?',
        answers: ['var', 'let', 'const'],
        correctAnswer: 'const',
      },
      {
        question: 'Which of the following is correct to check equality of both value and type?',
        answers: ['==', '===', 'equals'],
        correctAnswer: '===',
      },
      {
        question: 'How do you create a function in JavaScript?',
        answers: [
          'function myFunction()',
          'function:myFunction()',
          'def myFunction()',
        ],
        correctAnswer: 'function myFunction()',
      },
      {
        question: 'How do you add an element to the end of an array?',
        answers: ['pop()', 'push()', 'shift()'],
        correctAnswer: 'push()',
      },
    ]
  },
  {
    id: 'html-css',
    title: 'HTML & CSS Fundamentals',
    description: 'Standard CSS selectors, HTML semantic structure, and flexbox properties.',
    questions: [
      {
        question: 'What does CSS stand for?',
        answers: [
          'Creative Style Sheets',
          'Computer Style Sheets',
          'Cascading Style Sheets',
        ],
        correctAnswer: 'Cascading Style Sheets',
      },
      {
        question: 'Which HTML element is used to define the most important heading?',
        answers: ['<h6>', '<head>', '<h1>'],
        correctAnswer: '<h1>',
      },
      {
        question: 'Which property is used in CSS to change the background color?',
        answers: ['color', 'background-color', 'bgcolor'],
        correctAnswer: 'background-color',
      },
    ]
  }
];
