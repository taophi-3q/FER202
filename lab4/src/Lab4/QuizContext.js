// QuizContext.js - useContext Hook to share quiz state across components
import React, { createContext, useContext, useState } from 'react';
import { quizData } from './quizData';

// Create Context
const QuizContext = createContext();

// Custom Hook to consume QuizContext
export function useQuiz() {
  return useContext(QuizContext);
}

// Context Provider component
export function QuizProvider({ children }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);

  const handleSelectAnswer = (answer) => {
    if (answered) return;
    setSelectedAnswer(answer);
    const correct = answer === quizData[currentQuestion].correctAnswer;
    setIsCorrect(correct);
    setAnswered(true);
    if (correct) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion + 1 < quizData.length) {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedAnswer(null);
      setAnswered(false);
      setIsCorrect(null);
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResult(false);
    setAnswered(false);
    setIsCorrect(null);
  };

  const value = {
    questions: quizData,
    currentQuestion,
    selectedAnswer,
    score,
    showResult,
    answered,
    isCorrect,
    handleSelectAnswer,
    handleNextQuestion,
    handleRestart,
  };

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
}
