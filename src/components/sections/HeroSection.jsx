import { motion } from 'framer-motion';

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [-2, 2, -2],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="inicio" className="hero">
      <motion.div 
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={floatingVariants} animate="animate">
          <motion.h1 
            className="hero-title"
            variants={itemVariants}
          >
            Mostardinha: Uma Aventura Afetiva
          </motion.h1>
        </motion.div>

        <motion.p variants={itemVariants}>
          Descubra Temperópolis com personagens cativantes e lições de amor!
          Uma jornada musical que transforma corações através da sensibilidade.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="hero-cta"
        >
          <motion.a
            href="https://pay.hotmart.com/H100940670E"
            className="btn btn-primary btn-large"
            whileHover={{ 
              scale: 1.05,
              y: -5,
              boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            🎵 Comprar Agora por R$ 34,99
          </motion.a>

          <motion.button
            className="btn-play-preview"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              // Implementar preview do audiobook
              console.log('Play preview');
            }}
          >
            ▶️ Ouvir Preview
          </motion.button>
        </motion.div>

        <motion.div
          className="hero-features"
          variants={itemVariants}
        >
          <div className="feature-item">
            <span className="feature-icon">📖</span>
            <span>Livro Digital Interativo</span>
          </div>
          <div className="feature-item">
            <span className="feature-icon">🎵</span>
            <span>Trilha Sonora Original</span>
          </div>
          <div className="feature-item">
            <span className="feature-icon">🎭</span>
            <span>Personagens Únicos</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Elementos decorativos animados */}
      <div className="hero-decorations">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className={`floating-element element-${i + 1}`}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              rotate: [0, 180, 360],
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
          >
            {['🍃', '✨', '🎵', '💫', '🌟'][i]}
          </motion.div>
        ))}
      </div>

      <style jsx>{`
        .hero-cta {
          display: flex;
          gap: var(--spacing-lg);
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
        }

        .btn-play-preview {
          background: rgba(255, 255, 255, 0.2);
          border: 2px solid rgba(255, 255, 255, 0.3);
          color: white;
          padding: var(--spacing-sm) var(--spacing-lg);
          border-radius: var(--radius-full);
          font-family: var(--font-heading);
          font-weight: 600;
          cursor: pointer;
          transition: var(--transition-smooth);
          backdrop-filter: blur(10px);
        }

        .btn-play-preview:hover {
          background: rgba(255, 255, 255, 0.3);
          border-color: rgba(255, 255, 255, 0.5);
        }

        .hero-features {
          display: flex;
          justify-content: center;
          gap: var(--spacing-xl);
          margin-top: var(--spacing-xl);
          flex-wrap: wrap;
        }

        .feature-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--spacing-xs);
          background: rgba(255, 255, 255, 0.1);
          padding: var(--spacing-md);
          border-radius: var(--radius-lg);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .feature-icon {
          font-size: 2rem;
          margin-bottom: var(--spacing-xs);
        }

        .hero-decorations {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          overflow: hidden;
        }

        .floating-element {
          position: absolute;
          font-size: 2rem;
          opacity: 0.3;
        }

        .element-1 { top: 20%; left: 10%; }
        .element-2 { top: 30%; right: 15%; }
        .element-3 { bottom: 30%; left: 20%; }
        .element-4 { bottom: 20%; right: 10%; }
        .element-5 { top: 50%; left: 5%; }

        @media (max-width: 768px) {
          .hero-cta {
            flex-direction: column;
            gap: var(--spacing-md);
          }

          .hero-features {
            flex-direction: column;
            gap: var(--spacing-md);
          }

          .feature-item {
            flex-direction: row;
            justify-content: center;
            text-align: center;
          }

          .floating-element {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;