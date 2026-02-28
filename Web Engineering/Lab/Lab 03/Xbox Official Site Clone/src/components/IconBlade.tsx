export function IconBlade() {
  const icons = [
    {
      label: 'GAME PASS',
      svg: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="stroke-[#107C10] group-hover:stroke-[#9EF01D] transition-colors" strokeWidth="2">
          <rect x="5" y="8" width="30" height="20" rx="2" />
          <path d="M5 14 L35 14" />
          <rect x="10" y="18" width="6" height="6" rx="1" />
          <rect x="18" y="18" width="6" height="6" rx="1" />
          <rect x="26" y="18" width="6" height="6" rx="1" />
        </svg>
      ),
    },
    {
      label: 'GAMES',
      svg: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="stroke-[#107C10] group-hover:stroke-[#9EF01D] transition-colors" strokeWidth="2">
          <path d="M8 15 L8 28 C8 30 9 32 12 32 L28 32 C31 32 32 30 32 28 L32 15 C32 13 31 12 28 12 L12 12 C9 12 8 13 8 15 Z" />
          <circle cx="15" cy="21" r="2" className="fill-[#107C10] group-hover:fill-[#9EF01D] transition-colors" />
          <circle cx="25" cy="21" r="2" className="fill-[#107C10] group-hover:fill-[#9EF01D] transition-colors" />
          <path d="M20 8 L20 12" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      label: 'DEVICES',
      svg: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="stroke-[#107C10] group-hover:stroke-[#9EF01D] transition-colors" strokeWidth="2">
          <rect x="10" y="12" width="20" height="14" rx="1" />
          <rect x="8" y="26" width="24" height="2" rx="1" />
          <line x1="20" y1="28" x2="20" y2="30" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      label: 'ACCESSORIES',
      svg: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="stroke-[#107C10] group-hover:stroke-[#9EF01D] transition-colors" strokeWidth="2">
          <path d="M10 20 C10 15 12 12 16 12 L24 12 C28 12 30 15 30 20 L30 24 C30 26 29 28 26 28 L14 28 C11 28 10 26 10 24 Z" />
          <circle cx="15" cy="20" r="1.5" className="fill-[#107C10] group-hover:fill-[#9EF01D] transition-colors" />
          <circle cx="25" cy="20" r="1.5" className="fill-[#107C10] group-hover:fill-[#9EF01D] transition-colors" />
        </svg>
      ),
    },
    {
      label: 'PLAY',
      svg: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="10" className="stroke-[#107C10] group-hover:stroke-[#9EF01D] transition-colors" strokeWidth="2" />
          <path d="M17 15 L26 20 L17 25 Z" className="fill-[#107C10] group-hover:fill-[#9EF01D] transition-colors" />
        </svg>
      ),
    },
    {
      label: 'SIGN IN',
      svg: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="stroke-[#107C10] group-hover:stroke-[#9EF01D] transition-colors" strokeWidth="2">
          <circle cx="20" cy="15" r="5" />
          <path d="M10 32 C10 26 14 23 20 23 C26 23 30 26 30 32" strokeLinecap="round" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-white py-12 border-b border-[#e0e0e0]">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="grid grid-cols-6 gap-8">
          {icons.map((item, index) => (
            <button
              key={index}
              className="flex flex-col items-center gap-3 group cursor-pointer"
            >
              <div className="group-hover:scale-110 transition-transform duration-200">
                {item.svg}
              </div>
              <span className="text-xs text-[#107C10] group-hover:text-[#9EF01D] transition-colors font-semibold tracking-wide">
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}