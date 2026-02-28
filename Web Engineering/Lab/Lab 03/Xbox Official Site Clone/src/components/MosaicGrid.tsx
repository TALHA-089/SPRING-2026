import { ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

export function MosaicGrid() {
  return (
    <section className="bg-white py-8">
      <div className="max-w-[1440px] mx-auto px-6 space-y-4">
        
        {/* First Row: Large Image + Green Tile + Smaller tiles */}
        <div className="grid grid-cols-12 gap-4 h-[400px]">
          {/* Large Left Tile - Overwatch */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="col-span-6 relative overflow-hidden group cursor-pointer"
          >
            <div className="absolute inset-0">
              <motion.div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(https://images.unsplash.com/photo-1689443111384-1cf214df988a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnB1bmslMjBmdXR1cmlzdGljJTIwZ2FtaW5nfGVufDF8fHx8MTc3MDY5NzQxMnww&ixlib=rb-4.1.0&q=80&w=1080)` }}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            </div>
            
            <div className="relative h-full flex flex-col justify-between p-8">
              <div className="inline-block self-start px-3 py-1 bg-[#FFB900] text-black text-xs font-semibold tracking-wide">
                EVENT RECAP
              </div>
              
              <div>
                <h3 className="text-4xl text-white mb-3">Overwatch Spotlight 2026</h3>
                <p className="text-white/90 mb-4 text-lg">
                  Replay the livestream and meet the five new heroes coming in Season 1
                </p>
                <button className="flex items-center gap-2 text-white hover:text-[#9EF01D] transition-colors font-semibold">
                  <span>LEARN MORE</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Green Tile - Game Pass */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="col-span-3 bg-[#107C10] relative overflow-hidden group cursor-pointer flex flex-col justify-between p-8"
          >
            <div>
              <h3 className="text-3xl text-white mb-4">Discover your next favorite game</h3>
              <p className="text-white/90 mb-6">
                New games on day one. Hundreds of games. Stream anywhere. Earn Rewards.
              </p>
            </div>
            
            <button className="flex items-center gap-2 text-white hover:text-[#9EF01D] transition-colors font-semibold self-start">
              <span>JOIN GAME PASS</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </motion.div>

          {/* Right Column with Game Pass Images */}
          <div className="col-span-3 grid grid-rows-2 gap-4">
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="relative overflow-hidden group cursor-pointer"
            >
              <div className="absolute inset-0">
                <motion.div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(https://images.unsplash.com/photo-1738071665033-7ba9885c2c20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWxvJTIwc2NpLWZpJTIwc3BhY2UlMjBtYXJpbmV8ZW58MXx8fHwxNzcwNjk3NDEyfDA&ixlib=rb-4.1.0&q=80&w=1080)` }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />
                <div className="absolute inset-0 bg-black/30"></div>
              </div>
              <div className="relative h-full flex items-center justify-center">
                <svg width="120" height="40" viewBox="0 0 120 40" fill="none">
                  <text x="0" y="30" fill="white" fontSize="16" fontWeight="600">XBOX GAME PASS</text>
                </svg>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative overflow-hidden cursor-pointer"
              >
                <img
                  src="https://images.unsplash.com/photo-1762217235246-4235328d882b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWFibG8lMjBnYW1pbmclMjBkYXJrJTIwZmFudGFzeXxlbnwxfHx8fDE3NzA2OTc0MTF8MA&ixlib=rb-4.1.0&q=80&w=400"
                  alt="Game"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative overflow-hidden cursor-pointer"
              >
                <img
                  src="https://images.unsplash.com/photo-1703978077787-ee2b4c7fd72f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3J6YSUyMHJhY2luZyUyMGNhciUyMHNwZWVkfGVufDF8fHx8MTc3MDY5NzQxMnww&ixlib=rb-4.1.0&q=80&w=400"
                  alt="Game"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Second Row: More Content Tiles */}
        <div className="grid grid-cols-12 gap-4 h-[300px]">
          {/* Diablo Tile */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="col-span-3 relative overflow-hidden group cursor-pointer"
          >
            <div className="absolute inset-0 bg-[#107C10] flex items-center justify-center p-6">
              <div className="text-center">
                <h3 className="text-2xl text-white mb-3">Diablo 30th Anniversary Spotlight on Feb 11</h3>
                <p className="text-white/90 text-sm mb-4">
                  Tune in for the latest reveals, updates, and special anniversary content
                </p>
                <button className="flex items-center gap-2 text-white hover:text-[#9EF01D] transition-colors font-semibold mx-auto">
                  <span>LEARN MORE</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* ROG Xbox Ally */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="col-span-6 relative overflow-hidden group cursor-pointer"
          >
            <div className="absolute inset-0">
              <motion.div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(https://images.unsplash.com/photo-1687713143171-b1ffd531263d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHh4Ym94JTIwZ2FtaW5nJTIwY29uc29sZSUyMGNvbnRyb2xsZXJ8ZW58MXx8fHwxNzcwNjk3NDExfDA&ixlib=rb-4.1.0&q=80&w=1080)` }}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
            </div>
            
            <div className="relative h-full flex flex-col justify-end p-6">
              <div className="inline-block self-start px-3 py-1 bg-[#FFB900] text-black text-xs font-semibold tracking-wide mb-3">
                NOW AVAILABLE
              </div>
              <h3 className="text-3xl text-white mb-3">ROG Xbox Ally</h3>
              <p className="text-white/90 mb-4">
                The best of ROG & Xbox together in a gaming handheld
              </p>
              <button className="flex items-center gap-2 text-white hover:text-[#9EF01D] transition-colors font-semibold">
                <span>LEARN MORE</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Madden NFL */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="col-span-3 bg-[#107C10] relative overflow-hidden group cursor-pointer flex flex-col justify-between p-6"
          >
            <div>
              <div className="inline-block px-3 py-1 bg-[#FFB900] text-black text-xs font-semibold tracking-wide mb-3">
                AVAILABLE WITH GAME PASS
              </div>
              <h3 className="text-2xl text-white mb-3">Madden NFL 26 is now on EA Play</h3>
              <p className="text-white/90 text-sm mb-4">
                Blitz for days and score a Supercharge Pack until Mar 6
              </p>
            </div>
            
            <button className="flex items-center gap-2 text-white hover:text-[#9EF01D] transition-colors font-semibold self-start">
              <span>GET IT NOW</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
