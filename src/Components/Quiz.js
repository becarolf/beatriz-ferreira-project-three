import { useEffect, useState } from "react";

const Quiz = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [questionsControl, setQuestionsControl] = useState([]);
  const [answer, setAnswer] = useState(null);

  const setNewQuestion = (questions) => {
    if (questions && questions.length > 0) {
      const questionIndex = Math.floor(Math.random() * questions.length);
      setCurrentQuestion(questions[questionIndex]);

      const tempQuestions = [...questions];
      tempQuestions.splice(questionIndex, 1);
      setQuestionsControl(tempQuestions);
      setAnswer(null);
    }
  };

  useEffect(() => {
    setNewQuestion(questions);
  }, [questions]);

  const handleAnswer = (e) => {
    const userAnswer = e.target.innerText;
    setAnswer(userAnswer === currentQuestion.answer);
  };

  const handleNext = () => {
    if (!questionsControl.length) {
      alert("No more questions");
      return;
    }
    setNewQuestion(questionsControl);
  };

  return (
    <div className="quiz-container">
      <h2>{currentQuestion.question}</h2>
      <div
        className={`${
          answer === true
            ? "right-answer"
            : answer === false
            ? "wrong-answer"
            : ""
        } button-container`}
      >
        <button disabled={answer !== null} onClick={handleAnswer}>
          {currentQuestion.option1}
        </button>
        <button disabled={answer !== null} onClick={handleAnswer}>
          {currentQuestion.option2}
        </button>
        <button disabled={answer !== null} onClick={handleAnswer}>
          {currentQuestion.option3}
        </button>
      </div>
      <div className="answer-container">
        {answer !== null ? (
          <button className="next-button" onClick={handleNext}>
            NEXT
          </button>
        ) : null}

        {answer === true ? (
          <div className="youtube">
            <iframe
              width="560"
              height="315"
              src={currentQuestion.lyricsVideo}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Quiz;
