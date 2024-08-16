import React from 'react'

const Form = () => {
  return (
    <div className="max-w-[50rem] min-h-[55rem] flex flex-col mx-auto size-full">
  <header className="mb-auto flex justify-center z-50 w-full py-4">
    <a href="/" className="cursor-pointer">
        <img src='/logo3.png' className="lg:w-80 lg:h-16 md:w-40 md:h-10 sm:w-52 sm:h-12 w-44 h-11 py-2" alt="Logo Bencastech" />
    </a>
  </header>
  
  <main id="content">
    <div className="text-center py-10 px-4 sm:px-6 lg:px-8">
      <h1 className="block text-7xl font-bold text-white sm:text-9xl">¡Gracias!</h1>
      <p className="mt-3 text-xl text-gray-300">Nos pondremos en contacto contigo pronto.</p>
      <p className="text-gray-600 text-sm">*Esta accion no es reversible, al enviar has aceptado los terminos y condiciones de la plataforma*</p>
      <div className="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
        <a className="w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" href="/">
          <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          Volver Atras
        </a>
      </div>
    </div>
  </main>
  
  <footer className="mt-auto text-center py-5">
    <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
      <p className="text-sm text-gray-500">© 2024 Media Company — All rights reserved.</p>
    </div>
  </footer>
 
</div>
  )
}

export default Form