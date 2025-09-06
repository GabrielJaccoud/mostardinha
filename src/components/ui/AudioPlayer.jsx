import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AudioPlayer = () => {
  const [volume, setVolume] = useState(50);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio('/assets/temamostardinha.wav');
    audioRef.current.loop = true;
    audioRef.current.volume = volume / 100;

    const updateTime = () => setCurrentTime(audioRef.current.currentTime);
    const updateDuration = () => setDuration(audioRef.current.duration);

    audioRef.current.addEventListener('timeupdate', updateTime);
    audioRef.current.addEventListener('loadedmetadata', updateDuration);

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('timeupdate', updateTime);
        audioRef.current.removeEventListener('loadedmetadata', updateDuration);
        audioRef.current.pause();
      }
    };
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

  const handleSeek = (e) => {
    const newTime = e.target.value;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <motion.div 
      className="audio-player-fixed"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      <motion.div 
        className="audio-player-content"
        layout
        transition={{ duration: 0.3 }}
      >
        <div className="audio-info">
          <motion.span 
            className="audio-icon-animated"
            animate={{ 
              rotate: isPlaying ? 360 : 0,
              scale: isPlaying ? [1, 1.2, 1] : 1
            }}
            transition={{ 
              rotate: { duration: 2, repeat: Infinity, ease: "linear" },
              scale: { duration: 1, repeat: Infinity }
            }}
          >
            🎵
          </motion.span>
          <div>
            <span className="audio-title">Trilha do Mostardinha</span>
            {isExpanded && duration > 0 && (
              <div className="audio-time">
                {formatTime(currentTime)} / {formatTime(duration)}
              </div>
            )}
          </div>
        </div>

        <div className="audio-controls">
          <motion.button 
            className="audio-btn-fixed" 
            onClick={toggleAudio}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <span className="audio-icon-btn">
              {isPlaying ? '⏸️' : '▶️'}
            </span>
          </motion.button>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                className="extended-controls"
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: 'auto' }}
                exit={{ opacity: 0, width: 0 }}
                transition={{ duration: 0.3 }}
              >
                <input 
                  type="range" 
                  className="time-slider"
                  min="0" 
                  max={duration || 0}
                  value={currentTime}
                  onChange={handleSeek}
                />
              </motion.div>
            )}
          </AnimatePresence>

          <input 
            type="range" 
            className="volume-slider" 
            min="0" 
            max="100" 
            value={volume} 
            onChange={handleVolumeChange}
            title={`Volume: ${volume}%`}
          />

          <motion.button
            className="expand-btn"
            onClick={() => setIsExpanded(!isExpanded)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isExpanded ? '🔽' : '🔼'}
          </motion.button>
        </div>
      </motion.div>

      <style jsx>{`
        .audio-time {
          font-size: 0.8rem;
          color: var(--gray-medium);
          margin-top: 2px;
        }

        .extended-controls {
          display: flex;
          align-items: center;
          margin: 0 var(--spacing-sm);
        }

        .time-slider {
          width: 100px;
          height: 4px;
          background: var(--gray-medium);
          border-radius: var(--radius-full);
          outline: none;
          appearance: none;
          cursor: pointer;
        }

        .time-slider::-webkit-slider-thumb {
          appearance: none;
          width: 14px;
          height: 14px;
          background: var(--yellow-primary);
          border-radius: var(--radius-full);
          cursor: pointer;
        }

        .expand-btn {
          background: none;
          border: none;
          font-size: 1rem;
          cursor: pointer;
          padding: 4px;
          border-radius: var(--radius-sm);
          transition: var(--transition-fast);
        }

        .expand-btn:hover {
          background: var(--gray-light);
        }

        @media (max-width: 768px) {
          .audio-player-content {
            flex-direction: column;
            gap: var(--spacing-xs);
          }

          .extended-controls {
            margin: 0;
          }

          .time-slider {
            width: 80px;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default AudioPlayer;