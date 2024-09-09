import React, { useState } from 'react';
import ContactModal from '../components/ContactModal';

const Price = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='bg-black'>
      <div className='mx-auto px-5 max-w-5xl py-20 pb-14 bg-black'>
        <div className="mx-auto max-w-[85rem]">
          <h2 className="sm:text-5xl text-white text-3xl mt-14 mb-2 font-bold">
            La imagen y reputación de tu empresa no tienen precio... o si
          </h2>
          <p className='text-white mb-14'>
            Contáctanos sin compromiso ahora y aumenta los ingresos y la presencia en redes de tu negocio, ofrecemos servicios excelentes a precios competitivos.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:items-center mt-24">
          
          <div className="flex flex-col border-2 text-center shadow-xl rounded-xl p-8 border-blue-700 bg-black">
            <p className="mb-3">
              <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-lg text-xs uppercase font-semibold bg-blue-600 text-white">Más popular</span>
            </p>
            <h4 className="font-medium text-lg text-neutral-200">Gestión RRSS</h4>
            <span className="font-bold text-5xl text-neutral-200">
              <del className='text-neutral-600 text-2xl'>200€</del>
              165<span className="font-bold text-2xl -me-2">€</span>
            </span>
            <p className="mt-2 text-sm text-neutral-500">Todo lo que necesitas para tener presencia en redes.</p>
            <ul className="mt-7 space-y-2.5 text-sm">
              <li className="flex gap-x-2">
                <svg className="shrink-0 mt-0.5 size-4 text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                <span className="text-neutral-400">Instagram</span>
              </li>
              <li className="flex gap-x-2">
                <svg className="shrink-0 mt-0.5 size-4 text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                <span className="text-neutral-400">Tiktok</span>
              </li>
              <li className="flex gap-x-2">
                <svg className="shrink-0 mt-0.5 size-4 text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                <span className="text-neutral-400">Soporte al cliente</span>
              </li>
            </ul>
            <button onClick={handleModalOpen} className="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-blue-600 bg-blue-600 shadow-sm text-white hover:bg-neutral-800 hover:text-white">
              Contactar Ahora
            </button>
          </div>

          <div className="flex flex-col border text-center rounded-xl p-8 border-neutral-800 bg-black">
            <h4 className="font-medium text-lg text-neutral-200">Re-Branding</h4>
            <span className="mt-5 font-bold text-5xl text-neutral-200">
              679
              <span className="font-bold text-2xl -me-2">€</span>
            </span>
            <p className="mt-2 text-sm text-neutral-500">Una actualización a la imagen de tu empresa.</p>
            <ul className="mt-7 space-y-2.5 text-sm">
              <li className="flex gap-x-2">
                <svg className="shrink-0 mt-0.5 size-4 text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                <span className="text-neutral-400">Identidad de marca</span>
              </li>
              <li className="flex gap-x-2">
                <svg className="shrink-0 mt-0.5 size-4 text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                <span className="text-neutral-400">Logo y patrones</span>
              </li>
              <li className="flex gap-x-2">
                <svg className="shrink-0 mt-0.5 size-4 text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                <span className="text-neutral-400">Renovación visual</span>
              </li>
            </ul>
            <button onClick={handleModalOpen} className="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-neutral-700 bg-neutral-900 text-white hover:bg-neutral-800 hover:text-white">
              Contactar Ahora
            </button>
          </div>

          <div className="flex flex-col border text-center rounded-xl p-8 border-neutral-800 bg-black">
            <h4 className="font-medium text-lg text-neutral-200">Filmación Eventos</h4>
            <span className="mt-8 font-bold text-4xl text-neutral-200">
              Consultar
              <span className="font-bold text-2xl -me-2"></span>
            </span>
            <p className="mt-2 text-sm text-neutral-500">Lleva tu marca al siguiente nivel visualmente.</p>
            <ul className="mt-7 space-y-2.5 text-sm">
              <li className="flex gap-x-2">
                <svg className="shrink-0 mt-0.5 size-4 text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                <span className="text-neutral-400">Producción de video</span>
              </li>
              <li className="flex gap-x-2">
                <svg className="shrink-0 mt-0.5 size-4 text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                <span className="text-neutral-400">Fotografía profesional</span>
              </li>
              <li className="flex gap-x-2">
                <svg className="shrink-0 mt-0.5 size-4 text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                <span className="text-neutral-400">Edición avanzada</span>
              </li>
            </ul>
            <button onClick={handleModalOpen} className="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-neutral-700 bg-neutral-900 text-white hover:bg-neutral-800 hover:text-white">
              Contactar Ahora
            </button>
          </div>
        </div>
          <p className='text-gray-400 text-sm my-14'>
            *Los precios de servicios recurrentes como la gestión de redes sociales son mensuales y pueden ser modificados con un aviso previo de 30 días.*
          </p>
        <ContactModal isOpen={isModalOpen} onClose={handleModalClose} />
      </div>
    </div>
  );
};

export default Price;
