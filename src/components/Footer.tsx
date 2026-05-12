import React from 'react';
import { Globe, Instagram, Linkedin, Mail,} from 'lucide-react';

type FooterProps = {
  onNavigate?: (pathname: string) => void;
};

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNavigate = (event: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (!onNavigate) return;
    event.preventDefault();
    onNavigate(path);
  };

  return (
    <footer className="bg-[#f0f2f7]">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h3 className="text-[#0f2d5e] font-bold text-xl mb-3">Connex AI</h3>
          <p className="text-gray-500 text-sm leading-relaxed mb-5">
            Pioneering precision healthcare and strategic consulting through the
            power of curated artificial intelligence.
          </p>
          <div className="flex gap-3">
            <a
              href="https://is.gd/h5hjg3"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-gray-300/60 hover:bg-gray-300 flex items-center justify-center transition-colors"
            >
              <Linkedin size={16} className="text-gray-600" />
            </a>
            {/* <a
              href="#"
              className="w-9 h-9 rounded-full bg-gray-300/60 hover:bg-gray-300 flex items-center justify-center transition-colors"
            >
              <Globe size={16} className="text-gray-600" />
            </a> */}
            <a
              href="mailto:contact@connexai.org"
              className="w-9 h-9 rounded-full bg-gray-300/60 hover:bg-gray-300 flex items-center justify-center transition-colors"
            >
              <Mail size={16} className="text-gray-600" />
            </a>
            <a
              href="https://www.instagram.com/connex_ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-gray-300/60 hover:bg-gray-300 flex items-center justify-center transition-colors"
            >
              <Instagram size={16} className="text-gray-600" />
            </a>
          </div>
        </div>

        {/* Solutions */}
        <div>
          <h4 className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-5">
            Solutions
          </h4>
          <ul className="space-y-3">
            {['HealthPOD', 'Sleak', 'Custom LLMs'].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="text-gray-500 hover:text-[#0f2d5e] text-sm transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-5">
            Company
          </h4>
          <ul className="space-y-3">
            {['Sustainability', 'Careers', 'News'].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="text-gray-500 hover:text-[#0f2d5e] text-sm transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-5">
            Contact
          </h4>
          <address className="not-italic text-sm text-gray-500 space-y-2">
            <p>contact@connexai.org</p>
            <p>Registered Office: 159 N Wolcott St Ste</p>
            <p>133 Casper, WY 82601</p>
            <p>Mailing Address: 1603 Capitol Ave Ste</p>
            <p>415 #220478 Cheyenne, WY 82001</p>
            {/* <p className="mt-3">
              <a
                href="mailto:inquiries@connexai.com"
                className="hover:text-[#0f2d5e] transition-colors"
              >
                inquiries@connexai.com
              </a>
            </p>
            <p>
              <a
                href="tel:+18005550192"
                className="hover:text-[#0f2d5e] transition-colors"
              >
                +1 (800) 555-0192
              </a>
            </p> */}
          </address>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-400 text-sm">
            © 2025 Connex AI. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="/privacy"
              onClick={(event) => handleNavigate(event, '/privacy')}
              className="text-gray-400 hover:text-[#0f2d5e] text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              onClick={(event) => handleNavigate(event, '/terms')}
              className="text-gray-400 hover:text-[#0f2d5e] text-sm transition-colors"
            >
              Terms of Service
            </a>
            {/* <a
              href="#"
              className="text-gray-400 hover:text-[#0f2d5e] text-sm transition-colors"
            >
              Cookie Policy
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
