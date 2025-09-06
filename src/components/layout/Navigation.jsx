import { useState } from 'react';
import { motion } from 'framer-motion';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { href: '#inicio', label: 'Início' },
    { href: '#historia', label: 'História' },
    { href: '#personagens', label: 'Personagens' },
    { href: '#musicas', label: 'Músicas' },
    { href: '#vozes', label: 'Vozes' },
    { href: '#bastidores', label: 'Bastidores' },
    { href: '#audiobook', label: 'Audiobook' },
    { href: '#quiz', label: 'Quiz' },
    { href: '#newsletter', label: 'Newsletter' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed-nav">
      <div className="container">
        <div className="nav-content">
          <motion.a 
            href="#inicio" 
            className="nav-logo"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img 
              src="/assets/images/Mostardinha(2).png" 
              alt="Mostardinha" 
              className="nav-logo-img" 
            />
            <span className="nav-logo-text">Mostardinha</span>
          </motion.a>

          {/* Desktop Menu */}
          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            {menuItems.map((item, index) => (
              <motion.li key={item.href}>
                <motion.a
                  href={item.href}
                  className="nav-link"
                  onClick={() => setIsMenuOpen(false)}
                  whileHover={{ y: -2 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.label}
                </motion.a>
              </motion.li>
            ))}
          </ul>

          <div className="nav-cta">
            <motion.a
              href="https://pay.hotmart.com/H100940670E"
              className="btn btn-primary btn-small"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Comprar por R$ 34,99
            </motion.a>

            {/* Mobile Menu Button */}
            <button
              className="mobile-menu-btn"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
          margin-left: 1rem;
        }

        .hamburger {
          display: block;
          position: relative;
          width: 24px;
          height: 2px;
          background: var(--gray-dark);
          transition: 0.3s ease;
        }

        .hamburger::before,
        .hamburger::after {
          content: '';
          position: absolute;
          left: 0;
          width: 24px;
          height: 2px;
          background: var(--gray-dark);
          transition: 0.3s ease;
        }

        .hamburger::before { top: -8px; }
        .hamburger::after { top: 8px; }

        .hamburger.active {
          background: transparent;
        }

        .hamburger.active::before {
          top: 0;
          transform: rotate(45deg);
        }

        .hamburger.active::after {
          top: 0;
          transform: rotate(-45deg);
        }

        @media (max-width: 768px) {
          .mobile-menu-btn {
            display: block;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navigation;