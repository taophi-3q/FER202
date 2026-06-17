// quizData.js - Quiz data as specified in Lab 4 requirements
export const quizData = [
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
];
