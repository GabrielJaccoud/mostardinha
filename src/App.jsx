import { motion } from 'framer-motion';
import './App.css';

// Layout Components
import Navigation from './components/layout/Navigation';

// UI Components
import AudioPlayer from './components/ui/AudioPlayer';

// Section Components
import HeroSection from './components/sections/HeroSection';
import CharacterGallery from './components/sections/CharacterGallery';
import InteractiveQuiz from './components/sections/InteractiveQuiz';
import Newsletter from './components/sections/Newsletter';

const App = () => {
  return (
    <div className="app">
      {/* Navigation */}
      <Navigation />

      {/* Audio Player */}
      <AudioPlayer />

      {/* Hero Section */}
      <HeroSection />

      {/* Story Section */}
      <section id="historia" className="section">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            A História do Mostardinha
          </motion.h2>
          
          <div className="story-content">
            <motion.div
              className="story-text"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p>
                Em Temperópolis, um reino mágico onde vivem todos os temperos e condimentos, 
                nasce uma história de amor, coragem e sensibilidade. Mostardinha, um grão pequeno 
                mas gigante em coração, nos ensina que a verdadeira força está no amor e na 
                capacidade de transformar o mundo através da gentileza.
              </p>
              <p>
                Acompanhe essa jornada musical onde cada personagem tem sua própria voz e 
                personalidade única, criando uma experiência rica em valores e aprendizado 
                para toda a família.
              </p>
            </motion.div>
            
            <motion.div
              className="story-image"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <img 
                src="/assets/images/CAPA.png" 
                alt="Capa do livro Mostardinha"
                className="story-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Characters Section */}
      <CharacterGallery />

      {/* Music Section */}
      <section id="musicas" className="section">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Trilha Sonora Original
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Uma experiência única com música original que dá vida aos personagens e à história.
          </motion.p>

          <div className="music-features">
            <motion.div
              className="music-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="music-icon">🎵</div>
              <h3>Tema Principal</h3>
              <p>A música tema do Mostardinha que embala toda a aventura</p>
            </motion.div>

            <motion.div
              className="music-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="music-icon">🎭</div>
              <h3>Temas dos Personagens</h3>
              <p>Cada personagem tem sua própria melodia característica</p>
            </motion.div>

            <motion.div
              className="music-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="music-icon">🌟</div>
              <h3>Efeitos Sonoros</h3>
              <p>Sons ambientes que transportam você para Temperópolis</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Voices Section */}
      <section id="vozes" className="section">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Elenco de Vozes
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Conheça os talentosos artistas que dão vida aos personagens de Temperópolis.
          </motion.p>

          <div className="voices-grid">
            {[
              { name: 'André Carneiro', image: '/assets/images/andre-carneiro.jpg', character: 'Mostardinha' },
              { name: 'Carol Santos', image: '/assets/images/carol.jpg', character: 'Dona Formiga' },
              { name: 'Dani Souza', image: '/assets/images/dani-souza.jpg', character: 'Cigarra' },
              { name: 'Gabriel Morais', image: '/assets/images/gabriel-morais.jpg', character: 'Alho' },
              { name: 'Grazi Lima', image: '/assets/images/grazi.jpg', character: 'Catchup' },
              { name: 'André Nóbrega', image: '/assets/images/andre-nobrega.jpg', character: 'Comandante' }
            ].map((actor, index) => (
              <motion.div
                key={index}
                className="voice-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="voice-image">
                  <img src={actor.image} alt={actor.name} />
                </div>
                <div className="voice-info">
                  <h4>{actor.name}</h4>
                  <p>Voz do {actor.character}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Behind the Scenes Section */}
      <section id="bastidores" className="section">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Bastidores da Criação
          </motion.h2>
          
          <div className="backstage-content">
            <motion.div
              className="backstage-text"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3>Uma Jornada de Criação Apaixonada</h3>
              <p>
                O Mostardinha nasceu de um sonho: criar uma história que tocasse os corações 
                e ensinasse valores importantes através da música e da sensibilidade. 
                Cada detalhe foi pensado com carinho para proporcionar uma experiência única.
              </p>
              <ul>
                <li>🎨 Ilustrações originais feitas com amor</li>
                <li>🎵 Composição musical exclusiva</li>
                <li>🎭 Direção de dublagem profissional</li>
                <li>📚 Roteiro desenvolvido por especialistas em literatura infantil</li>
              </ul>
            </motion.div>
            
            <motion.div
              className="backstage-images"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="backstage-gallery">
                <img src="/assets/images/13-BANDA.png" alt="Processo de criação" />
                <img src="/assets/images/48-FESTIVAL.png" alt="Ilustrações" />
                <img src="/assets/images/28-ILHA.png" alt="Cenários" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Audiobook Section */}
      <section id="audiobook" className="section">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Audiobook Interativo
          </motion.h2>
          
          <div className="audiobook-content">
            <motion.div
              className="audiobook-features"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="feature-highlight">
                <h3>📱 Experiência Digital Completa</h3>
                <p>
                  Muito mais que um livro tradicional! O Mostardinha oferece uma experiência 
                  interativa com narração profissional, efeitos sonoros envolventes e uma 
                  trilha sonora que transporta você para o mundo mágico de Temperópolis.
                </p>
              </div>

              <div className="audiobook-benefits">
                <div className="benefit">
                  <span className="benefit-icon">🎧</span>
                  <div>
                    <h4>Narração Profissional</h4>
                    <p>Vozes únicas para cada personagem</p>
                  </div>
                </div>
                <div className="benefit">
                  <span className="benefit-icon">🎵</span>
                  <div>
                    <h4>Trilha Sonora Original</h4>
                    <p>Músicas compostas especialmente para a história</p>
                  </div>
                </div>
                <div className="benefit">
                  <span className="benefit-icon">📱</span>
                  <div>
                    <h4>Acesso Vitalício</h4>
                    <p>Baixe e ouça quando e onde quiser</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="cta-section"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="price-box">
                <div className="price-header">
                  <h3>Leve o Mostardinha para casa!</h3>
                  <p>Acesso completo por apenas:</p>
                </div>
                <div className="price">
                  <span className="currency">R$</span>
                  <span className="amount">34</span>
                  <span className="cents">,99</span>
                </div>
                <motion.a
                  href="https://pay.hotmart.com/H100940670E"
                  className="btn btn-primary btn-large cta-button"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  🛒 Comprar Agora
                </motion.a>
                <p className="guarantee">
                  ✅ Compra 100% segura<br />
                  ✅ Acesso imediato após pagamento<br />
                  ✅ Garantia de 7 dias
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quiz Section */}
      <InteractiveQuiz />

      {/* Newsletter Section */}
      <Newsletter />

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <motion.div
            className="footer-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="footer-main">
              <div className="footer-brand">
                <img 
                  src="/assets/images/Mostardinha(2).png" 
                  alt="Mostardinha" 
                  className="footer-logo" 
                />
                <h3>Mostardinha</h3>
                <p>Uma jornada de sensibilidade que transforma o mundo através do amor.</p>
              </div>
              
              <div className="footer-links">
                <h4>Links Rápidos</h4>
                <ul>
                  <li><a href="#historia">História</a></li>
                  <li><a href="#personagens">Personagens</a></li>
                  <li><a href="#quiz">Quiz</a></li>
                  <li><a href="#newsletter">Newsletter</a></li>
                </ul>
              </div>

              <div className="footer-contact">
                <h4>Contato</h4>
                <p>📧 contato@mostardinha.com.br</p>
                <p>📱 Siga-nos nas redes sociais</p>
              </div>
            </div>
            
            <div className="footer-bottom">
              <p>&copy; 2025 Gabriel Jaccoud. Todos os direitos reservados.</p>
              <p>Desenvolvido com ❤️ para o Mundo do Mostardinha</p>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default App;