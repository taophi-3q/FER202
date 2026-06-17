import { useState } from "react";
import Quiz from "./components/Quiz";
import { QuizContext } from "./context/QuizContext";
import "./App.css";

function App() {
  const [selectedAnswers, setSelectedAnswers] = useState({});

  return (
    <QuizContext.Provider
      value={{
        selectedAnswers,
        setSelectedAnswers,
      }}
    >
      <div className="app">
        <Quiz />
      </div>
    </QuizContext.Provider>
  );
}

export default App;
