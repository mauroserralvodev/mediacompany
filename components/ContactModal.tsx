import React from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-60 bg-neutral-500">
        
      <div className="bg-black p-6 rounded-xl shadow-lg max-w-md w-full">
      <button className="text-white hover:text-gray-400 float-right  rounded-full font-bold text-center" onClick={onClose}>
          x
        </button>
        <div>
        <form action="https://formsubmit.co/mauroserralvo@gmail.com" method="POST" className="bg-black shadow-lg rounded-xl p-6">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-white mb-1">Name</label>
            <input type="text" name="name" id="name" required className="text-black w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-white mb-1">Email</label>
            <input type="email" name="email" id="email" required className="text-black w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium text-white mb-1">Message</label>
            <textarea name="message" id="message" rows={4} required className="text-black w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none" />
          </div>
          <input type="hidden" name="_next" value="https://mediacompany.vercel.app/form"/>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300">Enviar</button>
        </form>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
