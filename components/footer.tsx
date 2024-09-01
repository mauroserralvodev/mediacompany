import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="bg-black inset-x-0 w-full pt-3 px-4 sm:px-6 lg:px-8 mx-auto border-t border-neutral-800">
        <div className="px-5 py-8 mx-auto flex items-center sm:flex-row flex-col max-w-[85rem]">
          <a className="flex text-lg items-center text-white mb-4 md:mb-0">
          <img src='/logo3.png' className="lg:w-64 lg:h-14 md:w-40 md:h-10 sm:w-48 sm:h-11 w-44 h-11 py-2" alt="Logo MC" />
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
      
    </div>
  )
}

export default Footer