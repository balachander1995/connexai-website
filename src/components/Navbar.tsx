import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const connexLogo = new URL('../assets/connex-logo.webp', import.meta.url).href;

type NavbarProps = {
  onNavigate?: (pathname: string) => void;
  route?: string;
};

const Navbar: React.FC<NavbarProps> = ({ onNavigate, route }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const currentRoute = route ?? (typeof window !== 'undefined' ? window.location.pathname + window.location.hash : '/');

  const handleNavigate = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (!onNavigate) return;
    event.preventDefault();
    onNavigate(href);
  };

  const navItems = ['Home', 'Products', 'About', 'Contact', 'Our Team', 'Work With Us'];

  const getHref = (item: string) =>
    item === 'Home'
      ? '/'
      : item === 'Products'
      ? '/#products'
      : item === 'About'
      ? '/#about'
      : item === 'Contact'
      ? '/contact'
      : item === 'Our Team'
      ? '/our-team'
      : '/work-with-us';

  const getActiveItem = () => {
    if (currentRoute === '/contact') return 'Contact';
    if (currentRoute === '/our-team') return 'Our Team';
    if (currentRoute === '/work-with-us') return 'Work With Us';
    if (currentRoute === '/#products') return 'Products';
    if (currentRoute === '/#about') return 'About';
    if (currentRoute === '/privacy' || currentRoute === '/terms') return null;
    return 'Home';
  };

  const activeItem = getActiveItem();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-0" onClick={(event) => handleNavigate(event, '/')}>
          <img
            src={connexLogo}
            alt="Connex AI logo"
            className="h-9 w-auto object-contain"
          />
          <div className="text-3xl font-bold text-[#0f2d5e] flex items-center">
            <span className="text-[#e8622a]">Co</span>
            <span>nnex AI</span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const href = getHref(item);

            return (
              <a
                key={item}
                href={href}
                onClick={(event) => handleNavigate(event, href)}
                className={`text-sm font-medium transition-colors ${
                  item === activeItem
                    ? 'text-[#0f2d5e] border-b-2 border-[#e8622a] pb-0.5'
                    : 'text-gray-500 hover:text-[#0f2d5e]'
                }`}
              >
                {item}
              </a>
            );
          })}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <button className="bg-[#0f2d5e] hover:bg-[#0a1f42] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors">
            Get Started
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-[#0f2d5e]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 pb-4">
          {navItems.map((item) => {
            const href = getHref(item);
            return (
              <a
                key={item}
                href={href}
                onClick={(event) => {
                  handleNavigate(event, href);
                  setMenuOpen(false);
                }}
                className={`block py-2 text-sm font-medium transition-colors ${
                  item === activeItem
                    ? 'text-[#0f2d5e]'
                    : 'text-gray-600 hover:text-[#0f2d5e]'
                }`}
              >
                {item}
              </a>
            );
          })}
          <button className="mt-3 w-full bg-[#0f2d5e] text-white text-sm font-semibold px-5 py-2.5 rounded-lg">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
