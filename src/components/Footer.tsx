
import { CreditCard } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-toka-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-toka-orange to-toka-orange-600 rounded-lg flex items-center justify-center">
                <CreditCard className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold">TOKA</span>
            </div>
            <p className="text-toka-gray-300 mb-6 max-w-md">
              La revolución en pagos de servicios está llegando. Una aplicación que simplificará tu vida financiera para siempre.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-toka-orange rounded-full flex items-center justify-center hover:bg-toka-orange-600 transition-colors">
                <span className="text-sm font-bold">f</span>
              </a>
              <a href="#" className="w-10 h-10 bg-toka-orange rounded-full flex items-center justify-center hover:bg-toka-orange-600 transition-colors">
                <span className="text-sm font-bold">t</span>
              </a>
              <a href="#" className="w-10 h-10 bg-toka-orange rounded-full flex items-center justify-center hover:bg-toka-orange-600 transition-colors">
                <span className="text-sm font-bold">in</span>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#inicio" className="text-toka-gray-300 hover:text-toka-orange transition-colors">Inicio</a></li>
              <li><a href="#caracteristicas" className="text-toka-gray-300 hover:text-toka-orange transition-colors">Características</a></li>
              <li><a href="#como-funciona" className="text-toka-gray-300 hover:text-toka-orange transition-colors">Cómo Funciona</a></li>
              <li><a href="#faq" className="text-toka-gray-300 hover:text-toka-orange transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2">
              <li className="text-toka-gray-300">info@toka.app</li>
              <li className="text-toka-gray-300">soporte@toka.app</li>
              <li className="text-toka-gray-300">+1 (555) 123-4567</li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-toka-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-toka-gray-400 text-sm mb-4 md:mb-0">
            © 2024 TOKA. Todos los derechos reservados.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-toka-gray-400 hover:text-toka-orange transition-colors">Términos de Servicio</a>
            <a href="#" className="text-toka-gray-400 hover:text-toka-orange transition-colors">Política de Privacidad</a>
            <a href="#" className="text-toka-gray-400 hover:text-toka-orange transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
