import { Profile } from './helper/Profile';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Line({ height = "h-20", color = "bg-gray-300", width = "w-px", className = "" }) {
  return <div className={`mx-auto ${width} ${height} ${color} ${className}`}></div>;
}

export function Header() {
  const links = [
    { id: 0, name: 'About', href: 'about' },
    { id: 4, name: 'Tech Stack', href: 'tech' },
    { id: 1, name: 'Experience', href: 'experience' },
    { id: 2, name: 'Projects', href: 'projects' },
    { id: 3, name: 'Contact', href: 'contact' },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-bg text-white w-full relative">
      {/* Top bar */}
      <div className="flex justify-between items-center px-6 lg:px-16 py-6">
        <div className="flex items-center gap-6">
          <Profile />
          <Line height="h-13" width="w-[2px]" color="bg-primary" className="rotate-12" />
        </div>

        {/* Desktop nav */}
        <nav className="hidden lg:flex gap-12">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.href}`}
              className="relative after:block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-[#78dfea] after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 font-roboto"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile menu toggle */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-white hover:text-white/70 transition-colors duration-300"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white z-50 shadow-md">
          <nav className="flex flex-col py-4">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.href}`}
                className="uppercase font-raleway transition-all duration-300 text-black/80 hover:text-black/60 text-sm px-6 py-3 hover:bg-black/5"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
