import { Phone, X } from 'lucide-react';
import { useState } from 'react';

export default function FloatingCallButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-8 right-8 bg-[#0095eb] text-white px-6 py-4 rounded-full shadow-2xl hover:bg-[#0077bb] transition-all duration-300 flex items-center space-x-3 z-40 animate-pulse hover:animate-none group"
      >
        <div className="bg-white rounded-full p-2">
          <Phone className="h-6 w-6 text-[#0095eb]" />
        </div>
        <span className="font-bold text-lg">Te llamamos ahora</span>
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full relative animate-fadeIn">
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute -top-3 -right-3 bg-gray-900 text-white rounded-full p-2 hover:bg-gray-700 transition-colors z-10"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="grid md:grid-cols-2">
              {/* Left Side - Image */}
              <div className="bg-gradient-to-br from-[#0095eb] to-[#0077bb] p-8 rounded-l-lg flex flex-col justify-center text-white">
                <div className="mb-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <Shield className="h-8 w-8" />
                    <span className="text-xl font-bold">SecureLife</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-3">¡Estamos para ayudarte!</h3>
                  <p className="text-blue-100">Ingresa tu teléfono y te llamaremos de inmediato.</p>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Asesoría personalizada</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Sin compromiso</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Respuesta inmediata</span>
                  </div>
                </div>
                <div className="mt-8 hidden md:block">
                  <img
                    src="https://images.pexels.com/photos/7640443/pexels-photo-7640443.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Atención al cliente"
                    className="rounded-lg opacity-90"
                  />
                </div>
              </div>

              {/* Right Side - Form */}
              <div className="p-8">
                <h4 className="text-2xl font-bold text-[#161922] mb-6">Solicitar Llamada</h4>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2 text-sm">
                      Seleccione una opción *
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#0095eb] transition-colors text-sm">
                      <option>Seleccione una opción...</option>
                      <option>Seguro de Vida</option>
                      <option>Seguro de Hogar</option>
                      <option>Seguro de Vehículos</option>
                      <option>Seguro de Empresas</option>
                      <option>Seguro de Salud</option>
                      <option>Otro</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2 text-sm">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#0095eb] transition-colors text-sm"
                      placeholder="Tu nombre completo"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2 text-sm">
                      Teléfono *
                    </label>
                    <div className="flex space-x-2">
                      <input
                        type="text"
                        className="w-20 px-3 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#0095eb] transition-colors text-sm"
                        placeholder="Área"
                        maxLength={3}
                      />
                      <input
                        type="text"
                        className="flex-1 px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#0095eb] transition-colors text-sm"
                        placeholder="Número"
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Ej: 2 - 12345678 o 9 - 12345678</p>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600 transition-colors font-bold text-lg shadow-lg"
                  >
                    Solicitar Llamada
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    Al enviar este formulario aceptas nuestra política de privacidad
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function Shield({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}
