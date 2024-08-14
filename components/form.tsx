import React from 'react';

const Form = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <form 
        action="https://formsubmit.co/mauroserralvo@gmail.com" 
        method="POST" 
        className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Contact Us</h2>
        
        <div className="mb-4">
          <label 
            htmlFor="name" 
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Name
          </label>
          <input 
            type="text" 
            name="name" 
            id="name" 
            required 
            className="text-black w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        
        <div className="mb-4">
          <label 
            htmlFor="email" 
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email
          </label>
          <input 
            type="email" 
            name="email" 
            id="email" 
            required 
            className="text-black w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div className="mb-6">
          <label 
            htmlFor="message" 
            className="block text-sm font-medium text-black mb-1"
          >
            Message
          </label>
          <textarea 
            name="message" 
            id="message" 
            rows={4} 
            required 
            className="text-black w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          />
        </div>
        
        <button 
          type="submit" 
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default Form;
