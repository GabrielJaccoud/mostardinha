import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const InteractiveQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [quizComplete, setQuizComplete] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15);
  const [isActive, setIsActive] = useState(false);

  const questions = [
    {
      question: "Quem é o protagonista principal da história?",
      options: ["Catchup", "Mostardinha", "Alho", "Dona Formiga"],
      correct: 1,
      explanation: "Mostardinha é o grão pequeno mas gigante em amor que protagoniza nossa aventura!"
    },
    {
      question: "Em que lugar se passa a história do Mostardinha?",
      options: ["Condimentópolis", "Temperópolis", "Saborlândia", "Graolândia"],
      correct: 1,
      explanation: "Temperópolis é o reino mágico onde vivem todos os temperos e condimentos!"
    },
    {
      question: "Qual é a principal lição que o Mostardinha ensina?",
      options: ["A força física", "O poder do amor e sensibilidade", "A importância da riqueza", "A velocidade"],
      correct: 1,
      explanation: "A história mostra que o amor e a sensibilidade são mais poderosos que a força!"
    },
    {
      question: "Qual personagem é conhecido por ser sábio e conselheiro?",
      options: ["Cigarra", "Alho", "Catchup", "Comandante"],
      correct: 1,
      explanation: "O Alho é o personagem experiente que sempre tem conselhos sábios para dar!"
    },
    {
      question: "O que torna o livro especial além da história?",
      options: ["Apenas as imagens", "Trilha sonora e interatividade", "Somente o texto", "As cores"],
      correct: 1,
      explanation: "O Mostardinha é uma experiência completa com trilha sonora original e elementos interativos!"
    }
  ];

  const scoreRanges = [
    { min: 0, max: 1, title: "Iniciante", message: "Que tal conhecer melhor o mundo do Mostardinha? 🌱", color: "#ff6b6b" },
    { min: 2, max: 3, title: "Explorador", message: "Você já conhece alguns segredos de Temperópolis! 🌟", color: "#ffd93d" },
    { min: 4, max: 5, title: "Mestre", message: "Parabéns! Você é um verdadeiro especialista em Mostardinha! 🎉", color: "#6bcf7f" }
  ];

  // Timer effect
  useEffect(() => {
    let interval = null;
    if (isActive && timeLeft > 0 && !showResult) {
      interval = setInterval(() => {
        setTimeLeft(time => time - 1);
      }, 1000);
    } else if (timeLeft === 0 && !showResult) {
      handleTimeout();
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft, showResult]);

  const startQuiz = () => {
    setIsActive(true);
    setCurrentQuestion(0);
    setScore(0);
    setQuizComplete(false);
    setTimeLeft(15);
  };

  const handleTimeout = () => {
    setSelectedAnswer(null);
    setShowResult(true);
    setTimeout(() => {
      nextQuestion();
    }, 2000);
  };

  const selectAnswer = (answerIndex) => {
    if (showResult) return;
    
    setSelectedAnswer(answerIndex);
    setShowResult(true);
    
    if (answerIndex === questions[currentQuestion].correct) {
      setScore(score + 1);
    }

    setTimeout(() => {
      nextQuestion();
    }, 3000);
  };

  const nextQuestion = () => {
    setShowResult(false);
    setSelectedAnswer(null);
    
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setTimeLeft(15);
    } else {
      setQuizComplete(true);
      setIsActive(false);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setQuizComplete(false);
    setTimeLeft(15);
    setIsActive(true);
  };

  const getCurrentScoreRange = () => {
    return scoreRanges.find(range => score >= range.min && score <= range.max);
  };

  if (!isActive && !quizComplete) {
    return (
      <section id="quiz" className="section quiz-section">
        <div className="container">
          <motion.div
            className="quiz-start"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Quiz do Mostardinha</h2>
            <p>Teste seus conhecimentos sobre o mundo mágico de Temperópolis!</p>
            
            <div className="quiz-info">
              <div className="info-item">
                <span className="info-icon">🎯</span>
                <div>
                  <strong>5 Perguntas</strong>
                  <p>Sobre personagens e história</p>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon">⏰</span>
                <div>
                  <strong>15 segundos</strong>
                  <p>Por pergunta</p>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon">🏆</span>
                <div>
                  <strong>Certificado</strong>
                  <p>Para mestres do Mostardinha</p>
                </div>
              </div>
            </div>

            <motion.button
              className="btn btn-primary btn-large"
              onClick={startQuiz}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              🎮 Começar Quiz
            </motion.button>
          </motion.div>
        </div>
      </section>
    );
  }

  if (quizComplete) {
    const scoreRange = getCurrentScoreRange();
    
    return (
      <section id="quiz" className="section quiz-section">
        <div className="container">
          <motion.div
            className="quiz-complete"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="result-header">
              <motion.div
                className="score-circle"
                style={{ '--score-color': scoreRange.color }}
                animate={{ rotate: 360 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <span className="score-number">{score}</span>
                <span className="score-total">/{questions.length}</span>
              </motion.div>
              
              <h2 style={{ color: scoreRange.color }}>{scoreRange.title}</h2>
              <p>{scoreRange.message}</p>
            </div>

            {score >= 4 && (
              <motion.div
                className="certificate"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                <h3>🎖️ Certificado de Mestre</h3>
                <p>Você conquistou o título de <strong>Mestre do Mostardinha</strong>!</p>
                <div className="certificate-badge">
                  ⭐ ESPECIALISTA EM TEMPERÓPOLIS ⭐
                </div>
              </motion.div>
            )}

            <div className="result-actions">
              <motion.button
                className="btn btn-primary"
                onClick={restartQuiz}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                🔄 Tentar Novamente
              </motion.button>
              
              <motion.a
                href="https://pay.hotmart.com/H100940670E"
                className="btn btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                📚 Conhecer Mais a História
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="quiz" className="section quiz-section">
      <div className="container">
        <div className="quiz-container">
          {/* Header do Quiz */}
          <div className="quiz-header">
            <div className="progress-bar">
              <motion.div
                className="progress-fill"
                initial={{ width: 0 }}
                animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
            
            <div className="quiz-info-bar">
              <span>Pergunta {currentQuestion + 1} de {questions.length}</span>
              <div className="timer">
                <motion.div
                  className="timer-circle"
                  animate={{ scale: timeLeft <= 5 ? [1, 1.2, 1] : 1 }}
                  transition={{ duration: 0.5, repeat: timeLeft <= 5 ? Infinity : 0 }}
                >
                  ⏰ {timeLeft}s
                </motion.div>
              </div>
              <span>Pontuação: {score}</span>
            </div>
          </div>

          {/* Pergunta */}
          <motion.div
            className="question-container"
            key={currentQuestion}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="question">{questions[currentQuestion].question}</h3>
            
            <div className="options-grid">
              {questions[currentQuestion].options.map((option, index) => (
                <motion.button
                  key={index}
                  className={`option-btn ${
                    showResult && index === questions[currentQuestion].correct
                      ? 'correct'
                      : showResult && index === selectedAnswer && index !== questions[currentQuestion].correct
                      ? 'incorrect'
                      : selectedAnswer === index
                      ? 'selected'
                      : ''
                  }`}
                  onClick={() => selectAnswer(index)}
                  disabled={showResult}
                  whileHover={!showResult ? { scale: 1.02, y: -2 } : {}}
                  whileTap={!showResult ? { scale: 0.98 } : {}}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className="option-letter">{String.fromCharCode(65 + index)}</span>
                  <span className="option-text">{option}</span>
                  {showResult && index === questions[currentQuestion].correct && (
                    <span className="result-icon">✅</span>
                  )}
                  {showResult && index === selectedAnswer && index !== questions[currentQuestion].correct && (
                    <span className="result-icon">❌</span>
                  )}
                </motion.button>
              ))}
            </div>

            <AnimatePresence>
              {showResult && (
                <motion.div
                  className="explanation"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <p>💡 <strong>Explicação:</strong> {questions[currentQuestion].explanation}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .quiz-section {
          background: var(--gradient-nature);
          min-height: 100vh;
          display: flex;
          align-items: center;
        }

        .quiz-start {
          text-align: center;
          color: white;
          max-width: 600px;
          margin: 0 auto;
        }

        .quiz-info {
          display: flex;
          justify-content: center;
          gap: var(--spacing-xl);
          margin: var(--spacing-xl) 0;
          flex-wrap: wrap;
        }

        .info-item {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
          background: rgba(255, 255, 255, 0.1);
          padding: var(--spacing-md);
          border-radius: var(--radius-lg);
          backdrop-filter: blur(10px);
        }

        .info-icon {
          font-size: 2rem;
        }

        .quiz-container {
          max-width: 800px;
          margin: 0 auto;
          background: rgba(255, 255, 255, 0.95);
          border-radius: var(--radius-xl);
          padding: var(--spacing-xl);
          box-shadow: var(--shadow-strong);
        }

        .quiz-header {
          margin-bottom: var(--spacing-xl);
        }

        .progress-bar {
          width: 100%;
          height: 8px;
          background: var(--gray-light);
          border-radius: var(--radius-full);
          overflow: hidden;
          margin-bottom: var(--spacing-md);
        }

        .progress-fill {
          height: 100%;
          background: var(--gradient-warm);
          transition: var(--transition-smooth);
        }

        .quiz-info-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-weight: 600;
        }

        .timer {
          display: flex;
          align-items: center;
        }

        .timer-circle {
          background: var(--orange-warm);
          color: white;
          padding: var(--spacing-xs) var(--spacing-sm);
          border-radius: var(--radius-full);
          font-weight: 700;
        }

        .question {
          font-size: 1.5rem;
          margin-bottom: var(--spacing-xl);
          text-align: center;
          color: var(--gray-dark);
        }

        .options-grid {
          display: grid;
          gap: var(--spacing-md);
          margin-bottom: var(--spacing-lg);
        }

        .option-btn {
          display: flex;
          align-items: center;
          gap: var(--spacing-md);
          padding: var(--spacing-md) var(--spacing-lg);
          background: white;
          border: 2px solid var(--gray-medium);
          border-radius: var(--radius-lg);
          cursor: pointer;
          transition: var(--transition-smooth);
          text-align: left;
          font-size: 1rem;
          position: relative;
        }

        .option-btn:hover:not(:disabled) {
          border-color: var(--yellow-primary);
          box-shadow: var(--shadow-soft);
        }

        .option-btn.selected {
          border-color: var(--yellow-primary);
          background: var(--yellow-light);
        }

        .option-btn.correct {
          border-color: var(--green-nature);
          background: #e8f5e8;
        }

        .option-btn.incorrect {
          border-color: #ff6b6b;
          background: #ffe8e8;
        }

        .option-letter {
          width: 32px;
          height: 32px;
          background: var(--gray-medium);
          border-radius: var(--radius-full);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          flex-shrink: 0;
        }

        .option-btn.correct .option-letter {
          background: var(--green-nature);
          color: white;
        }

        .option-btn.incorrect .option-letter {
          background: #ff6b6b;
          color: white;
        }

        .option-text {
          flex: 1;
        }

        .result-icon {
          font-size: 1.2rem;
          margin-left: auto;
        }

        .explanation {
          background: var(--gray-light);
          padding: var(--spacing-lg);
          border-radius: var(--radius-lg);
          margin-top: var(--spacing-lg);
        }

        .quiz-complete {
          text-align: center;
          color: white;
          max-width: 600px;
          margin: 0 auto;
        }

        .score-circle {
          width: 120px;
          height: 120px;
          border-radius: var(--radius-full);
          background: var(--score-color);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin: 0 auto var(--spacing-lg);
          box-shadow: var(--shadow-strong);
        }

        .score-number {
          font-size: 2.5rem;
          font-weight: 800;
          color: white;
        }

        .score-total {
          font-size: 1rem;
          color: white;
          opacity: 0.9;
        }

        .certificate {
          background: rgba(255, 255, 255, 0.1);
          padding: var(--spacing-xl);
          border-radius: var(--radius-lg);
          margin: var(--spacing-xl) 0;
          border: 2px solid rgba(255, 215, 0, 0.5);
        }

        .certificate-badge {
          background: linear-gradient(45deg, #ffd700, #ffed4e);
          color: var(--black);
          padding: var(--spacing-sm) var(--spacing-lg);
          border-radius: var(--radius-full);
          font-weight: 700;
          margin-top: var(--spacing-md);
          display: inline-block;
        }

        .result-actions {
          display: flex;
          gap: var(--spacing-lg);
          justify-content: center;
          margin-top: var(--spacing-xl);
          flex-wrap: wrap;
        }

        .btn-secondary {
          background: rgba(255, 255, 255, 0.2);
          color: white;
          border: 2px solid rgba(255, 255, 255, 0.3);
        }

        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.3);
          border-color: rgba(255, 255, 255, 0.5);
        }

        @media (max-width: 768px) {
          .quiz-info {
            flex-direction: column;
            align-items: center;
          }

          .quiz-info-bar {
            flex-direction: column;
            gap: var(--spacing-sm);
            text-align: center;
          }

          .result-actions {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </section>
  );
};

export default InteractiveQuiz;