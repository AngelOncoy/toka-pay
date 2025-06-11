
import { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [

    {
      question: "¿Es seguro conectar mis tarjetas a TOKA?",
      answer: "Absolutamente. TOKA utiliza encriptación de nivel bancario y cumple con todos los estándares de seguridad PCI DSS. Almacenamos de manera encriptada los datos para sus usos, solo tokens seguros para procesar pagos."
    },
    {
      question: "¿Qué servicios podré pagar con TOKA?",
      answer: "Podrás pagar servicios básicos como luz, agua, gas, internet, telefonía, streaming, seguros y más. Trabajamos constantemente para agregar nuevos proveedores de servicios a la plataforma."
    },
    {
      question: "¿Cuánto cuesta usar TOKA?",
      answer: "No cobramos mensualidades ni tarifas de registro. Nuestros ingresos provienen de pequeñas comisiones cuando se realiza el pago de un servicios que es impercetible."
    },
    {
      question: "¿Puedo cancelar un pago programado?",
      answer: "Sí, tendrás control total sobre tus pagos. Podrás pausar, modificar o cancelar cualquier pago programado desde la aplicación hasta 24 horas antes del procesamiento."
    },
    {
      question: "¿Qué pasa si mi tarjeta no tiene fondos?",
      answer: "Si ninguna tarjeta puede procesar el pago, recibirás una notificación inmediata para que puedas resolver la situación."
    },
    {
      question: "¿Funcionará en todos los bancos?",
      answer: "Estamos trabajando para integrar con los principales bancos del país. En el lanzamiento soportaremos las instituciones financieras más populares y continuaremos agregando más bancos."
    },
    {
      question: "¿Cómo me registro en la lista de espera?",
      answer: "Simplemente haz clic en 'Únete a la lista de espera' y proporciona tu email. Te notificaremos tan pronto como TOKA esté disponible para descarga y te daremos acceso prioritario."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-toka-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-toka-gray-900 mb-6">
            Preguntas Frecuentes
          </h2>
          <p className="text-lg text-toka-gray-600 max-w-3xl mx-auto">
            Resolvemos las dudas más comunes sobre TOKA. ¿No encuentras tu respuesta? Contáctanos directamente.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-sm border border-toka-gray-200 overflow-hidden animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <button
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-toka-gray-50 transition-colors"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-lg font-semibold text-toka-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-toka-orange-100 flex items-center justify-center transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}>
                    <svg className="w-4 h-4 text-toka-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-5 animate-accordion-down">
                    <p className="text-toka-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
