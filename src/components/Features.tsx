
import { CreditCard, Settings, DollarSign, Phone } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: CreditCard,
      title: "Múltiples Tarjetas",
      description: "Conecta todas tus tarjetas de débito y crédito en una sola plataforma segura"
    },
    {
      icon: Settings,
      title: "Pagos Programados",
      description: "Configura pagos automáticos para cada servicio con la tarjeta que prefieras"
    },
    {
      icon: DollarSign,
      title: "Control de Gastos",
      description: "Visualiza todos tus gastos mensuales y optimiza el uso de tus tarjetas"
    },
    {
      icon: Phone,
      title: "Notificaciones Smart",
      description: "Recibe alertas antes de cada pago y confirmaciones de transacciones exitosas"
    }
  ];

  return (
    <section id="caracteristicas" className="py-20 bg-toka-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-toka-gray-900 mb-6">
            Características Principales
          </h2>
          <p className="text-lg text-toka-gray-600 max-w-3xl mx-auto">
            TOKA está diseñada para simplificar tu vida financiera con tecnología de vanguardia y una experiencia de usuario excepcional.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-toka-orange to-toka-orange-600 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-toka-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-toka-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Additional Features */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 animate-fade-in">
            <div className="text-4xl mb-4">🔒</div>
            <h4 className="text-lg font-semibold text-toka-gray-900 mb-2">Seguridad Bancaria</h4>
            <p className="text-toka-gray-600">Encriptación de nivel bancario para proteger toda tu información</p>
          </div>
          
          <div className="text-center p-6 animate-fade-in">
            <div className="text-4xl mb-4">⚡</div>
            <h4 className="text-lg font-semibold text-toka-gray-900 mb-2">Procesamiento Rápido</h4>
            <p className="text-toka-gray-600">Pagos procesados en tiempo real con confirmación inmediata</p>
          </div>
          
          <div className="text-center p-6 animate-fade-in">
            <div className="text-4xl mb-4">📱</div>
            <h4 className="text-lg font-semibold text-toka-gray-900 mb-2">Interfaz Intuitiva</h4>
            <p className="text-toka-gray-600">Diseño simple y moderno que cualquier persona puede usar</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
