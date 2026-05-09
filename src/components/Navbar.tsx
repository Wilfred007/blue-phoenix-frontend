import { useState, useEffect } from 'react';
import { Logo } from './Logo';

interface NavbarProps {
  onBookClick: () => void;
}

export const Navbar = ({ onBookClick }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'glass-nav py-3' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Logo className="h-10" />
        
        <div className="hidden md:flex items-center gap-8">
          {['Services', 'About', 'Process', 'Resources'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-brand-gray hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
          <button 
            onClick={onBookClick}
            className="btn-primary py-2 px-5 text-sm"
          >
            Book a Consultation
          </button>
        </div>

        {/* Mobile menu toggle would go here */}
      </div>
    </nav>
  );
};
