import { Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#161922] text-white py-12">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-8 w-8 text-[#0095eb]" />
              <span className="text-xl font-bold">SecureLife</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Corredores de seguros con más de 15 años de experiencia en el mercado.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-sm">Seguros</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Seguro de Vida</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Seguro de Hogar</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Seguro de Vehículos</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Seguro de Empresas</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-sm">Empresa</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Nosotros</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Servicios</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-sm">Contacto</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>+34 900 123 456</li>
              <li>contacto@securelife.es</li>
              <li>Calle Principal 123<br />Madrid, España</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; 2024 SecureLife. Todos los derechos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
