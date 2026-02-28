import { Globe } from 'lucide-react';

const footerColumns = [
  {
    title: 'Browse',
    links: ['Xbox consoles', 'Xbox games', 'Xbox Game Pass', 'Xbox accessories', 'Xbox Series X', 'Xbox Series S'],
  },
  {
    title: 'Resources',
    links: ['Xbox News', 'Xbox Support', 'Feedback', 'Community Standards', 'Xbox status', 'User Research at Xbox'],
  },
  {
    title: 'Microsoft Store',
    links: ['Microsoft account', 'Microsoft Store Support', 'Returns', 'Order tracking', 'Store locations'],
  },
  {
    title: 'Rewards',
    links: ['Rewards', 'Xbox Mastercard'],
  },
  {
    title: 'For Developers',
    links: ['Games', 'Designed for Xbox'],
  },
];

export function XboxFooter() {
  return (
    <footer className="bg-[#f2f2f2]">
      {/* Main Footer Content */}
      <div className="max-w-[1440px] mx-auto px-6 py-12">
        <div className="grid grid-cols-5 gap-8 mb-12">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm text-[#1a1a1a] font-semibold mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-[#616161] hover:underline transition-all"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="border-t border-[#d0d0d0] bg-[#f2f2f2]">
        <div className="max-w-[1440px] mx-auto px-6 py-4">
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-6">
              {/* Language Selector */}
              <button className="flex items-center gap-2 text-[#616161] hover:underline">
                <Globe className="w-4 h-4" />
                <span>English (United States)</span>
              </button>

              {/* Privacy Toggle */}
              <button className="flex items-center gap-2 text-[#616161] hover:underline">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M2 2h5v5H2V2zm0 7h5v5H2V9zm7-7h5v5H9V2zm0 7h5v5H9V9z"/>
                </svg>
                <span>Your Privacy Choices</span>
              </button>
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-4 text-[#616161]">
              <a href="#" className="hover:underline">Contact Microsoft</a>
              <a href="#" className="hover:underline">Privacy & Cookies</a>
              <a href="#" className="hover:underline">Terms of use</a>
              <a href="#" className="hover:underline">Trademarks</a>
              <a href="#" className="hover:underline">Safety & eco</a>
              <a href="#" className="hover:underline">About our ads</a>
              <span>© Microsoft 2026</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}