
import React, { useState } from 'react';
import ContactModal from '@/components/ContactModal';

const Gestion = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-black pb-20">
      <div className="max-w-6xl px-4 xl:px-0 py-10 lg:pt-20 mx-auto mb-10 mt-0">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="sm:text-5xl text-white text-3xl my-24 font-bold">
            ¿Qué incluye nuestra gestión de redes sociales y cómo mejoramos tu negocio?
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 lg:items-center mx-auto px-5">
          <div className="aspect-w-16 aspect-h-9 lg:aspect-none flex items-center justify-center">
            <img className="w-full object-cover max-w-96" src="/mockup5.png" alt="Image Description" />
          </div>
          <div>
            <div className="mb-4">
              <h3 className="text-black text-xs font-medium uppercase">Pasos</h3>
            </div>
            <div className="flex gap-x-5 ms-1">
              <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-700">
                <div className="relative z-10 size-8 flex justify-center items-center">
                  <span className="flex flex-shrink-0 justify-center items-center text-gray-50 font-semibold text-2xl uppercase rounded-full">1</span>
                </div>
              </div>
              <div className="grow pt-0.5 pb-8 sm:pb-12">
                <p className="text-xl lg:text-base text-neutral-400">
                  <span className="text-white">Estrategia de Contenidos Personalizada: </span>
                  Desarrollamos un plan de contenidos alineado con los objetivos y valores de tu marca. Identificando qué tipo de contenido se adapta mejor a tu audiencia.
                </p>
              </div>
            </div>
            <div className="flex gap-x-5 ms-1">
              <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-700">
                <div className="relative z-10 size-8 flex justify-center items-center">
                  <span className="flex flex-shrink-0 justify-center items-center text-gray-50 font-semibold text-2xl uppercase rounded-full">2</span>
                </div>
              </div>
              <div className="grow pt-0.5 pb-8 sm:pb-12">
                <p className="text-xl lg:text-base text-neutral-400">
                  <span className="text-white">Creación de Contenidos Visuales: </span>
                  Nos encargamos de diseñar y producir imágenes, videos, infografías y otros elementos visuales atractivos que capten la atención de tu público objetivo.
                </p>
              </div>
            </div>
            <div className="flex gap-x-5 ms-1">
              <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-700">
                <div className="relative z-10 size-8 flex justify-center items-center">
                  <span className="flex flex-shrink-0 justify-center items-center text-gray-50 font-semibold text-2xl uppercase rounded-full">3</span>
                </div>
              </div>
              <div className="grow pt-0.5 pb-8 sm:pb-12">
                <p className="text-xl md:text-base text-neutral-400">
                  <span className="text-white">Monitoreo y Análisis: </span>
                  Realizamos un seguimiento constante del rendimiento de tus redes sociales para ajustar las estrategias, proporcionar informes detallados sobre el crecimiento y el impacto en redes sociales.
                </p>
              </div>
            </div>
            <div className="flex gap-x-5 ms-1">
              <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-700">
                <div className="relative z-10 size-8 flex justify-center items-center">
                  <span className="flex flex-shrink-0 justify-center items-center text-gray-50 font-semibold text-2xl uppercase rounded-full">4</span>
                </div>
              </div>
              <div className="grow pt-0.5 pb-8 sm:pb-12">
                <p className="text-xl md:text-base text-neutral-400">
                  <span className="text-white">Gestión de la Comunidad y Atención al Cliente:</span>
                  Nos ocupamos de interactuar con tu comunidad respondiendo comentarios, mensajes directos y menciones de manera oportuna y profesional.
                </p>
              </div>
            </div>
            <button onClick={handleModalOpen} className="transition m-1 inline-flex p-4 justify-center items-center gap-x-3 text-center text-black border bg-white hover:bg-gray-300 hover:text-black border-black text-sm font-bold rounded-full">
              Contactar Ahora
              <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <ContactModal isOpen={isModalOpen} onClose={handleModalClose} />
    </div>
  );
}

export default Gestion;
