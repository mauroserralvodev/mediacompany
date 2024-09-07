import React, { useState } from 'react';
import ContactModal from './ContactModal';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-gradient-to-t from-blue-600 via-black to-black relative">
      <div className="mx-auto">
        <div className="">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 pt-24 space-y-8">
            <div className="max-w-[75rem] text-center mx-auto relative">
              <img
                src="/instagramlo.webp"
                alt="Instagram"
                className="absolute top-[-60px] left-[10%] w-14 h-14 animate-float rotate-6"
              />
              <img
                src="/tiktok.png"
                alt="TikTok"
                className="absolute sm:top-[200px] top-[400px] right-[15%] w-16 h-16 animate-float-slow rotate-12"
              />
              <img
                src="/youtube.webp"
                alt="YouTube"
                className="absolute sm:top-[300px] top-[400px] left-[30%] w-14 h-14 md:w-16 md:h-16 animate-float-fast -rotate-12 bg-white rounded-lg"
              />
              <img
                src="/xlogo2.png"
                alt="X"
                className="absolute top-[-80px] left-[60%] border-2 border-white rounded-lg w-14 h-14 md:w-16 md:h-16 animate-float-fast -rotate-6"
              />

              <h1 className="mt-20 block font-bold text-white text-4xl sm:text-6xl md:text-6xl lg:text-6xl">
                Gestionamos las <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">redes sociales</span> de tu negocio para que te enfoques en lo tuyo.
              </h1>
            </div>
            <div className="max-w-[75rem] text-center mx-auto">
              <p className="text-sm sm:text-lg text-gray-400">
                En Media Company, transformamos la manera en que creas tu presencia digital. Te ayudamos a profesionalizar las redes sociales de tu negocio y maximizar el impacto para atraer a nuevos clientes y aumentar tu presencia online.
              </p>
            </div>
            <div>
              <div className="text-center">
                <a href="/casos-de-exito" className="transition m-1 inline-flex p-4 justify-center items-center gap-x-3 text-center text-white border border-white bg-black hover:bg-blue-600 hover:border-blue-600 text-sm font-bold rounded-full">
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
          </div>
          <div className="w-full mt-24 flex justify-center items-center">
            <img className="lg:max-w-5xl md:max-w-5xl sm:max-w-2xl" src="/mockup2.png" alt="Mockup Bencastech" />
          </div>
        </div>
      </div>
      <ContactModal isOpen={isModalOpen} onClose={handleModalClose} />
    </div>
  );
};

export default Hero;
