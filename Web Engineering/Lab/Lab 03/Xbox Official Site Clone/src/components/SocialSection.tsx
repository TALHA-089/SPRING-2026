import { Mail, Facebook, Twitter, Instagram, MessageCircle, Music, Youtube } from 'lucide-react';

const socialLinks = [
  { icon: Mail, label: 'Email', href: '#' },
  { icon: Facebook, label: 'Facebook', href: '#' },
  { icon: Twitter, label: 'X', href: '#' },
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: MessageCircle, label: 'WhatsApp', href: '#' },
  { icon: Music, label: 'TikTok', href: '#' },
  { icon: Youtube, label: 'YouTube', href: '#' },
];

export function SocialSection() {
  return (
    <section className="bg-white py-12 border-y border-[#e0e0e0]">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="flex items-center justify-center gap-8">
          <span className="text-sm text-[#1a1a1a] font-semibold">Follow Xbox</span>
          
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="text-[#1a1a1a] hover:text-[#107C10] transition-colors"
              >
                <Icon className="w-5 h-5" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
