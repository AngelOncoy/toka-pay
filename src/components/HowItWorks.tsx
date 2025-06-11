import { CreditCard, Settings, DollarSign } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: CreditCard,
      title: "Ingresa tus credenciales",
      description: "Ingresa a nuestro aplicativo con seguridad para evitar fraudes futuros"
    },
    {
      number: "02",
      icon: Settings,
      title: "Configura tus Servicios",
      description: "Conecta tus servicios (luz, agua, internet, etc.) y asigna qué tarjeta usar para cada uno"
    },
    {
      number: "03",
      icon: DollarSign,
      title: "Automatiza y Relájate",
      description: "TOKA se encarga de todos tus pagos automáticamente, solo recibes confirmaciones"
    }
  ];

  return (
      <section id="como-funciona" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-toka-gray-900 mb-6">
              ¿Cómo Funciona TOKA?
            </h2>
          </div>

          {/* Contenedor para video y texto */}
          <div className="grid md:grid-cols-2 gap-16 mb-8 space-7">
            {/* Descripción a la izquierda */}
            <div className="text-center md:text-left flex flex-col justify-center">
              <p className="text-lg text-toka-gray-600">
                En solo 3 simples pasos, tendrás todos tus pagos organizados y automatizados. La configuración inicial toma menos de 10 minutos.
              </p>
            </div>

            {/* Video a la derecha */}
            <div className="w-full h-64 bg-gradient-to-br from-toka-orange to-toka-orange-600 rounded-2xl overflow-hidden">
              <video
                  className="w-full h-full object-cover"
                  controls
                  src="/assets/videoxd.mp4" // Cambia esto a la ruta de tu video
              />
            </div>
          </div>

          {/* Restante de tu código para los pasos */}
          <div className="relative">
            {/* Connection Lines */}
            <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-toka-orange-200"></div>

            <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                    <div
                        key={index}
                        className="text-center animate-slide-up"
                        style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      {/* Step Number */}
                      <div className="relative mb-8">
                        <div className="w-20 h-20 bg-gradient-to-br from-toka-orange to-toka-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg relative z-10">
                          <Icon className="w-10 h-10 text-white" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-toka-orange-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                          {step.number}
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-toka-gray-900 mb-4">
                        {step.title}
                      </h3>
                      <p className="text-toka-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                );
              })}
            </div>
          </div>

          {/* Business Model Section */}
          <div className="mt-20 bg-gradient-to-br from-toka-orange-50 to-toka-orange-100 rounded-3xl p-8 md:p-12 animate-fade-in">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-toka-gray-900 mb-4">
                Modelo de Negocio Transparente
              </h3>
              <p className="text-lg text-toka-gray-700">
                TOKA es gratuita para usuarios. Generamos ingresos a través de pequeñas comisiones por transacciones procesadas.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-3xl mb-3">💳</div>
                <h4 className="font-semibold text-toka-gray-900 mb-2">Para Usuarios</h4>
                <p className="text-toka-gray-600 text-sm">Aplicación completamente gratuita sin mensualidades</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-3xl mb-3">🏦</div>
                <h4 className="font-semibold text-toka-gray-900 mb-2">Comisiones</h4>
                <p className="text-toka-gray-600 text-sm">Pequeño porcentaje por transacción procesada exitosamente</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-3xl mb-3">🤝</div>
                <h4 className="font-semibold text-toka-gray-900 mb-2">Win-Win</h4>
                <p className="text-toka-gray-600 text-sm">Tú ahorras tiempo, nosotros crecemos contigo</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default HowItWorks;
