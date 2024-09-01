import React from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75 px-4 sm:px-6">
      <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-2xl max-w-2xl w-full relative">
        <button className="absolute top-4 right-4 text-gray-700 hover:text-gray-900 font-bold text-xl focus:outline-none" onClick={onClose}>
          &times;
        </button>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Formulario de Contacto</h2>
        <p className="text-base sm:text-md text-gray-400 mb-6">Rellena el siguiente formulario y nos pondremos en contacto contigo lo antes posible. ¡Este es el impulso que tu marca necesita!</p>
        <form action="https://formsubmit.co/mauroserralvo@gmail.com" method="POST" className="grid grid-cols-1 gap-y-6 gap-x-6 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Nombre</label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Correo Electrónico</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Mensaje</label>
            <textarea
              name="message"
              id="message"
              rows={4}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-gray-900"
            />
          </div>
          <input type="hidden" name="_next" value="https://mediacompany.vercel.app/form" />
          <input type="hidden" name="_captcha" value="false" />
          <div className="sm:col-span-2">
            <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
