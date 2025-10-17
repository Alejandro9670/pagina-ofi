import { Shield, Phone, Mail, Clock, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavigation = (page: string, hash?: string) => {
    setMobileMenuOpen(false);
    onNavigate(page);
    if (hash && page === 'home') {
      setTimeout(() => {
        const element = document.querySelector(hash);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gray-900 text-white py-2">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <a href="tel:+34900123456" className="flex items-center space-x-2 hover:text-blue-400 transition-colors">
                <Phone className="h-4 w-4" />
                <span>+34 900 123 456</span>
              </a>
              <a href="mailto:contacto@securelife.es" className="flex items-center space-x-2 hover:text-blue-400 transition-colors">
                <Mail className="h-4 w-4" />
                <span>contacto@securelife.es</span>
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <Clock className="h-4 w-4" />
              <span>Lun - Vie: 9:00 - 18:00</span>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white sticky top-0 z-50 shadow-sm">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="flex items-center justify-between py-4">
            <button
              onClick={() => handleNavigation('home')}
              className="flex items-center space-x-3 cursor-pointer"
            >
              <Shield className="h-10 w-10 text-[#0095eb]" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">SecureLife</h1>
                <p className="text-xs text-gray-600">Corredores de Seguros</p>
              </div>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <button
                onClick={() => handleNavigation('home')}
                className={`transition-colors font-medium ${
                  currentPage === 'home' ? 'text-[#0095eb]' : 'text-gray-700 hover:text-[#0095eb]'
                }`}
              >
                Inicio
              </button>
              <button
                onClick={() => handleNavigation('home', '#nosotros')}
                className="text-gray-700 hover:text-[#0095eb] transition-colors font-medium"
              >
                Nosotros
              </button>
              <button
                onClick={() => handleNavigation('home', '#seguros')}
                className="text-gray-700 hover:text-[#0095eb] transition-colors font-medium"
              >
                Seguros
              </button>
              <button
                onClick={() => handleNavigation('home', '#servicios')}
                className="text-gray-700 hover:text-[#0095eb] transition-colors font-medium"
              >
                Servicios
              </button>
              <button
                onClick={() => handleNavigation('team')}
                className={`transition-colors font-medium ${
                  currentPage === 'team' ? 'text-[#0095eb]' : 'text-gray-700 hover:text-[#0095eb]'
                }`}
              >
                Equipo
              </button>
              <button
                onClick={() => handleNavigation('home', '#contacto')}
                className="text-gray-700 hover:text-[#0095eb] transition-colors font-medium"
              >
                Contacto
              </button>
            </nav>

            <button className="hidden lg:block bg-[#0095eb] text-white px-6 py-2.5 rounded hover:bg-[#0077bb] transition-colors font-medium">
              Cotiza Online
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-gray-700"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t">
            <nav className="flex flex-col space-y-4 px-6 py-4">
              <button
                onClick={() => handleNavigation('home')}
                className={currentPage === 'home' ? 'text-[#0095eb] text-left' : 'text-gray-700 hover:text-[#0095eb] text-left'}
              >
                Inicio
              </button>
              <button
                onClick={() => handleNavigation('home', '#nosotros')}
                className="text-gray-700 hover:text-[#0095eb] text-left"
              >
                Nosotros
              </button>
              <button
                onClick={() => handleNavigation('home', '#seguros')}
                className="text-gray-700 hover:text-[#0095eb] text-left"
              >
                Seguros
              </button>
              <button
                onClick={() => handleNavigation('home', '#servicios')}
                className="text-gray-700 hover:text-[#0095eb] text-left"
              >
                Servicios
              </button>
              <button
                onClick={() => handleNavigation('team')}
                className={currentPage === 'team' ? 'text-[#0095eb] text-left' : 'text-gray-700 hover:text-[#0095eb] text-left'}
              >
                Equipo
              </button>
              <button
                onClick={() => handleNavigation('home', '#contacto')}
                className="text-gray-700 hover:text-[#0095eb] text-left"
              >
                Contacto
              </button>
              <button className="bg-[#0095eb] text-white px-6 py-2.5 rounded hover:bg-[#0077bb] transition-colors">
                Cotiza Online
              </button>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
