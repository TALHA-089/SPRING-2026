import { ChevronRight } from 'lucide-react';
import heroDevices from 'figma:asset/3b508c7816929b1efc0fb1cda064fd7ea5acc49f.png';

export function PlayYourWaySection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0e1419] via-[#1a2d3d] to-[#0e1419]">
      
      {/* Radial Light Bloom - Behind Devices */}
      <div className="absolute left-[25%] top-1/2 -translate-y-1/2 w-[1100px] h-[1100px] bg-gradient-radial from-[#2d5a9e]/30 via-[#1a4d8f]/15 to-transparent rounded-full blur-[120px] pointer-events-none"></div>
      
      {/* Secondary Ambient Glow */}
      <div className="absolute left-[30%] top-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#4a90e2]/12 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Multi-Device Cluster - Full Section Coverage */}
      <div className="relative w-full pointer-events-none">
        <img 
          src={heroDevices} 
          alt="Xbox gaming across all devices"
          className="w-full h-auto object-contain"
          style={{ 
            filter: 'drop-shadow(0 50px 100px rgba(0, 0, 0, 0.6)) drop-shadow(0 25px 50px rgba(0, 0, 0, 0.4))',
          }}
        />
      </div>

      {/* Soft Ground Shadow/Reflection */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-[18%] w-[700px] h-24 bg-black/50 blur-[70px] rounded-full pointer-events-none"></div>

      {/* Content Container - Positioned Absolutely Over Image */}
      <div className="absolute inset-0 max-w-[1440px] mx-auto px-6">
        <div className="flex items-center justify-end h-full">
          
          {/* Right: Content Block */}
          <div className="flex flex-col justify-center z-10 max-w-xl">
            <h2 className="text-7xl text-white mb-5 font-bold tracking-tight leading-[1.1]">
              Play your way
            </h2>
            <p className="text-2xl text-gray-300/90 mb-12 leading-relaxed max-w-lg">
              At home or on the go, Xbox is there.
            </p>
            
            <div className="flex flex-col gap-3">
              {/* Primary CTA - Bright Green with Glow */}
              <button className="px-8 py-4 bg-[#9EF01D] text-black font-bold text-sm tracking-wider hover:bg-[#6CBF0C] transition-all duration-300 inline-flex items-center gap-3 self-start shadow-xl shadow-[#9EF01D]/40 hover:shadow-[#9EF01D]/60 hover:scale-[1.02]">
                EXPLORE WAYS TO PLAY
                <ChevronRight className="w-5 h-5" strokeWidth={3} />
              </button>
              
              {/* Secondary CTA - Glass Outline */}
              <button className="px-8 py-4 border-2 border-white/50 bg-white/5 backdrop-blur-sm text-white font-bold text-sm tracking-wider hover:bg-white hover:text-[#0a0e1a] hover:border-white transition-all duration-300 inline-flex items-center gap-3 self-start hover:scale-[1.02]">
                EXPLORE ALL DEVICES
                <ChevronRight className="w-5 h-5" strokeWidth={3} />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}