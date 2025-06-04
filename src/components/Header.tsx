
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { CreditCard, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-toka-orange-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-toka-orange to-toka-orange-600 rounded-lg flex items-center justify-center">
              <CreditCard className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold text-toka-gray-900">TOKA</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-toka-gray-700 hover:text-toka-orange transition-colors">
              Inicio
            </a>
            <a href="#caracteristicas" className="text-toka-gray-700 hover:text-toka-orange transition-colors">
              Características
            </a>
            <a href="#como-funciona" className="text-toka-gray-700 hover:text-toka-orange transition-colors">
              Cómo Funciona
            </a>
            <a href="#faq" className="text-toka-gray-700 hover:text-toka-orange transition-colors">
              FAQ
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-toka-orange hover:bg-toka-orange-600 text-white px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105">
              Próximamente
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`bg-toka-gray-700 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
              <span className={`bg-toka-gray-700 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`bg-toka-gray-700 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-toka-orange-100">
            <nav className="flex flex-col space-y-4">
              <a href="#inicio" className="text-toka-gray-700 hover:text-toka-orange transition-colors">
                Inicio
              </a>
              <a href="#caracteristicas" className="text-toka-gray-700 hover:text-toka-orange transition-colors">
                Características
              </a>
              <a href="#como-funciona" className="text-toka-gray-700 hover:text-toka-orange transition-colors">
                Cómo Funciona
              </a>
              <a href="#faq" className="text-toka-gray-700 hover:text-toka-orange transition-colors">
                FAQ
              </a>
              <Button className="bg-toka-orange hover:bg-toka-orange-600 text-white px-6 py-2 rounded-full w-full mt-4">
                Próximamente
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
