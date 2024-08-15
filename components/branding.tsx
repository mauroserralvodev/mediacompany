// components/Branding.tsx

import React, { useState } from 'react';
import ContactModal from '@/components/ContactModal'; // Asegúrate de que la ruta es correcta

const Branding = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='bg-white'>
      <section className="text-white body-font mx-auto max-w-5xl py-10">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0">
            <h2 className="text-6xl font-bold text-black mb-8">Re-Branding</h2>
            <p className="leading-relaxed text-black mb-8">
              Un Re-branding va mucho mas alla de un cambio de logo, transformamos la identidad visual y conceptual de tu marca para alinearla con tus objetivos y conectar de manera más efectiva con tu audiencia. Analizamos profundamente la percepción de tu marca, rediseñamos elementos clave como el logo, paleta de colores y tipografía para crear una marca consistente. Un rebranding no es solo un cambio estético, es una estrategia para revitalizar tu marca y posicionarla con fuerza renovada.
            </p>
            <div className="">
              <a href="/casos-de-exito" className="transition m-1 inline-flex p-4 justify-center items-center gap-x-3 text-center text-white border bg-black hover:bg-blue-600 border-black hover:border-blue-600 text-sm font-bold rounded-full">
                Casos de Éxito
              </a>
              <button onClick={handleModalOpen} className="transition m-1 inline-flex p-4 justify-center items-center gap-x-3 text-center text-black border bg-white hover:bg-gray-300 hover:text-black border-black text-sm font-bold rounded-full">
                Contactar Ahora
                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>
          <div className="sm:w-3/6 w-full">
            <img className="" src="/branding2.png" alt="Pangea Software Interface" />
          </div>
        </div>
      </section>

      {/* Renderiza el modal */}
      <ContactModal isOpen={isModalOpen} onClose={handleModalClose} />
    </div>
  );
}

export default Branding;
