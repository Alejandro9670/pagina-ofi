import { Shield, Phone, Mail, MapPin, Heart, Home, Car, Briefcase, Building2, Users, FileCheck } from 'lucide-react';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section id="inicio" className="relative h-[600px] bg-gray-900">
        <div className="absolute inset-0">
          <img
            src="/inicio pagina corredora.jpg"
            alt="Seguros de vida y generales"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-[1240px] mx-auto px-6 h-full flex items-center">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Protegemos lo que más importa
            </h2>
            <p className="text-xl text-gray-200 leading-relaxed">
              Somos expertos en seguros con más de 15 años de experiencia. Asesoramiento personalizado para particulares y empresas.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="py-20 bg-[#fcfcfc]">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-sm font-semibold text-[#0095eb] uppercase tracking-wider mb-3">Quiénes Somos</h3>
              <h2 className="text-4xl font-bold text-[#161922] mb-6">Corredores de Seguros de Confianza</h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-[14px]" style={{ lineHeight: '25px' }}>
                SecureLife es una empresa de corredores de seguros con amplia trayectoria en el mercado nacional.
                Nos especializamos en brindar asesoría personalizada tanto a personas como a empresas,
                ayudándoles a encontrar las mejores soluciones de protección según sus necesidades específicas.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed text-[14px]" style={{ lineHeight: '25px' }}>
                Nuestro equipo de profesionales certificados trabaja con las principales aseguradoras del país,
                garantizando a nuestros clientes acceso a las mejores coberturas y precios del mercado.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="border-l-4 border-[#0095eb] pl-4">
                  <p className="text-3xl font-bold text-[#161922]">15+</p>
                  <p className="text-gray-600 text-sm">Años de experiencia</p>
                </div>
                <div className="border-l-4 border-[#0095eb] pl-4">
                  <p className="text-3xl font-bold text-[#161922]">5000+</p>
                  <p className="text-gray-600 text-sm">Clientes satisfechos</p>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Equipo profesional"
                className="rounded-lg shadow-lg w-full h-[500px] object-cover"
              />
            </div>
          </div>

          {/* Mission and Vision */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-[#0095eb] bg-opacity-10 p-3 rounded-lg">
                  <Shield className="h-8 w-8 text-[#0095eb]" />
                </div>
                <h3 className="text-2xl font-bold text-[#161922]">Nuestra Misión</h3>
              </div>
              <p className="text-gray-600 text-[14px]" style={{ lineHeight: '25px' }}>
                Brindar soluciones de protección integrales y personalizadas a nuestros clientes,
                asesorando con profesionalismo, transparencia y compromiso para garantizar su tranquilidad
                y la de sus familias. Trabajamos día a día para convertirnos en el aliado de confianza
                que protege lo que más valoran.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-[#0095eb] bg-opacity-10 p-3 rounded-lg">
                  <Shield className="h-8 w-8 text-[#0095eb]" />
                </div>
                <h3 className="text-2xl font-bold text-[#161922]">Nuestra Visión</h3>
              </div>
              <p className="text-gray-600 text-[14px]" style={{ lineHeight: '25px' }}>
                Ser reconocidos como la corredora de seguros líder en el mercado nacional,
                destacándonos por la excelencia en el servicio, la innovación en nuestras soluciones
                y el compromiso genuino con el bienestar de nuestros clientes. Aspiramos a ser la
                primera opción cuando las personas y empresas buscan proteger su futuro.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Types */}
      <section id="seguros" className="py-20 bg-white">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-sm font-semibold text-[#0095eb] uppercase tracking-wider mb-3">Nuestros Seguros</h3>
            <h2 className="text-4xl font-bold text-[#161922] mb-4">Soluciones Integrales de Protección</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-[14px]" style={{ lineHeight: '25px' }}>
              Ofrecemos una amplia gama de seguros adaptados a las necesidades de personas y empresas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Heart className="h-8 w-8" />, title: "Seguro de Vida", description: "Protección para ti y tu familia" },
              { icon: <Home className="h-8 w-8" />, title: "Seguro de Hogar", description: "Protege tu patrimonio" },
              { icon: <Car className="h-8 w-8" />, title: "Seguro de Vehículos", description: "Cobertura completa para tu auto" },
              { icon: <Briefcase className="h-8 w-8" />, title: "Seguro de Empresas", description: "Soluciones corporativas" },
              { icon: <Building2 className="h-8 w-8" />, title: "Seguro de PYMES", description: "Protección para tu negocio" },
              { icon: <Users className="h-8 w-8" />, title: "Seguro de Salud", description: "Atención médica de calidad" },
              { icon: <Shield className="h-8 w-8" />, title: "Seguro de Responsabilidad", description: "Protección legal" },
              { icon: <FileCheck className="h-8 w-8" />, title: "Seguros Especiales", description: "Coberturas personalizadas" }
            ].map((insurance, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 p-6 rounded hover:shadow-lg transition-all duration-300 group cursor-pointer"
              >
                <div className="text-[#0095eb] mb-4 group-hover:scale-110 transition-transform duration-300">
                  {insurance.icon}
                </div>
                <h3 className="text-lg font-bold text-[#161922] mb-2">{insurance.title}</h3>
                <p className="text-gray-600 text-sm">{insurance.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="servicios" className="py-20 bg-[#fcfcfc]">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-sm font-semibold text-[#0095eb] uppercase tracking-wider mb-3">Nuestros Servicios</h3>
            <h2 className="text-4xl font-bold text-[#161922] mb-4">¿Qué Hacemos?</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Asesoría Personalizada",
                description: "Analizamos tu situación particular y te recomendamos las mejores opciones del mercado según tus necesidades y presupuesto.",
                items: ["Análisis de riesgos", "Recomendaciones", "Presupuestos sin compromiso"]
              },
              {
                title: "Gestión de Pólizas",
                description: "Nos encargamos de todo el proceso de contratación y gestión de tus seguros para que no tengas que preocuparte de nada.",
                items: ["Contratación", "Renovaciones", "Modificaciones"]
              },
              {
                title: "Gestión de Cobranza",
                description: "Facilitamos el proceso de pago de tus pólizas con múltiples opciones y recordatorios automáticos para tu comodidad.",
                items: ["Múltiples formas de pago", "Recordatorios automáticos", "Refinanciación"]
              },
              {
                title: "Atención de Siniestros",
                description: "Te acompañamos en todo el proceso de tramitación de siniestros, defendiendo siempre tus intereses ante las compañías.",
                items: ["Tramitación", "Seguimiento", "Asesoría legal"]
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded border border-gray-200">
                <h3 className="text-xl font-bold text-[#161922] mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 text-[14px]" style={{ lineHeight: '25px' }}>
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-center space-x-2 text-gray-600 text-sm">
                      <div className="w-1.5 h-1.5 bg-[#0095eb] rounded-full"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Profesionales"
                className="rounded-lg shadow-lg w-full h-[400px] object-cover"
              />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-[#0095eb] uppercase tracking-wider mb-3">Por qué elegirnos</h3>
              <h2 className="text-4xl font-bold text-[#161922] mb-6">Tu tranquilidad es nuestra prioridad</h2>
              <div className="space-y-4">
                {[
                  "Independencia y objetividad en nuestras recomendaciones",
                  "Acceso a las mejores compañías aseguradoras",
                  "Atención personalizada y cercana",
                  "Experiencia de más de 15 años en el sector",
                  "Sin costos adicionales por nuestros servicios",
                  "Disponibilidad y compromiso con nuestros clientes"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#0095eb] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600 text-[14px]" style={{ lineHeight: '25px' }}>{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-[#fcfcfc]">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-sm font-semibold text-[#0095eb] uppercase tracking-wider mb-3">Contáctanos</h3>
              <h2 className="text-4xl font-bold text-[#161922] mb-6">Estamos aquí para ayudarte</h2>
              <p className="text-gray-600 mb-8 text-[14px]" style={{ lineHeight: '25px' }}>
                Solicita una cotización o consulta sin compromiso. Nuestro equipo de expertos está listo para asesorarte.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#0095eb] text-white p-3 rounded">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-bold text-[#161922] mb-1">Teléfono</p>
                    <p className="text-gray-600 text-sm">+34 900 123 456</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-[#0095eb] text-white p-3 rounded">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-bold text-[#161922] mb-1">Email</p>
                    <p className="text-gray-600 text-sm">contacto@securelife.es</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-[#0095eb] text-white p-3 rounded">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-bold text-[#161922] mb-1">Oficina</p>
                    <p className="text-gray-600 text-sm">Calle Principal 123, Madrid, España</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-[#161922] mb-6">Solicita una Cotización</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-sm">Nombre Completo *</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#0095eb] transition-colors text-sm"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-sm">Email *</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#0095eb] transition-colors text-sm"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-sm">Teléfono *</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#0095eb] transition-colors text-sm"
                    placeholder="+34 600 000 000"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-sm">Tipo de Seguro</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#0095eb] transition-colors text-sm">
                    <option>Selecciona una opción</option>
                    <option>Seguro de Vida</option>
                    <option>Seguro de Hogar</option>
                    <option>Seguro de Vehículos</option>
                    <option>Seguro de Empresas</option>
                    <option>Seguro de Salud</option>
                    <option>Otro</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-sm">Mensaje</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#0095eb] transition-colors resize-none text-sm"
                    placeholder="Cuéntanos qué necesitas..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#0095eb] text-white px-6 py-3 rounded hover:bg-[#0077bb] transition-colors font-medium"
                >
                  Enviar Solicitud
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
