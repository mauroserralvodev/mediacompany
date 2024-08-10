import React from 'react'

const Price = () => {
  return (
 <div className='mx-auto px-5 max-w-5xl py-20'>
    <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
     <h2 className="sm:text-5xl text-black text-3xl my-24 font-bold">Nuestros Precios</h2>
   </div>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:items-center">
        
      <div className="flex flex-col border-2 border-blue-600 text-center shadow-xl rounded-xl p-8 dark:border-blue-700 bg-black">
        <p className="mb-3"><span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-lg text-xs uppercase font-semibold bg-blue-100 text-blue-800 dark:bg-blue-600 dark:text-white">Most popular</span></p>
        <h4 className="font-medium text-lg text-gray-800 dark:text-neutral-200">Gestion RRSS</h4>
        <span className="mt-5 font-bold text-5xl text-gray-800 dark:text-neutral-200">
          80
          <span className="font-bold text-2xl -me-2">€</span>
        </span>
        <p className="mt-2 text-sm text-gray-500 dark:text-neutral-500">Todo lo que necesitas para tener presencia en redes.</p>
  
        <ul className="mt-7 space-y-2.5 text-sm">
          <li className="flex gap-x-2">
            <svg className="shrink-0 mt-0.5 size-4 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            <span className="text-gray-800 dark:text-neutral-400">
              Instagram
            </span>
          </li>
  
          <li className="flex gap-x-2">
            <svg className="shrink-0 mt-0.5 size-4 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            <span className="text-gray-800 dark:text-neutral-400">
              Youtube
            </span>
          </li>
  
          <li className="flex gap-x-2">
            <svg className="shrink-0 mt-0.5 size-4 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            <span className="text-gray-800 dark:text-neutral-400">
              Soporte al cliente
            </span>
          </li>
        </ul>
  
        <a className="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" href="#">
        Contactar Ahora
        </a>
      </div>
    
      <div className="flex flex-col border border-gray-200 text-center rounded-xl p-8 dark:border-neutral-800 bg-black">
        <h4 className="font-medium text-lg text-gray-800 dark:text-neutral-200">Re-Branding</h4>
        <span className="mt-5 font-bold text-5xl text-gray-800 dark:text-neutral-200">
          160
          <span className="font-bold text-2xl -me-2">€</span>
        </span>
        <p className="mt-2 text-sm text-gray-500 dark:text-neutral-500">Una actualización a la imagen de tu empresa.</p>
  
        <ul className="mt-7 space-y-2.5 text-sm">
          <li className="flex gap-x-2">
            <svg className="shrink-0 mt-0.5 size-4 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            <span className="text-gray-800 dark:text-neutral-400">
              Identidad de marca
            </span>
          </li>
  
          <li className="flex gap-x-2">
            <svg className="shrink-0 mt-0.5 size-4 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            <span className="text-gray-800 dark:text-neutral-400">
              Logo y patrones
            </span>
          </li>
  
          <li className="flex gap-x-2">
            <svg className="shrink-0 mt-0.5 size-4 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            <span className="text-gray-800 dark:text-neutral-400">
              Guia de uso
            </span>
          </li>
        </ul>
  
        <a className="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" href="#">
          Contactar Ahora
        </a>
      </div>
   
      <div className="flex flex-col border border-gray-200 text-center rounded-xl p-8 dark:border-neutral-800 bg-black">
        <h4 className="font-medium text-lg text-gray-800 dark:text-neutral-200">Pagina web</h4>
        <span className="mt-5 font-bold text-5xl text-gray-800 dark:text-neutral-200">
          220
          <span className="font-bold text-2xl -me-2">€</span>
        </span>
        <p className="mt-2 text-sm text-gray-500 dark:text-neutral-500">Maximiza tus ventas y profesionaliza tu negocio online.</p>
  
        <ul className="mt-7 space-y-2.5 text-sm">
          <li className="flex gap-x-2">
            <svg className="shrink-0 mt-0.5 size-4 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            <span className="text-gray-800 dark:text-neutral-400">
              Dominio
            </span>
          </li>
  
          <li className="flex gap-x-2">
            <svg className="shrink-0 mt-0.5 size-4 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            <span className="text-gray-800 dark:text-neutral-400">
              Web Completa
            </span>
          </li>
  
          <li className="flex gap-x-2">
            <svg className="shrink-0 mt-0.5 size-4 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            <span className="text-gray-800 dark:text-neutral-400">
              Correo Porfesional
            </span>
          </li>
        </ul>
  
        <a className="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" href="#">
        Contactar Ahora
        </a>
      </div>
     
    </div>
</div>
  )
}

export default Price