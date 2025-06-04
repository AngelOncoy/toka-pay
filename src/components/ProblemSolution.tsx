
import { CreditCard, DollarSign } from 'lucide-react';

const ProblemSolution = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-toka-gray-900 mb-6">
            ¿Cansado de olvidar tus pagos?
          </h2>
          <p className="text-lg text-toka-gray-600 max-w-3xl mx-auto">
            TOKA nace para resolver el problema que todos enfrentamos: gestionar múltiples pagos con diferentes tarjetas y nunca olvidar una fecha de vencimiento.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Problem */}
          <div className="space-y-8 animate-slide-up">
            <div className="text-center md:text-left">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6">
                <span className="text-2xl">😰</span>
              </div>
              <h3 className="text-2xl font-bold text-toka-gray-900 mb-4">El Problema</h3>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-red-600 text-sm">✗</span>
                </div>
                <div>
                  <h4 className="font-semibold text-toka-gray-900 mb-2">Múltiples aplicaciones</h4>
                  <p className="text-toka-gray-600">Cada servicio tiene su propia app o portal de pago</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-red-600 text-sm">✗</span>
                </div>
                <div>
                  <h4 className="font-semibold text-toka-gray-900 mb-2">Fechas olvidadas</h4>
                  <p className="text-toka-gray-600">Recargos por pagos tardíos que se acumulan mes a mes</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-red-600 text-sm">✗</span>
                </div>
                <div>
                  <h4 className="font-semibold text-toka-gray-900 mb-2">Gestión manual</h4>
                  <p className="text-toka-gray-600">Tiempo perdido recordando qué pagar y cuándo</p>
                </div>
              </div>
            </div>
          </div>

          {/* Solution */}
          <div className="space-y-8 animate-slide-up">
            <div className="text-center md:text-left">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-toka-orange-100 rounded-full mb-6">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-2xl font-bold text-toka-gray-900 mb-4">La Solución TOKA</h3>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-toka-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CreditCard className="w-4 h-4 text-toka-orange" />
                </div>
                <div>
                  <h4 className="font-semibold text-toka-gray-900 mb-2">Una sola aplicación</h4>
                  <p className="text-toka-gray-600">Todos tus servicios conectados en un solo lugar</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-toka-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-toka-orange text-sm">⏰</span>
                </div>
                <div>
                  <h4 className="font-semibold text-toka-gray-900 mb-2">Pagos automáticos</h4>
                  <p className="text-toka-gray-600">Nunca más olvides una fecha de vencimiento</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-toka-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <DollarSign className="w-4 h-4 text-toka-orange" />
                </div>
                <div>
                  <h4 className="font-semibold text-toka-gray-900 mb-2">Control inteligente</h4>
                  <p className="text-toka-gray-600">Asigna diferentes tarjetas a diferentes servicios automáticamente</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
