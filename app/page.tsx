'use client';

import React, { useState, useEffect } from 'react';
import Price from '../components/price';
import Footer from '@/components/footer';
import Branding from '@/components/branding';
import Gestion from '@/components/gestion';
import Hero from '@/components/hero';
import ContactModal from '@/components/ContactModal'; 

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return null;
  }

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 inset-x-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-black text-sm py-3 sm:py-0">
        <nav className="relative max-w-[86rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8" aria-label="Global">
          <div className="flex items-center justify-between">
            <a href="/" className="cursor-pointer">
              <img src='/logo3.png' className="lg:w-80 lg:h-14 md:w-40 md:h-10 sm:w-52 sm:h-12 w-44 h-11 py-2" alt="Logo Bencastech" />
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
              <button onClick={handleModalOpen} className="transition font-bold p-3 px-4 text-center bg-white rounded-full text-black hover:text-white hover:bg-blue-500 sm:my-6">
                Contactar Ahora
              </button>
            </div>
          </div>
        </nav>
      </header>
      <main id="content">
        <Hero />
        <Gestion />
        <Branding />
        <Price />
      </main>
      <Footer />
      <ContactModal isOpen={isModalOpen} onClose={handleModalClose} />
    </div>
  );
}

export default App;
