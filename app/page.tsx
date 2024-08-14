'use client';

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Price from '../components/price';
import Footer from '@/components/footer';


const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 inset-x-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-black text-sm py-3 sm:py-0">
        <nav className="relative max-w-[86rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8" aria-label="Global">
          <div className="flex items-center justify-between">
            <a href="/" className="cursor-pointer">
              <img src='/logo3.png' className="lg:w-80 lg:h-14 md:w-40 md:h-10 sm:w-48 sm:h-11 w-44 h-11 py-2" alt="Logo Bencastech" />
            </a>
            <div className="sm:hidden">
              <button
                type="button"
                className="hs-collapse-toggle size-9 flex justify-center items-center text-sm font-semibold rounded-lg disabled:opacity-50 disabled:pointer-events-none text-white"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-controls="navbar-collapse-with-animation"
                aria-label="Toggle navigation"
              >
                <svg className={`${isMenuOpen ? 'hidden' : 'block'} flex-shrink-0 size-4`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" x2="21" y1="6" y2="6" />
                  <line x1="3" x2="21" y1="12" y2="12" />
                  <line x1="3" x2="21" y1="18" y2="18" />
                </svg>
                <svg className={`${isMenuOpen ? 'block' : 'hidden'} flex-shrink-0 size-4`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>
          </div>
          <div id="navbar-collapse-with-animation" className={`${isMenuOpen ? 'block' : 'hidden'} hs-collapse overflow-hidden transition-all duration-300 basis-full grow sm:block`}>
            <div className="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:ps-7">
              <a href="/dash" className="transition font-bold p-3 px-4 text-center bg-white rounded-full text-black hover:text-white hover:bg-blue-500 sm:my-6">Contactar Ahora</a>
            </div>
          </div>
        </nav>
      </header>


      <main id="content">
      <div className="bg-gradient-to-t from-blue-600 via-white to-white relative">
  <div className="mx-auto">
    <div className="">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 pt-24 space-y-8">
        <div className="max-w-[75rem] text-center mx-auto relative">
          {/* Logos flotantes */}
          <img
            src="/instagram.webp"
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
            className="absolute sm:top-[300px] top-[400px] left-[30%] w-14 h-14 md:w-16 md:h-16 animate-float-fast -rotate-12"
          />
          <img
            src="/xlogo.webp"
            alt="X"
            className="absolute top-[-80px] left-[60%] w-14 h-14 md:w-16 md:h-16 animate-float-fast -rotate-6"
          />

          <h1 className="mt-20 block font-bold text-black text-4xl sm:text-6xl md:text-6xl lg:text-6xl">
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
            <a href="/casos-de-exito" className="transition m-1 inline-flex p-4 justify-center items-center gap-x-3 text-center text-white border bg-black hover:bg-blue-600 border-black text-sm font-bold rounded-full">
              Casos de Éxito
            </a>
            <a href="/dash" className="transition m-1 inline-flex p-4 justify-center items-center gap-x-3 text-center text-black border bg-white hover:bg-gray-300 hover:text-black border-black text-sm font-bold rounded-full">
              Contactar Ahora
              <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="w-full mt-24 flex justify-center items-center">
        <img className="lg:max-w-5xl md:max-w-5xl sm:max-w-2xl" src="/mockup.png" alt="Mockup Bencastech" />
      </div>
    </div>
  </div>
</div>




<div className="bg-black">
 <div className="max-w-6xl px-4 xl:px-0 py-10 lg:pt-20 lg:pb-20 mx-auto mb-10 mt-0">
 <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
     <h2 className="sm:text-5xl text-white text-3xl my-24 font-bold">¿Qué incluye nuestra gestión de redes sociales y cómo mejoramos tu negocio?</h2>
   </div>
   <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 lg:items-center mx-auto px-5">
     <div className="aspect-w-16 aspect-h-9 lg:aspect-none flex items-center justify-center">
       <img className="w-full object-cover max-w-96" src="/mockup5.png" alt="Image Description"/>
     </div>
     <div>
       <div className="mb-4">
         <h3 className="text-black text-xs font-medium uppercase">
           Pasos
         </h3>
       </div>
       <div className="flex gap-x-5 ms-1">
         <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-700">
           <div className="relative z-10 size-8 flex justify-center items-center">
             <span className="flex flex-shrink-0 justify-center items-center text-gray-50 font-semibold text-2xl uppercase rounded-full">
               1
             </span>
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
             <span className="flex flex-shrink-0 justify-center items-center text-gray-50 font-semibold text-2xl uppercase rounded-full">
               2
             </span>
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
             <span className="flex flex-shrink-0 justify-center items-center text-gray-50 font-semibold text-2xl uppercase rounded-full">
               3
             </span>
           </div>
         </div>
         <div className="grow pt-0.5 pb-8 sm:pb-12">
           <p className="text-xl md:text-base text-neutral-400">
             <span className="text-white">Monitoreo y Análisis: </span>
             Realizamos un seguimiento constante del rendimiento de tus redes sociales para ajustar las estrategias, proporcionar informes detallados sobre el crecimiento y el impacto en redes sociales.           </p>
         </div>
       </div>
       <div className="flex gap-x-5 ms-1">
         <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-700">
           <div className="relative z-10 size-8 flex justify-center items-center">
             <span className="flex flex-shrink-0 justify-center items-center text-gray-50 font-semibold text-2xl uppercase rounded-full">
               4
             </span>
           </div>
         </div>
         <div className="grow pt-0.5 pb-8 sm:pb-12">
           <p className="text-xl md:text-base text-neutral-400">
             <span className="text-white">Gestión de la Comunidad y Atención al Cliente:</span>
             Nos ocupamos de interactuar con tu comunidad respondiendo comentarios, mensajes directos y menciones de manera oportuna y profesional.
           </p>
         </div>
       </div>
       <a href="/dash" className="transition group inline-flex items-center gap-x-2 py-2 px-3 bg-blue-500 hover:bg-transparent border border-blue-500 hover:text-blue-500 font-medium text-sm text-white rounded-full focus:outline-none">
       <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
         Empezar ahora
       </a>
     </div>
   </div>
 </div>
</div>

   <Price/>
  </main>
 <Footer/>
</div>
  );
}

export default App;
