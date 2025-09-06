import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CharacterGallery = () => {
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const characters = [
    {
      id: 1,
      name: 'Mostardinha',
      image: '/assets/images/Mostardinha(2).png',
      description: 'O protagonista da nossa história! Um grão pequeno mas gigante em amor e determinação.',
      traits: ['Corajoso', 'Sensível', 'Determinado'],
      color: '#FFD700'
    },
    {
      id: 2,
      name: 'Catchup',
      image: '/assets/images/catchup.png',
      description: 'O melhor amigo do Mostardinha, sempre presente nas aventuras.',
      traits: ['Leal', 'Divertido', 'Aventureiro'],
      color: '#FF6B6B'
    },
    {
      id: 3,
      name: 'Alho',
      image: '/assets/images/alho.png',
      description: 'Sábio e experiente, sempre tem uma lição valiosa para compartilhar.',
      traits: ['Sábio', 'Protetor', 'Conselheiro'],
      color: '#F7DC6F'
    },
    {
      id: 4,
      name: 'Dona Formiga',
      image: '/assets/images/dona_formiga.png',
      description: 'Trabalhadora e organizada, ela ensina sobre a importância da colaboração.',
      traits: ['Trabalhadora', 'Organizada', 'Colaborativa'],
      color: '#D2691E'
    },
    {
      id: 5,
      name: 'Cigarra',
      image: '/assets/images/cigarra.png',
      description: 'Artista da natureza, ela traz música e alegria para Temperópolis.',
      traits: ['Musical', 'Alegre', 'Artística'],
      color: '#90EE90'
    },
    {
      id: 6,
      name: 'Comandante',
      image: '/assets/images/comandante.png',
      description: 'Líder respeitado que guia os habitantes de Temperópolis com sabedoria.',
      traits: ['Líder', 'Justo', 'Respeitado'],
      color: '#4169E1'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="personagens" className="section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Conheça os Personagens
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Cada personagem de Temperópolis tem sua própria personalidade e lições especiais para ensinar!
        </motion.p>

        <motion.div
          className="character-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {characters.map((character) => (
            <motion.div
              key={character.id}
              className="character-card"
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                boxShadow: '0 20px 40px rgba(0,0,0,0.15)'
              }}
              onClick={() => setSelectedCharacter(character)}
              style={{ '--character-color': character.color }}
            >
              <div className="character-image-container">
                <img 
                  src={character.image} 
                  alt={character.name}
                  className="character-image"
                />
                <div className="character-glow"></div>
              </div>
              
              <div className="character-info">
                <h3 className="character-name">{character.name}</h3>
                <p className="character-preview">
                  {character.description.substring(0, 60)}...
                </p>
                <div className="character-traits">
                  {character.traits.slice(0, 2).map((trait, index) => (
                    <span key={index} className="trait-tag">
                      {trait}
                    </span>
                  ))}
                </div>
              </div>

              <div className="card-overlay">
                <span className="view-more">Ver Mais</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal de Personagem */}
        <AnimatePresence>
          {selectedCharacter && (
            <motion.div
              className="character-modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCharacter(null)}
            >
              <motion.div
                className="character-modal"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                style={{ '--character-color': selectedCharacter.color }}
              >
                <button
                  className="modal-close"
                  onClick={() => setSelectedCharacter(null)}
                >
                  ✕
                </button>

                <div className="modal-content">
                  <div className="modal-image">
                    <img 
                      src={selectedCharacter.image} 
                      alt={selectedCharacter.name}
                    />
                  </div>

                  <div className="modal-info">
                    <h3>{selectedCharacter.name}</h3>
                    <p>{selectedCharacter.description}</p>
                    
                    <div className="traits-section">
                      <h4>Características:</h4>
                      <div className="all-traits">
                        {selectedCharacter.traits.map((trait, index) => (
                          <span key={index} className="trait-tag-large">
                            {trait}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <style jsx>{`
        .character-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: var(--spacing-lg);
          margin-top: var(--spacing-xl);
        }

        .character-card {
          background: var(--white);
          border-radius: var(--radius-xl);
          overflow: hidden;
          box-shadow: var(--shadow-soft);
          cursor: pointer;
          transition: var(--transition-smooth);
          position: relative;
          border: 3px solid transparent;
        }

        .character-card:hover {
          border-color: var(--character-color);
        }

        .character-image-container {
          position: relative;
          height: 200px;
          background: linear-gradient(135deg, var(--character-color)20, var(--character-color)40);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .character-image {
          width: 120px;
          height: 120px;
          object-fit: cover;
          border-radius: var(--radius-full);
          z-index: 2;
          position: relative;
        }

        .character-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 150px;
          height: 150px;
          background: radial-gradient(circle, var(--character-color)30 0%, transparent 70%);
          border-radius: var(--radius-full);
          z-index: 1;
        }

        .character-info {
          padding: var(--spacing-lg);
        }

        .character-name {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--character-color);
          margin-bottom: var(--spacing-sm);
        }

        .character-preview {
          color: var(--gray-dark);
          margin-bottom: var(--spacing-md);
          line-height: 1.5;
        }

        .character-traits {
          display: flex;
          gap: var(--spacing-xs);
          flex-wrap: wrap;
        }

        .trait-tag {
          background: var(--character-color)20;
          color: var(--character-color);
          padding: var(--spacing-xs) var(--spacing-sm);
          border-radius: var(--radius-sm);
          font-size: 0.8rem;
          font-weight: 600;
        }

        .card-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, var(--character-color)90, var(--character-color)70);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: var(--transition-smooth);
        }

        .character-card:hover .card-overlay {
          opacity: 1;
        }

        .view-more {
          color: white;
          font-weight: 700;
          font-size: 1.2rem;
        }

        /* Modal Styles */
        .character-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10000;
          padding: var(--spacing-lg);
        }

        .character-modal {
          background: var(--white);
          border-radius: var(--radius-xl);
          max-width: 600px;
          width: 100%;
          max-height: 80vh;
          overflow-y: auto;
          position: relative;
          border: 3px solid var(--character-color);
        }

        .modal-close {
          position: absolute;
          top: var(--spacing-sm);
          right: var(--spacing-sm);
          background: var(--character-color);
          color: white;
          border: none;
          width: 40px;
          height: 40px;
          border-radius: var(--radius-full);
          cursor: pointer;
          font-size: 1.2rem;
          z-index: 10;
        }

        .modal-content {
          display: flex;
          flex-direction: column;
        }

        .modal-image {
          background: linear-gradient(135deg, var(--character-color)20, var(--character-color)40);
          padding: var(--spacing-xl);
          text-align: center;
        }

        .modal-image img {
          width: 150px;
          height: 150px;
          border-radius: var(--radius-full);
          object-fit: cover;
          border: 4px solid white;
          box-shadow: var(--shadow-medium);
        }

        .modal-info {
          padding: var(--spacing-xl);
        }

        .modal-info h3 {
          color: var(--character-color);
          font-size: 2rem;
          margin-bottom: var(--spacing-md);
        }

        .modal-info p {
          font-size: 1.1rem;
          line-height: 1.6;
          margin-bottom: var(--spacing-lg);
        }

        .traits-section h4 {
          margin-bottom: var(--spacing-md);
          color: var(--gray-dark);
        }

        .all-traits {
          display: flex;
          gap: var(--spacing-sm);
          flex-wrap: wrap;
        }

        .trait-tag-large {
          background: var(--character-color);
          color: white;
          padding: var(--spacing-sm) var(--spacing-md);
          border-radius: var(--radius-md);
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .character-grid {
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: var(--spacing-md);
          }

          .modal-content {
            padding: var(--spacing-sm);
          }
        }
      `}</style>
    </section>
  );
};

export default CharacterGallery;