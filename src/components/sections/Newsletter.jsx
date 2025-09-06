import { useState } from 'react';
import { motion } from 'framer-motion';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simular envio (aqui você integraria com um serviço real)
    setTimeout(() => {
      setIsLoading(false);
      setIsSubscribed(true);
      setEmail('');
      setName('');
      
      // Reset após 5 segundos
      setTimeout(() => {
        setIsSubscribed(false);
      }, 5000);
    }, 2000);
  };

  const benefits = [
    {
      icon: '📚',
      title: 'Histórias Exclusivas',
      description: 'Conteúdos inéditos do mundo de Temperópolis'
    },
    {
      icon: '🎵',
      title: 'Músicas Bônus',
      description: 'Trilhas sonoras especiais e making-of'
    },
    {
      icon: '🎁',
      title: 'Promoções',
      description: 'Descontos especiais e lançamentos antecipados'
    },
    {
      icon: '🎨',
      title: 'Atividades',
      description: 'Desenhos para colorir e jogos educativos'
    }
  ];

  if (isSubscribed) {
    return (
      <section id="newsletter" className="section newsletter-section">
        <div className="container">
          <motion.div
            className="success-message"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="success-icon"
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 1, repeat: 1 }}
            >
              🎉
            </motion.div>
            <h2>Bem-vindo à família Mostardinha!</h2>
            <p>
              Obrigado por se inscrever! Em breve você receberá conteúdos exclusivos 
              e aventuras especiais de Temperópolis diretamente no seu e-mail.
            </p>
            <div className="welcome-gift">
              <h3>🎁 Presente de Boas-vindas</h3>
              <p>Você receberá um wallpaper exclusivo do Mostardinha!</p>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="newsletter" className="section newsletter-section">
      <div className="container">
        <div className="newsletter-content">
          <motion.div
            className="newsletter-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Junte-se à Aventura!</h2>
            <p>
              Receba conteúdos exclusivos, atividades educativas e seja o primeiro 
              a saber sobre novas aventuras do Mostardinha!
            </p>

            <div className="benefits-grid">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="benefit-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="benefit-icon">{benefit.icon}</span>
                  <div>
                    <h4>{benefit.title}</h4>
                    <p>{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="newsletter-right"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="form-container">
              <div className="form-header">
                <h3>📧 Assine Nossa Newsletter</h3>
                <p>É grátis e você pode cancelar quando quiser!</p>
              </div>

              <form onSubmit={handleSubmit} className="newsletter-form">
                <div className="input-group">
                  <label htmlFor="name">Nome</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Seu nome"
                    required
                    className="form-input"
                  />
                  <span className="input-icon">👤</span>
                </div>

                <div className="input-group">
                  <label htmlFor="email">E-mail</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="seu@email.com"
                    required
                    className="form-input"
                  />
                  <span className="input-icon">✉️</span>
                </div>

                <motion.button
                  type="submit"
                  className="btn btn-primary btn-full"
                  disabled={isLoading}
                  whileHover={!isLoading ? { scale: 1.02, y: -2 } : {}}
                  whileTap={!isLoading ? { scale: 0.98 } : {}}
                >
                  {isLoading ? (
                    <motion.div
                      className="loading-spinner"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    >
                      🔄
                    </motion.div>
                  ) : (
                    '🚀 Quero Receber Novidades!'
                  )}
                </motion.button>

                <div className="form-footer">
                  <p>
                    🔒 Seus dados estão seguros. Não enviamos spam e você pode 
                    cancelar a qualquer momento.
                  </p>
                </div>
              </form>

              <div className="social-proof">
                <div className="subscriber-count">
                  <span className="count-number">1,000+</span>
                  <span className="count-text">famílias já fazem parte!</span>
                </div>
                <div className="testimonial">
                  <p>"Minha filha adora as atividades que chegam por e-mail!"</p>
                  <span>- Maria, mãe de Sofia (6 anos)</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .newsletter-section {
          background: var(--gray-dark);
          color: var(--white);
          position: relative;
          overflow: hidden;
        }

        .newsletter-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 80%, rgba(255, 215, 0, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(156, 39, 176, 0.1) 0%, transparent 50%);
        }

        .newsletter-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-xxl);
          align-items: center;
          position: relative;
          z-index: 2;
        }

        .newsletter-left h2 {
          color: var(--white);
          background: none;
          -webkit-text-fill-color: var(--white);
          margin-bottom: var(--spacing-lg);
        }

        .newsletter-left p {
          font-size: 1.2rem;
          opacity: 0.9;
          margin-bottom: var(--spacing-xl);
          line-height: 1.6;
        }

        .benefits-grid {
          display: grid;
          gap: var(--spacing-lg);
        }

        .benefit-item {
          display: flex;
          align-items: flex-start;
          gap: var(--spacing-md);
          background: rgba(255, 255, 255, 0.05);
          padding: var(--spacing-lg);
          border-radius: var(--radius-lg);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .benefit-icon {
          font-size: 2rem;
          flex-shrink: 0;
        }

        .benefit-item h4 {
          color: var(--yellow-light);
          margin-bottom: var(--spacing-xs);
          font-size: 1.1rem;
        }

        .benefit-item p {
          opacity: 0.8;
          margin: 0;
          font-size: 0.9rem;
        }

        .form-container {
          background: rgba(255, 255, 255, 0.95);
          border-radius: var(--radius-xl);
          padding: var(--spacing-xl);
          box-shadow: var(--shadow-strong);
          color: var(--gray-dark);
        }

        .form-header {
          text-align: center;
          margin-bottom: var(--spacing-xl);
        }

        .form-header h3 {
          color: var(--gray-dark);
          margin-bottom: var(--spacing-sm);
        }

        .form-header p {
          opacity: 0.7;
          margin: 0;
        }

        .newsletter-form {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-lg);
        }

        .input-group {
          position: relative;
        }

        .input-group label {
          display: block;
          margin-bottom: var(--spacing-xs);
          font-weight: 600;
          color: var(--gray-dark);
        }

        .form-input {
          width: 100%;
          padding: var(--spacing-md) var(--spacing-lg);
          padding-right: 3rem;
          border: 2px solid var(--gray-medium);
          border-radius: var(--radius-lg);
          font-size: 1rem;
          transition: var(--transition-fast);
          background: white;
        }

        .form-input:focus {
          outline: none;
          border-color: var(--yellow-primary);
          box-shadow: 0 0 0 3px rgba(255, 215, 0, 0.2);
        }

        .input-icon {
          position: absolute;
          right: var(--spacing-md);
          top: 50%;
          transform: translateY(-50%);
          margin-top: 12px;
          font-size: 1.2rem;
        }

        .btn-full {
          width: 100%;
          padding: var(--spacing-md);
        }

        .loading-spinner {
          font-size: 1.2rem;
        }

        .form-footer {
          text-align: center;
          margin-top: var(--spacing-md);
        }

        .form-footer p {
          font-size: 0.85rem;
          opacity: 0.7;
          margin: 0;
        }

        .social-proof {
          margin-top: var(--spacing-xl);
          text-align: center;
          border-top: 1px solid var(--gray-medium);
          padding-top: var(--spacing-lg);
        }

        .subscriber-count {
          margin-bottom: var(--spacing-md);
        }

        .count-number {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--yellow-primary);
          display: block;
        }

        .count-text {
          font-size: 0.9rem;
          opacity: 0.7;
        }

        .testimonial {
          background: var(--gray-light);
          padding: var(--spacing-md);
          border-radius: var(--radius-lg);
        }

        .testimonial p {
          font-style: italic;
          margin-bottom: var(--spacing-xs);
          color: var(--gray-dark);
        }

        .testimonial span {
          font-size: 0.85rem;
          opacity: 0.7;
          color: var(--gray-dark);
        }

        /* Success Message Styles */
        .success-message {
          text-align: center;
          max-width: 600px;
          margin: 0 auto;
        }

        .success-icon {
          font-size: 4rem;
          margin-bottom: var(--spacing-lg);
        }

        .success-message h2 {
          color: var(--white);
          background: none;
          -webkit-text-fill-color: var(--white);
          margin-bottom: var(--spacing-lg);
        }

        .success-message p {
          font-size: 1.2rem;
          opacity: 0.9;
          margin-bottom: var(--spacing-xl);
        }

        .welcome-gift {
          background: rgba(255, 215, 0, 0.2);
          padding: var(--spacing-xl);
          border-radius: var(--radius-lg);
          border: 2px solid rgba(255, 215, 0, 0.3);
        }

        .welcome-gift h3 {
          color: var(--yellow-light);
          margin-bottom: var(--spacing-md);
        }

        @media (max-width: 768px) {
          .newsletter-content {
            grid-template-columns: 1fr;
            gap: var(--spacing-xl);
          }

          .benefits-grid {
            gap: var(--spacing-md);
          }

          .benefit-item {
            padding: var(--spacing-md);
          }

          .form-container {
            padding: var(--spacing-lg);
          }

          .subscriber-count {
            margin-bottom: var(--spacing-sm);
          }
        }
      `}</style>
    </section>
  );
};

export default Newsletter;