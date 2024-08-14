import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="bg-black inset-x-0 w-full pt-3 px-4 sm:px-6 lg:px-8 mx-auto border-t border-neutral-800">
        <div className="px-5 py-8 mx-auto flex items-center sm:flex-row flex-col max-w-[85rem]">
          <a className="flex text-lg items-center text-white mb-4 md:mb-0">
          <img src='/logo3.png' className="lg:w-64 lg:h-14 md:w-40 md:h-10 sm:w-48 sm:h-10 w-44 h-10 py-2" alt="Logo MC" />
          </a>
          <p className="text-sm text-white sm:ml-4 sm:pl-4 text-center sm:border-l-2 border-neutral-600 sm:py-2 sm:mt-0 mt-4">© 2024 Media Company — All rights reserved.
          </p>
          <div className='inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start'>
            <a href='/news' className='mx-2 text-sm text-white font-bold'>News</a>
            <a href='/pricing' className='mx-2 text-sm text-white font-bold'>Pricing</a>
            <a href='/terms' className='mx-2 text-sm text-white font-bold'>Terms</a>
          </div>
        </div>
      </footer>
      <div className='bg-neutral-900'>
        <div className="inset-x-0 mx-auto pb-4">
          <div className="mx-auto items-center max-w-[85rem]">
            <p className='text-white text-sm max-w-[85rem] p-4'>En Media Company, nos dedicamos a ofrecer servicios especializados para la gestión de redes sociales y marca. No garantizamos resultados específicos, ya que estos pueden variar según diversos factores. No asumimos ninguna responsabilidad por eventuales contratiempos, perjuicios o dificultades que pudieran emerger para tu empresa como resultado del contenido que se publique bajo nuestra gestión. Para cualquier duda o consulta, por favor contacta a nuestro equipo de soporte a través del correo electrónico: soporte@mediacompany.es.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer