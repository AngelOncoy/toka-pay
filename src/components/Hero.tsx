
import { Button } from '@/components/ui/button';
import { CreditCard, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="pt-20 pb-16 bg-gradient-to-br from-toka-orange-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[80vh]">
          {/* Text Content */}
          <div className="lg:w-1/2 mb-12 lg:mb-0 animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-toka-orange-100 rounded-full text-toka-orange-700 text-sm font-medium mb-6">
              <Phone className="w-4 h-4 mr-2" />
              Próximamente en tu móvil
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-toka-gray-900 leading-tight mb-6">
              Todos tus <span className="text-toka-orange">pagos</span> en una sola app
            </h1>
            
            <p className="text-lg md:text-xl text-toka-gray-600 mb-8 leading-relaxed">
              TOKA revolucionará la forma en que pagas tus servicios. Una aplicación inteligente que conecta todas tus tarjetas y automatiza tus pagos mensuales.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="bg-toka-orange hover:bg-toka-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Únete a la lista de espera
              </Button>
              <Button variant="outline" size="lg" className="border-toka-orange text-toka-orange hover:bg-toka-orange hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300">
                Ver demo
              </Button>
            </div>
            
            <div className="flex items-center text-sm text-toka-gray-500">
              <div className="flex -space-x-2 mr-4">
                <div className="w-8 h-8 bg-toka-orange-200 rounded-full border-2 border-white"></div>
                <div className="w-8 h-8 bg-toka-orange-300 rounded-full border-2 border-white"></div>
                <div className="w-8 h-8 bg-toka-orange-400 rounded-full border-2 border-white"></div>
              </div>
              <span>+500 personas ya se registraron</span>
            </div>
          </div>

          {/* Visual Content */}
          <div className="lg:w-1/2 relative animate-scale-in">
            <div className="relative">
              {/* Phone Mockup */}
              <div className="mx-auto w-64 h-[500px] bg-toka-gray-900 rounded-[3rem] p-3 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                  {/* Status Bar */}
                  <div className="h-6 bg-toka-gray-900 flex items-center justify-center">
                    <div className="w-20 h-1 bg-white rounded-full"></div>
                  </div>
                  
                  {/* App Content */}
                  <div className="p-6 space-y-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-toka-orange to-toka-orange-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                        <img src="/assets/logotokablanco.png" alt="Logo" className="w-8 h-8 object-contain" />
                      </div>
                      <h3 className="text-xl font-bold text-toka-gray-900">TOKA</h3>
                      <p className="text-sm text-toka-gray-500">Gestiona tus pagos</p>
                    </div>
                    
                    {/* Cards Preview */}
                    <div className="space-y-3">
                      <div className="bg-gradient-to-r from-toka-orange to-toka-orange-600 p-4 rounded-xl text-white">
                        <div className="flex justify-between items-start mb-2">
                          <span className="text-xs opacity-80">Tarjeta Principal</span>
                          <img src="/assets/logotokablanco.png" className="w-4 h-4" />
                        </div>
                        <div className="text-lg font-mono">•••• •••• •••• 1234</div>
                      </div>
                      
                      <div className="bg-toka-gray-100 p-4 rounded-xl">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="font-semibold text-toka-gray-900">Luz</p>
                            <p className="text-sm text-toka-gray-500">Próximo pago: 15 Dic</p>
                          </div>
                          <span className="text-toka-orange font-bold">$45.00</span>
                        </div>
                      </div>
                      
                      <div className="bg-toka-gray-100 p-4 rounded-xl">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="font-semibold text-toka-gray-900">Internet</p>
                            <p className="text-sm text-toka-gray-500">Próximo pago: 20 Dic</p>
                          </div>
                          <span className="text-toka-orange font-bold">$39.99</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-toka-orange-200 rounded-full flex items-center justify-center animate-bounce">
                <CreditCard className="w-8 h-8 text-toka-orange" />
              </div>
              
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-toka-orange-100 rounded-full flex items-center justify-center">
                <Phone className="w-10 h-10 text-toka-orange" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
