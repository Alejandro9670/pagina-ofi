import { Mail, Linkedin } from 'lucide-react';

const teamMembers = [
  {
    name: "María González",
    position: "Directora General",
    image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Con más de 20 años de experiencia en el sector asegurador, María lidera nuestro equipo con una visión estratégica enfocada en la excelencia del servicio al cliente.",
    email: "maria.gonzalez@securelife.es"
  },
  {
    name: "Carlos Martínez",
    position: "Gerente de Operaciones",
    image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Especialista en gestión de riesgos empresariales con 15 años de trayectoria. Carlos coordina todas nuestras operaciones para garantizar un servicio eficiente.",
    email: "carlos.martinez@securelife.es"
  },
  {
    name: "Ana López",
    position: "Asesora Senior de Seguros",
    image: "https://images.pexels.com/photos/3756620/pexels-photo-3756620.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Experta en seguros de vida y salud. Ana se especializa en crear soluciones personalizadas que se adaptan perfectamente a las necesidades de cada cliente.",
    email: "ana.lopez@securelife.es"
  },
  {
    name: "Roberto Sánchez",
    position: "Asesor de Seguros Empresariales",
    image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Con certificación en seguros corporativos, Roberto ayuda a empresas de todos los tamaños a proteger sus activos y operaciones de manera integral.",
    email: "roberto.sanchez@securelife.es"
  },
  {
    name: "Laura Fernández",
    position: "Especialista en Seguros de Hogar y Auto",
    image: "https://images.pexels.com/photos/3756011/pexels-photo-3756011.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Laura cuenta con amplia experiencia en seguros patrimoniales. Su enfoque detallista garantiza que cada cliente obtenga la mejor cobertura para su hogar y vehículos.",
    email: "laura.fernandez@securelife.es"
  },
  {
    name: "David Torres",
    position: "Coordinador de Atención al Cliente",
    image: "https://images.pexels.com/photos/3778212/pexels-photo-3778212.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "David lidera nuestro equipo de atención al cliente, asegurando que cada consulta y siniestro se maneje con la máxima eficiencia y profesionalismo.",
    email: "david.torres@securelife.es"
  }
];

export default function TeamPage() {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-[1240px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h3 className="text-sm font-semibold text-[#0095eb] uppercase tracking-wider mb-3">Nuestro Equipo</h3>
          <h1 className="text-5xl font-bold text-[#161922] mb-6">Conoce a Nuestros Profesionales</h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-[14px]" style={{ lineHeight: '25px' }}>
            Un equipo de expertos certificados comprometidos con brindarte el mejor asesoramiento y servicio.
            Cada miembro aporta años de experiencia y dedicación para proteger lo que más valoras.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden h-80">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="flex space-x-3">
                    <a
                      href={`mailto:${member.email}`}
                      className="bg-white text-[#0095eb] p-2 rounded-full hover:bg-[#0095eb] hover:text-white transition-colors"
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                    <button className="bg-white text-[#0095eb] p-2 rounded-full hover:bg-[#0095eb] hover:text-white transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#161922] mb-1">{member.name}</h3>
                <p className="text-[#0095eb] font-semibold text-sm mb-4">{member.position}</p>
                <p className="text-gray-600 text-[14px]" style={{ lineHeight: '25px' }}>
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-br from-[#0095eb] to-[#0077bb] rounded-lg p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">¿Quieres formar parte de nuestro equipo?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Estamos siempre buscando profesionales talentosos y comprometidos que quieran crecer con nosotros.
            Si te apasiona el mundo de los seguros, envíanos tu CV.
          </p>
          <button className="bg-white text-[#0095eb] px-8 py-3 rounded hover:bg-gray-100 transition-colors font-semibold">
            Enviar CV
          </button>
        </div>
      </div>
    </div>
  );
}
