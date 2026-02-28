import { Search, ShoppingCart, ChevronDown } from 'lucide-react';

export function XboxHeader() {
  const navItems = [
    { label: 'Game Pass', hasDropdown: true },
    { label: 'Games', hasDropdown: true },
    { label: 'Devices', hasDropdown: true },
    { label: 'Play', hasDropdown: false },
    { label: 'Store', hasDropdown: true },
    { label: 'Community', hasDropdown: true },
    { label: 'Support', hasDropdown: true },
    { label: 'More', hasDropdown: true },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#f2f2f2] border-b border-[#e0e0e0]">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="flex items-center justify-between h-14">
          {/* Left: Logos and Navigation */}
          <div className="flex items-center gap-8">
            {/* Microsoft Logo */}
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="grid grid-cols-2 gap-[2px] w-5 h-5">
                <div className="bg-[#f25022]"></div>
                <div className="bg-[#7fba00]"></div>
                <div className="bg-[#00a4ef]"></div>
                <div className="bg-[#ffb900]"></div>
              </div>
            </div>

            {/* Xbox Logo */}
            <div className="flex items-center gap-2 cursor-pointer group">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="11" stroke="#107C10" strokeWidth="2" fill="none"/>
                <path d="M7.5 7.5C9 9 10.5 10 12 10C13.5 10 15 9 16.5 7.5M7.5 16.5C9 15 10.5 14 12 14C13.5 14 15 15 16.5 16.5" stroke="#107C10" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <span className="text-[#1a1a1a] text-sm font-semibold">XBOX</span>
            </div>

            {/* Main Navigation */}
            <nav className="flex items-center gap-6">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  className="flex items-center gap-1 text-sm text-[#1a1a1a] hover:underline transition-all group"
                >
                  {item.label}
                  {item.hasDropdown && (
                    <ChevronDown className="w-3 h-3 opacity-70" />
                  )}
                </button>
              ))}
            </nav>
          </div>

          {/* Right: Utilities */}
          <div className="flex items-center gap-6">
            {/* All Microsoft Dropdown */}
            <button className="flex items-center gap-1 text-sm text-[#1a1a1a] hover:underline">
              All Microsoft
              <ChevronDown className="w-3 h-3" />
            </button>

            {/* Search */}
            <button className="flex items-center gap-2 text-sm text-[#1a1a1a] hover:underline">
              <span>Search</span>
              <Search className="w-4 h-4" />
            </button>

            {/* Cart */}
            <button className="text-[#1a1a1a] hover:opacity-70 transition-opacity">
              <ShoppingCart className="w-5 h-5" />
            </button>

            {/* Sign In */}
            <button className="flex items-center gap-2 text-sm text-[#1a1a1a] hover:underline">
              <div className="w-8 h-8 rounded-full bg-[#d0d0d0] flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="5" r="3" fill="#1a1a1a"/>
                  <path d="M2 14C2 11 4.5 9 8 9C11.5 9 14 11 14 14" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <span>Sign in</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
