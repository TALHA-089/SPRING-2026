import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Pause, Play } from 'lucide-react';
import haloImage from 'figma:asset/efc147f94f6960fb8f3bed26b74d0f86b36659ec.png';

const heroSlides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1762217235246-4235328d882b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWFibG8lMjBnYW1pbmclMjBkYXJrJTIwZmFudGFzeXxlbnwxfHx8fDE3NzA2OTc0MTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    badge: 'STREAM NOW',
    title: 'Fallout Season 2',
    subtitle: 'Watch the Amazon Original Series only on Prime Video',
    buttonText: 'LEARN MORE',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1687713143171-b1ffd531263d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHh4Ym94JTIwZ2FtaW5nJTIwY29uc29sZSUyMGNvbnRyb2xsZXJ8ZW58MXx8fHwxNzcwNjk3NDExfDA&ixlib=rb-4.1.0&q=80&w=1080',
    badge: 'NEW',
    title: 'Xbox Series X|S',
    subtitle: 'The fastest, most powerful Xbox ever',
    buttonText: 'SHOP NOW',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1689443111384-1cf214df988a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnB1bmslMjBmdXR1cmlzdGljJTIwZ2FtaW5nfGVufDF8fHx8MTc3MDY5NzQxMnww&ixlib=rb-4.1.0&q=80&w=1080',
    badge: 'AVAILABLE NOW',
    title: 'Cyberpunk 2077',
    subtitle: 'Experience Night City like never before',
    buttonText: 'LEARN MORE',
  },
  {
    id: 4,
    image: haloImage,
    badge: 'FREE TO PLAY',
    title: 'Halo Infinite',
    subtitle: 'Multiplayer is free for everyone',
    buttonText: 'PLAY NOW',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1703978077787-ee2b4c7fd72f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3J6YSUyMHJhY2luZyUyMGNhciUyMHNwZWVkfGVufDF8fHx8MTc3MDY5NzQxMnww&ixlib=rb-4.1.0&q=80&w=1080',
    badge: 'OPTIMIZED',
    title: 'Forza Motorsport',
    subtitle: 'Built from the ground up',
    buttonText: 'LEARN MORE',
  },
];

export function HeroRotator() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance carousel
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="relative w-full h-[600px] overflow-hidden bg-black">
      {/* Main Hero Image */}
      <motion.div
        key={activeSlide}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0"
      >
        <img
          src={heroSlides[activeSlide].image}
          alt={heroSlides[activeSlide].title}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"></div>
      </motion.div>

      {/* Content Overlay - Left Aligned */}
      <div className="relative max-w-[1440px] mx-auto px-6 h-full flex items-center">
        <motion.div
          key={`content-${activeSlide}`}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-xl"
        >
          {/* Yellow Badge */}
          <div className="inline-block px-3 py-1 bg-[#FFB900] text-black text-xs font-semibold mb-4 tracking-wide">
            {heroSlides[activeSlide].badge}
          </div>

          <h1 className="text-5xl mb-4 text-white tracking-tight">
            {heroSlides[activeSlide].title}
          </h1>
          <p className="text-lg text-white mb-8">
            {heroSlides[activeSlide].subtitle}
          </p>

          {/* Bright Green CTA Button */}
          <button className="px-6 py-3 bg-[#9EF01D] text-black font-semibold hover:bg-[#6CBF0C] transition-all duration-200 inline-flex items-center gap-2">
            {heroSlides[activeSlide].buttonText}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M6 3l5 5-5 5V3z"/>
            </svg>
          </button>
        </motion.div>
      </div>

      {/* Bottom Controls */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-4">
        {/* Pause/Play Button */}
        <button
          onClick={() => setIsPaused(!isPaused)}
          className="w-10 h-10 bg-[#1a1a1a]/70 hover:bg-[#1a1a1a] flex items-center justify-center transition-colors"
        >
          {isPaused ? (
            <Play className="w-4 h-4 text-white fill-white" />
          ) : (
            <Pause className="w-4 h-4 text-white fill-white" />
          )}
        </button>

        {/* Carousel Dots */}
        <div className="flex gap-2">
          {heroSlides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => setActiveSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === activeSlide
                  ? 'bg-white'
                  : 'bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}