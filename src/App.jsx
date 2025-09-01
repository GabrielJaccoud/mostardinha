import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './App.css';

const App = () => {
  const [volume, setVolume] = useState(50);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = React.useRef(null);

  useEffect(() => {
    audioRef.current = new Audio('/assets/temamostardinha.wav');
    audioRef.current.loop = true;
    audioRef.current.volume = volume / 100;
  }, []);

  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    audioRef.current.volume = newVolume / 100;
  };

  return (
    <div className="app">
      {/* Nav */}
      <nav className="fixed-nav">
        <div className="container">
          <div className="nav-content">
            <a href="#inicio" className="nav-logo">
              <img src="/assets/images/Mostardinha(2).png" alt="Mostardinha" className="nav-logo-img" />
              <span className="nav-logo-text">Mostardinha</span>
            </a>
            <ul className="nav-menu">
              <li><a href="#inicio" className="nav-link">Início</a></li>
              <li><a href="#historia" className="nav-link">História</a></li>
              <li><a href="#personagens" className="nav-link">Personagens</a></li>
              <li><a href="#musicas" className="nav-link">Músicas</a></li>
              <li><a href="#vozes" className="nav-link">Vozes</a></li>
              <li><a href="#bastidores" className="nav-link">Bastidores</a></li>
              <li><a href="#audiobook" className="nav-link">Audiobook</a></li>
              <li><a href="#quiz" className="nav-link">Quiz</a></li>
              <li><a href="#newsletter" className="nav-link">Newsletter</a></li>
            </ul>
            <div className="nav-cta">
              <a href="https://pay.hotmart.com/H100940670E" className="btn btn-primary btn-small">Comprar por R$ 34,99</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Audio Player */}
      <div className="audio-player-fixed">
        <div className="audio-player-content">
          <div className="audio-info">
            <span className="audio-icon-animated">🎵</span>
            <span className="audio-title">Trilha do Mostardinha</span>
          </div>
          <div className="audio-controls">
            <button className="audio-btn-fixed" onClick={toggleAudio}>
              <span className="audio-icon-btn">{isPlaying ? '⏸️' : '▶️'}</span>
            </button>
            <input type="range" className="volume-slider" min="0" max="100" value={volume} onChange={handleVolumeChange} />
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section id="inicio" className="hero">
        <motion.div className="hero-content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <h1 className="hero-title">Mostardinha: Uma Aventura Afetiva</h1>
          <p>Descubra Temperópolis com personagens cativantes e lições de amor!</p>
          <a href="https://pay.hotmart.com/H100940670E" className="btn btn-primary btn-large">Comprar Agora</a>
        </motion.div>
      </section>

      {/* Outras Seções - Adicionei placeholders baseados no seu código original */}
      <section id="historia" className="section">
        <h2>História</h2>
        <p>Uma história encantadora sobre um grão pequeno mas gigante em amor...</p>
      </section>

      {/* Quiz Dinâmico (Exemplo Gamificado) */}
      <section id="quiz" className="section quiz-section">
        <h2>Quiz Divertido</h2>
        <QuizComponent /> {/* Componente separado abaixo */}
      </section>

      {/* Newsletter */}
      <section id="newsletter" className="section newsletter-section">
        <h2>Assine Nossa Newsletter</h2>
        <form className="newsletter-form">
          <input type="email" placeholder="Seu email" required />
          <button type="submit" className="btn btn-primary">Assinar</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Gabriel Jaccoud. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

// Componente Quiz Exemplo
const QuizComponent = () => {
  const [score, setScore] = useState(0);
  return (
    <div>
      <p>Pergunta: Quem é o Mostardinha?</p>
      <button onClick={() => setScore(score + 1)}>Resposta Certa</button>
      <p>Pontuação: {score}</p>
    </div>
  );
};

export default App;
